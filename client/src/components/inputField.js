import React, { useState, Suspense } from "react";
import axios from "axios";
import ResultSection from "./resultSection";
import { url } from "../utill/api";



function InputText() {
  const [inputValue, setInputValue] = useState("");
  const [sentiment, setSentiment] = useState(null);
  const [confidence, setConfidence] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnClick = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(url, {
        text: inputValue,
      });
      setSentiment(response.data.sentiment);
      setConfidence(response.data.confidence);
    } catch (err) {
      console.log(err, "err");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="p-5 mb-10">
        <h1 className="text-3xl font-bold underline text-center">
          Hugging Face
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center item-center p-5">
        <input
          type="text"
          placeholder="please input your words."
          onChange={handleOnChange}
          value={inputValue}
          className="m-2 md:w-[500px] py-1.5 pr-3 pl-1 text-base text-gray-900 rounded-lg placeholder:text-gray-400 border border-gray-400 focus:border-indigo-500 focus:outline-none sm:text-sm/6"
        />
        <button
          disabled={!inputValue}
          onClick={handleOnClick}
          className="rounded-lg md:w-[100px] h-[40px] bg-blue-500 text-white disabled:bg-gray-500 disabled:cursor-not-allowed mt-1.5 m-2"
        >
          Submit
        </button>
      </div>
      <ResultSection
        isLoading={isLoading}
        sentiment={sentiment}
        confidence={confidence}
      />
    </div>
  );
}

export default InputText;
