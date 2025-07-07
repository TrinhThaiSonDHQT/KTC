import { useState } from 'react';

const items = ['Apple', 'Banana', 'Orange', 'Grapes', 'Pineapple'];

const Ex10 = () => {
  const [results, setResults] = useState<string[]>([]);
  const handleClick = (value: string) => {
    const results = items.filter((item) => item.includes(value.toLowerCase()));
    setTimeout(() => {
      setResults(results);
    }, 500)
  };

  return (
    <div className="ex10">
      <input
        type="text"
        placeholder="Enter something..."
        onChange={(e) => handleClick(e.target.value)}
        className="border-1 p-3 rounded-lg mr-3"
      />
      <ul>
        {results.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Ex10;
