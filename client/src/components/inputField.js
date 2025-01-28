import React, { useState } from "react";
import axios from "axios";

function InputText() {
  const [inputValue, setInputValue] = useState();

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };


  const url = "http://localhost:8081/analyze";

  const handleOnClick = async () => {
    console.log('submit :' ,inputValue)
    const response = await axios.post(url, {
      text: inputValue, 
    });

    console.log(response.data, 'res')

  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Test</h1>
      <div>
        <input
          type="text"
          placeholder="please input your task"
          onChange={handleOnChange}
          value={inputValue}
        />
         <button disabled={!inputValue ? true: false } onClick={handleOnClick}>Submit</button>
      </div>
      <div>
        <h3>Result</h3>
        <div></div>
      </div>
    </div>
  );
}

export default InputText;
