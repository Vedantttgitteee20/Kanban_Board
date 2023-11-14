// DisplayOptions.js

import React, { useState } from 'react';

const DisplayOptions = ({ onOptionChange, onSortChange }) => {
  const [selectedOption, setSelectedOption] = useState('status');
  const [selectedSort, setSelectedSort] = useState('priority');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    onOptionChange(e.target.value);
  };

  const handleSortChange = (e) => {
    setSelectedSort(e.target.value);
    onSortChange(e.target.value);
  };

  return (
    <div>
      <label>
        Display by:
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </label>
      <label>
        Sort by:
        <select value={selectedSort} onChange={handleSortChange}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </label>
    </div>
  );
};

export default DisplayOptions;
