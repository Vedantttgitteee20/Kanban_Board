// DisplayOptions.js
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { IoMdOptions } from "react-icons/io";
import Styles from '../css/DisplayOptions.module.css';

const DisplayOptions = ({ onOptionChange, onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGrouping, setSelectedGrouping] = useState('status');
  const [selectedOrdering, setSelectedOrdering] = useState('priority');
  const dropdownRef = useRef(null);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionChange = (e) => {
    setSelectedGrouping(e.target.value);
    onOptionChange(e.target.value);
  };

  const handleSortChange = (e) => {
    setSelectedOrdering(e.target.value);
    onSortChange(e.target.value);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={Styles.displayOptions} ref={dropdownRef}>
      <button onClick={handleToggleDropdown} className={Styles.toggleButton}>
        <IoMdOptions style={{ marginRight: '5px', color: '#40454b' }} />
        <div className={Styles.text}>Display</div>
        <FontAwesomeIcon icon={faChevronDown} className={Styles.chevronIcon} />
      </button>
      {isOpen && (
        <div className={Styles.dropdown}>
          <div className={Styles.section}>
            <label>
              <div>Grouping</div>
              <select value={selectedGrouping} onChange={handleOptionChange}>
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </label>
          </div>
          <div className={Styles.section}>
            <label>
              <div>Ordering</div>
              <select value={selectedOrdering} onChange={handleSortChange}>
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayOptions;
