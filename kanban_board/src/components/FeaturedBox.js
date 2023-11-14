// FeaturedBox.js
import React from 'react';
import Styles from '../css/FeaturedBox.module.css';
import { FaCircle } from "react-icons/fa6";

export const FeaturedBox = ({ name, style }) => {
  return (
    <div className={Styles.outlineBox} style={style}>
      <div className={Styles.icon}><FaCircle /></div>
      <div className={Styles.text}>{name}</div>
    </div>
  );
};