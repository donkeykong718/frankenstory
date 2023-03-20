import React, { useState } from 'react'
import Child from './Child'

export const DataContext = React.createContext();

function Parent() {
  const [data, setData] = useState(null);

  return (
    <DataContext.Provider value={{ data, setData }}>
      <Child />
      <p>Data from child: {data}</p>
    </DataContext.Provider>
  );
}

export default Parent;