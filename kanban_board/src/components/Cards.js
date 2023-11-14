import React from 'react';
import Styles from '../css/Cards.module.css';
// import Avatar from './Avatar';

const Card = ({ ticket }) => {
  return (
    <div className={Styles.card}>
      <div className={Styles.cardId}>{ticket.id}</div>
      <div className={Styles.cardTitle}>{ticket.title}</div>
      
    </div>
  );
};

export default Card;
