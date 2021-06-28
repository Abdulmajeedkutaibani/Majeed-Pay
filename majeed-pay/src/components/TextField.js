import React from 'react';
import { useState } from 'react';

const TextField = () => {
  const [message, setMessage] = useState('Message');
  const [textClass, setTextClass] = useState('');
  const activeTextField = (e) => {
    setMessage((e.target.value = ''));
    setTextClass('error');
  };

  return (
    <form id='form'>
      <label>Contact Us</label>
      <textarea
        className={textClass}
        value={message}
        id='text-input'
        onChange={(e) => setMessage(e.target.value)}
        onClick={activeTextField}

        // onClick={setTextClass('error')}
      ></textarea>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default TextField;
