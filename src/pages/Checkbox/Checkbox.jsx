import React, { useState } from 'react';

const Checkbox = () => {
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <input
        type='checkbox'
        id='disable-button-checkbox'
        defaultChecked={disabled}
        aria-checked={disabled} //This is so that screen readers can see whether or not it's checked
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
      <button disabled={disabled}>버튼</button>
    </>
  );
};

export default Checkbox;
