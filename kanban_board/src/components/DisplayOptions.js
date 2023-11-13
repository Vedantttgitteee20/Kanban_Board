import React from 'react';

const DisplayOptions = ({ onChange }) => {
  const handleOptionChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <label>
        Display by:
        <select onChange={handleOptionChange}>
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </label>
    </div>
  );
};

export default DisplayOptions;
