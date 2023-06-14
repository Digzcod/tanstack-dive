import React from 'react';
import InfinitePeople from './components/people/InfinitePeople';
import InfiniteSpecies from './components/species/InfiniteSpecies';


function App() {
  return (
    <>
    <h4>Hello World</h4>
    {/* <div className="scroll">
      <InfinitePeople/>
    </div> */}
    <div className="scroll">
      <InfiniteSpecies/>
    </div>
    </>
  );
}

export default App;
