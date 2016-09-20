import React, { Component } from 'react';

const Input = (props) => {
  const { currentWord, handleInput, handleMultiplier, multiplier } = props;

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a Word"
        value={currentWord}
        onChange={handleInput} />
      <input
        type="number"
        placeholder="Enter multiplier"
        value= {multiplier}
        onChange={handleMultiplier} />
    </div>
  );
}

export default Input;
