import React, { useState } from 'react';
import axios from 'axios';

const InputForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [responseText, setResponseText] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/', {
        input: inputValue,
      });

      // Assuming the response from the API is in the format { data: "Your response here" }
      setResponseText(response.data.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your input"
        />
        <button type="submit">Submit</button>
      </form>
      {responseText && <p>Response: {responseText}</p>}
    </div>
  );
};

export default InputForm;