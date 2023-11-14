// Home.js

import React, { useState, useEffect } from 'react';
import Styles from '../css/Home.module.css';
import { fetchData } from './api';
import DisplayOptions from './DisplayOptions';
import KanbanBoard from './KanbanBoard';

const Home = () => {
  const [tickets, setTickets] = useState([]);
  const [displayOption, setDisplayOption] = useState('status');
  const [sortOption, setSortOption] = useState('priority');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetchData()
      .then((data) => {
        setTickets(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleDisplayOptionChange = (option) => {
    setDisplayOption(option);
  };

  const handleSortOptionChange = (option) => {
    setSortOption(option);
  };

  if (loading) {
    return <div className={Styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={Styles.error}>Error: {error.message}</div>;
  }

  return (
    <div className={Styles.home}>
      <div className={Styles.navbar}>
        <DisplayOptions
          onOptionChange={handleDisplayOptionChange}
          onSortChange={handleSortOptionChange}
        />
      </div>
      <KanbanBoard tickets={tickets} displayOption={displayOption} sortOption={sortOption} />
    </div>
  );
};

export default Home;
