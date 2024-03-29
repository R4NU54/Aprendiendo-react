import { useState } from 'react';

import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    setInputValue('');
    onNewCategory(inputValue.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      aria-label='form'>
      <input
        type='text'
        placeholder='Search...'
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
