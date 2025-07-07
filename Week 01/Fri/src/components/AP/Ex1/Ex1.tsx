import { useState } from 'react';
import DefaultButton from '../DefaultButton/DefaultButton';

const Ex1 = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='ex1'>
      <DefaultButton name='click me' onClick={() => setCount((prev) => prev + 1)}/>
      <p>Clicked: {count}</p>
    </div>
  );
};

export default Ex1;
