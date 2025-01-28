import React, { useState } from "react";
import axios from "axios";

function InputText() {
  const [inputValue, setInputValue] = useState("");
  const [sentiment, setSentiment] = useState(null);
  const [confidence, setConfidence] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const url = "http://localhost:8081/analyze";

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
          class="rounded-lg md:w-[100px] h-[40px] bg-blue-500 text-white disabled:bg-gray-500 disabled:cursor-not-allowed mt-1.5 m-2"
        >
          Submit
        </button>
      </div>
      <div className="mt-10">
        {!isLoading ? (
          sentiment && confidence ? (
            <div className="flex flex-col justify-center p-5">
              <h3 className="text-2xl font-bold underline mb-3 text-center">Result</h3>
              <div className="flex justify-center">
              <table class="border-collapse border border-gray-400 md:w-[500px] w-[100%]">
                <thead>
                  <tr>
                    <th class="border border-gray-300">Sentiment</th>
                    <th class="border border-gray-300">Confidence</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border border-gray-300 text-center">
                      {sentiment}
                    </td>
                    <td class="border border-gray-300 text-center">
                      {confidence}
                    </td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500">There is any data.</div>
          )
        ) : (
          <div className="text-center text-blue-500">Loading...</div>
        )}
      </div>
    </div>
  );
}

export default InputText;
