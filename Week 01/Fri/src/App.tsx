import { useState } from 'react';
import './App.css';

import AP from './components/AP/AP';
import Homework from './components/Homework/Homework';

function App() {
  const [toggleButton, setToggleButton] = useState(true);

  const handleOnClick = (value: boolean) => {
    setToggleButton(value);
  };

  return (
    <div className="">
      {/* Afternoon Practices & Homework Button */}
      <div className="buttons mb-[15px] px-5 py-3">
        <button
          onClick={() => handleOnClick(true)}
          className="uppercase text-white text-xl font-semibold px-4 py-3 mr-3 cursor-pointer bg-green-600 rounded-2xl"
        >
          Afternoon Practices
        </button>
        <button
          onClick={() => handleOnClick(false)}
          className="uppercase text-white text-xl font-semibold px-4 py-3 cursor-pointer bg-blue-600 rounded-2xl"
        >
          Homework
        </button>
      </div>

      {/* Content */}
      <div className="bg-gray-100 rounded-xl">
        {toggleButton ? (
          // Afternoon Practices
          <AP />
        ) : (
          // Homework
          <Homework />
        )}
      </div>
    </div>
  );
}

export default App;
