import { useState } from 'react';
import DefaultButton from '../DefaultButton/DefaultButton';

const Ex3 = () => {
  const [mode, setMode] = useState(false);
  const handleClick = () => {
    setMode((prev) => !prev);
  };
  return (
    <div className="ex3">
      <DefaultButton name='switch' onClick={handleClick}/>
      <p className="text-xl">State: {mode ? 'ON' : 'OFF'}</p>
    </div>
  );
};

export default Ex3;
