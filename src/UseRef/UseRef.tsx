// useRef can be used to access DOM elements directly
// useRef can be used to track previous state values because we can persist useRef values between renders

import { useState, useEffect, useRef } from "react";

const UseRef = () => {
  // 1st demo //
  const inputElement = useRef<HTMLInputElement>(null);
  const focusInput = () => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  };

  // 2nd demo //
  const [inputValue, setInputValue] = useState<string>("");
  const previousInputValue = useRef("");
  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <div className="w-full h-full pt-5 flex justify-center gap-x-3">
      {/* 1st demo */}
      <div className="flex-[5] flex flex-col items-center gap-y-2">
        <h1 className="text-xl font-bold">1st Demo</h1>
        <input type="text" ref={inputElement} />
        <button
          className="p-1 text-white text-lg font-semibold bg-sky-600 border-2 border-black rounded-2xl cursor-pointer"
          onClick={focusInput}
        >
          Focus Input
        </button>
      </div>
      {/* 2nd demo */}
      <div className="flex-[5] flex flex-col items-center gap-y-2">
        <h1 className="text-xl font-bold">2nd Demo</h1>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <h2>Current Value: {inputValue}</h2>
        <h2>Previous Value: {previousInputValue.current}</h2>
      </div>
    </div>
  );
};

export default UseRef;
