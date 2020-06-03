import React from 'react';
import Editor from '../Editor';
import Elements from '../Elements';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header center">
       Script assist
        
      </header>
      <div className="App-container center">
        {/* <textarea className="page"></textarea> */}
        <Elements/>
        <Editor/>
      </div>
    </div>
  );
}

export default App;
