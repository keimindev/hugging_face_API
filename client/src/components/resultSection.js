import React from "react";

function ResultSection ({isLoading, sentiment, confidence}){

  return (
    <div className="mt-10">
      {!isLoading ? (
        sentiment && confidence ? (
          <div className="flex flex-col justify-center p-5">
            <h3 className="text-2xl font-bold underline mb-3 text-center">
              Result
            </h3>
            <div className="flex justify-center">
              <table className="border-collapse border border-gray-400 md:w-[500px] w-[100%]">
                <thead>
                  <tr>
                    <th className="border border-gray-300">Sentiment</th>
                    <th className="border border-gray-300">Confidence</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 text-center">
                      {sentiment}
                    </td>
                    <td className="border border-gray-300 text-center">
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
  );
}

export default ResultSection;
