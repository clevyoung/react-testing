import React, { useState } from 'react';
import { fruits } from '../../constants';

const RadioGroup = () => {
  const [answer, setAnswer] = useState(null);

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const disabled = answer ? false : true;

  return (
    <div>
      <h2>What kind of fruits do you like?</h2>
      <ul>
        {fruits.map((fruit, index) => {
          return (
            <li key={index} onChange={handleChange}>
              <input
                id={fruit}
                type='radio'
                value={fruit}
                name='fruit'
                checked={answer === fruit}
              />
              <label htmlFor={fruit}>{fruit}</label>
            </li>
          );
        })}
      </ul>
      <button disabled={disabled}>button</button>
    </div>
  );
};

export default RadioGroup;
