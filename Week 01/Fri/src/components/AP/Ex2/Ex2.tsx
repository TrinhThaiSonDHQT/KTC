import { useState } from 'react';

const Ex2 = () => {
  const [userInput, setUserInput] = useState('');
  return (
    <div className="ex2">
      <input
        type="text"
        placeholder="Enter somthing..."
        onChange={(e) => setUserInput(e.target.value)}
        className='border-1 p-2 rounded-lg'
      />
      <p>You typed {userInput ? userInput : 'nothing'}</p>
    </div>
  );
};

export default Ex2;
