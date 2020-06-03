import React, { useEffect, useState } from 'react';
import { SpacesDataService } from './SpacesDataService';

function App() {
  let [spaces, setSpaces] = useState([]);
  let [isLoading, setIsLoading] = useState(false);

  async function nextPage() {
    withLoading(async () =>
      setSpaces(await SpacesDataService({ filter: "all" })));
  }

  function available() {
    withLoading(async () =>
      setSpaces(await SpacesDataService({ filter: "available" })));
  }

  async function withLoading(f) {
    setIsLoading(true);
    setTimeout(async () => {
      setIsLoading(false);
      f();
    }, 2000);
  }

  useEffect(() => {
    available();
  }, []);

  return <>
    <button onClick={_ => available()}>Available</button>
    <button onClick={_ => nextPage()}>All</button>
    {isLoading ? "Loading" : null}
    <div>
      Spaces
      { !isLoading &&  spaces.map(e => <p key={e.suite}>{`${e.suite} | ${e.tenant} | ${e.size} | ${e.type}`}</p>) }
    </div>
  </>;
}

export default App;
