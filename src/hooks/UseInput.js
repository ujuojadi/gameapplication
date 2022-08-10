import React, { useState } from "react";

const UseInput = (initialState) => {
  const [inputValue, setinputValue] = useState(initialState);

  const handleChange = (e) => {
    setinputValue(e.target.value);
    console.log(inputValue);
  };

  const reset = (e) => {
    setinputValue("");
  };
  return [inputValue, handleChange, reset];
};

export default UseInput;
