import { useState } from 'react';
import Button from './Button';

const buttons = {
  'row 1': [7, 8, 9, '/'],
  'row 2': [4, 5, 6, '*'],
  'row 3': [1, 2, 3, '-'],
  'row 4': ['.', 0, '+', 'C'],
};

const Calculator = () => {
  const [userInput, setUserInput] = useState<string | number>(0);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleClickButton = (content: string | number) => {
    content = content.toString().toLowerCase();
    let newContent = '0';

    if (content === 'c') {
      // Clear screen
      setUserInput(newContent);
    } else if (content === '=') {
      // Return result
      let isValid = true;
      if (/\/0(\D|$)/.test(newContent)) {
        console.log('Division by zero!');
        isValid = false;
      } else if (/[-+*/]{2,}/.test(newContent)) {
        console.log('Consecutive operators!');
        isValid = false;
      }

      if (isValid) {
        setUserInput((prev) => eval(prev.toString()));
      }

      setIsCalculating(true);
    } else {
      let currentValue = '';

      if (isCalculating) {
        currentValue = '0';
        setIsCalculating(false);
      } else {
        currentValue = userInput.toString();
      }
      newContent = currentValue + content;

      // If the user starts with '.', prefix with '0'
      if ((currentValue === '0' || currentValue === '') && content === '.') {
        newContent = '0.';
      }

      // If the user enters '.' right after an operator, insert '0.'
      if (content === '.' && /[+\-*/]$/.test(currentValue)) {
        newContent = currentValue + '0.';
      }

      const inputRegex =
        /^\s*([-+]?(?:\d+\.?\d*|\.\d+))(\s*[-+*/]\s*([-+]?(?:\d+\.?\d*|\.\d+)))*\s*([-+*/])?\s*$/;
      if (inputRegex.test(newContent)) {
        setUserInput((prev) => {
          if (prev.toString() === '0' && content !== '.') {
            newContent = newContent.slice(1);
          }
          return newContent;
        });
      }
    }
  };
  return (
    <div className="flex items-center justify-center">
      <div className="wrapper w-sm content-center bg-stone-800 px-[20px] py-[25px] rounded-xl">
        <div className="h-[70px] bg-white mb-[20px] flex items-end justify-end">
          <span id="display" className="me-[10px] text-3xl">
            {userInput}
          </span>
        </div>

        {/* Buttons */}
        <div
          id="buttons-container"
          className="buttons flex flex-col gap-[15px]"
        >
          {Object.entries(buttons).map((button, index) => {
            return (
              <div key={index} className="flex justify-between items-center">
                {button[1].map((item, index) => {
                  return (
                    <Button
                      key={index}
                      content={item}
                      onHandleClick={handleClickButton}
                    />
                  );
                })}
              </div>
            );
          })}

          {/* Result button */}
          <button
            className="bg-red-500 px-4 py-2 rounded cursor-pointer"
            onClick={() => handleClickButton('=')}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
