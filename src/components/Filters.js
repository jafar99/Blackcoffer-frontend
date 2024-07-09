import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Dashboard.module.css'; 

const Filters = ({ filters, setFilters }) => {
  const [filterOptions, setFilterOptions] = useState({
    endYearOptions: [],
    topicOptions: [],
    sectorOptions: [],
    regionOptions: [],
    pestleOptions: [],
    sourceOptions: [],
    swotOptions: [],
    countryOptions: [],
    cityOptions: []
  });

  useEffect(() => {
    axios.get('http://localhost:5000/data')
      .then(response => {
        const { data } = response;

        const endYearOptions = Array.from(new Set(data.map(item => item.end_year)));
        const topicOptions = Array.from(new Set(data.map(item => item.topic)));
        const sectorOptions = Array.from(new Set(data.map(item => item.sector)));
        const regionOptions = Array.from(new Set(data.map(item => item.region)));
        const pestleOptions = Array.from(new Set(data.map(item => item.pestle)));
        const sourceOptions = Array.from(new Set(data.map(item => item.source)));
        const swotOptions = Array.from(new Set(data.map(item => item.swot)));
        const countryOptions = Array.from(new Set(data.map(item => item.country)));
        const cityOptions = Array.from(new Set(data.map(item => item.city)));

        setFilterOptions({
          endYearOptions,
          topicOptions,
          sectorOptions,
          regionOptions,
          pestleOptions,
          sourceOptions,
          swotOptions,
          countryOptions,
          cityOptions
        });
      })
      .catch(error => {
        console.error("Error fetching filter options:", error);
      });
  }, []); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  return (
    <div className={styles.filter}>
      <h2>Filters</h2>
      <div>
        <label htmlFor="endYear" className={styles.label}>End Year:</label>
        <select
          id="endYear"
          name="endYear"
          value={filters.endYear}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="">Select End Year</option>
          {filterOptions.endYearOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="topic" className={styles.label}>Topic:</label>
        <select
          id="topic"
          name="topic"
          value={filters.topic}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="">Select Topic</option>
          {filterOptions.topicOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="sector" className={styles.label}>Sector:</label>
        <select
          id="sector"
          name="sector"
          value={filters.sector}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="">Select Sector</option>
          {filterOptions.sectorOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="region" className={styles.label}>Region:</label>
        <select
          id="region"
          name="region"
          value={filters.region}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="">Select Region</option>
          {filterOptions.regionOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="pestle" className={styles.label}>PEST:</label>
        <select
          id="pestle"
          name="pestle"
          value={filters.pestle}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="">Select PEST</option>
          {filterOptions.pestleOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="source" className={styles.label}>Source:</label>
        <select
          id="source"
          name="source"
          value={filters.source}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="">Select Source</option>
          {filterOptions.sourceOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="swot" className={styles.label}>SWOT:</label>
        <select
          id="swot"
          name="swot"
          value={filters.swot}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="">Select SWOT</option>
          {filterOptions.swotOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="country" className={styles.label}>Country:</label>
        <select
          id="country"
          name="country"
          value={filters.country}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="">Select Country</option>
          {filterOptions.countryOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="city" className={styles.label}>City:</label>
        <select
          id="city"
          name="city"
          value={filters.city}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="">Select City</option>
          {filterOptions.cityOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;
