import React, { useState } from "react";
import { Input } from "react-daisyui";

export const Solution = () => {

  const [fizzNumber, setFizzNumber] = useState(3);
  const [buzzNumber, setBuzzNumber] = useState(5);

  const handleFizzChange = (event: any) => {
    setFizzNumber(Number(event.target.value));
  };

  const handleBuzzChange = (event: any) => {
    setBuzzNumber(Number(event.target.value));
  };

  const calculateFizzBuzz = (number: any) => {
    const isFizz = number % fizzNumber === 0;
    const isBuzz = number % buzzNumber === 0;

    if (isFizz && isBuzz) return "FizzBuzz";
    if (isFizz) return "Fizz";
    if (isBuzz) return "Buzz";
    return number;
  }


  return (
    <article className="prose lg:prose-l">
      <h1>Solution</h1>

      <h2>Input:</h2>
      <div className="flex justify-between gap-4">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Fizz number</span>
          </label>
          <Input 
            color="primary" 
            type="number"
            value={fizzNumber}
            onChange={handleFizzChange}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Buzz number</span>
          </label>
          <Input 
            color="secondary" 
            type="number"
            value={buzzNumber}
            onChange={handleBuzzChange}
          />
        </div>
      </div>
      <h2>Output:</h2>
      <div className="grid grid-cols-5 gap-4">
        {Array.from({ length: 100 }, (_, index) => index + 1).map((number) => (
          <div key={number} className="text-center p-2 border border-gray-400 rounded-md">
            {calculateFizzBuzz(number)}
          </div>
        ))}
      </div>
    </article>
  );
};
