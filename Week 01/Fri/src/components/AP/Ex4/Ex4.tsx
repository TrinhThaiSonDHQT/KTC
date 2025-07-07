import { useState } from 'react';

const Ex4 = () => {
  const [isEntered, setIsEnterd] = useState(false);
  return (
    <div
      className={`ex4 w-[500px] h-[200px] flex justify-center items-center cursor-pointer ${
        isEntered ? 'bg-yellow-400' : 'bg-white'
      }`}
      onMouseEnter={() => setIsEnterd(true)}
      onMouseLeave={() => setIsEnterd(false)}
    >
      <span className="text-2xl font-semibold">Hover me!</span>
    </div>
  );
};

export default Ex4;
