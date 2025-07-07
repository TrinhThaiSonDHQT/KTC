import { useState } from 'react';

const Ex7 = () => {
  const [isShowed, setIsShowed] = useState(false);
  const handleClick = () => {
    setIsShowed(true);
    setTimeout(() => {
      setIsShowed(false);
    }, 1000);
  };

  return (
    <div className="ex7">
      <button
        className="uppercase text-xl font-semibold bg-green-600 px-4 py-2 text-white rounded-xl cursor-pointer"
        onClick={handleClick}
      >
        Click me!
      </button>
      {isShowed && <p>Double clicked!</p>}
    </div>
  );
};

export default Ex7;
