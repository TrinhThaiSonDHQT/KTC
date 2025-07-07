import { useState } from 'react';
import DefaultButton from '../DefaultButton/DefaultButton';

const Ex5 = () => {
  const [userInput, setUserInput] = useState('');

  const handleClick = () => {
    alert(userInput);
  };

  return (
    <div className="ex5">
      <input
        type="text"
        placeholder="Enter something..."
        onChange={(e) => setUserInput(e.target.value)}
        className="border-1 p-3 rounded-lg mr-3"
      />
      <DefaultButton name="submit" onClick={handleClick} />
    </div>
  );
};

export default Ex5;
