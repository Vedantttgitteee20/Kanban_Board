// Avatar.js
import React from 'react';
import Styles from '../css/Avatar.module.css';

const Avatar = ({ username, style }) => {
  // Extract initials from the username
  const initials = username
    .split(' ')
    .map((name) => name.charAt(0).toUpperCase())
    .join('');

  return (
    <div className={Styles.avatar} style={style}>
      {initials}
    </div>
  );
};

export default Avatar;
