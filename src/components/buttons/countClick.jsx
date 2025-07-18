import { useState } from 'react';

export default function CountClicked() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg cursor-pointer mx-1' onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}