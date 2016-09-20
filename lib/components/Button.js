import React from 'react';

const SubmitButton = (props) => {
  const { words, handleWordScore, clearInput } = props;

  return (
    <div>
      <button
        disabled= {!words}
        onClick={handleWordScore}
      >
      Submit
      </button>
      <button
        className="clear-button"
        disabled={!words}
        onClick={clearInput} >
        Clear
      </button>
    </div>
  );
};

export default SubmitButton;
