import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Dashboard.module.css";
import ChartComponent from "./ChartComponent";
import Filters from "./Filters";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    endYear: "",
    topic: "",
    sector: "",
    region: "",
    pestle: "",
    source: "",
    swot: "",
    country: "",
    city: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/data")
      .then((response) => {
        setData(response.data);
        setFilteredData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const filtered = data.filter((item) => {
      return (
        (filters.endYear === "" || item.end_year === filters.endYear) &&
        (filters.topic === "" || item.topic === filters.topic) &&
        (filters.sector === "" || item.sector === filters.sector) &&
        (filters.region === "" || item.region === filters.region) &&
        (filters.pestle === "" || item.pestle === filters.pestle) &&
        (filters.source === "" || item.source === filters.source) &&
        (filters.swot === "" || item.swot === filters.swot) &&
        (filters.country === "" || item.country === filters.country) &&
        (filters.city === "" || item.city === filters.city)
      );
    });

    setFilteredData(filtered);
  }, [filters, data]);

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>Vuexy</div>
        <nav>
          <ul>
            <li>
              <a href="#dashboards">Dashboards</a>
            </li>
            <li>
              <a href="#front-pages">Front Pages</a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className={styles.content}>
        <header className={styles.header}>
          <div className={styles.profile}>
            <span>Profile Name</span>
          </div>
        </header>
        <div className={styles.main}>
          <div className={styles.filters}>
            <Filters filters={filters} setFilters={setFilters} />
          </div>
          <div className={styles.chartContainer}>
            <h2>Area Chart</h2>
            <ChartComponent data={filteredData} />
          </div>
        </div>
        <footer className={styles.footer}>Dashboard Footer</footer>
      </main>
    </div>
  );
};

export default Dashboard;
