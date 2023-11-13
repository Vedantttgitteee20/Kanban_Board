
import Styles from '../css/Home.module.css'
import React, { useState, useEffect } from 'react';
import { fetchData } from './api';
import DisplayOptions from './DisplayOptions';
import KanbanBoard from './KanbanBoard';
const Home = () => {
  const [tickets, setTickets] = useState([]);
  const [displayOption, setDisplayOption] = useState('status');

  useEffect(() => {
    // Fetch data from the API and set it to the state
    fetchData().then((data) => setTickets(data));
  },[]);
  const handleDisplayOptionChange = (option) => {
    setDisplayOption(option);
  };
  return (
    <div className={Styles.home}>
      <div className={Styles.navbar}>
      <DisplayOptions onChange={handleDisplayOptionChange} />
      </div>
      <KanbanBoard tickets={tickets} displayOption={displayOption} />

    </div>

  );
}

export default Home;
