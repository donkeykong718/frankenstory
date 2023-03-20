import { useContext } from 'react';
import { DataContext } from './Parent';

function Child() {
  const { setData } = useContext(DataContext);

  function handleClick() {
    setData('Hello from child');
  }

  return (
    <button onClick={handleClick}>Send data to parent</button>
  );
}

export default Child;