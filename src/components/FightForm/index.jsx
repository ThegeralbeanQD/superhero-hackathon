import React, { useState } from 'react';

const FightForm = ({ handleSearch }) => {
  const [inputText, setInputText] = useState('');

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(inputText);
  };

  return (
    <form>
      <input type="text" placeholder="Superhero Name" value={inputText} onChange={handleInput} />
      <button type="submit" onClick={handleSubmit}>
        Find
      </button>
    </form>
  );
};

export default FightForm;
