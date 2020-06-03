import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header center">
       Script assist
        
      </header>
      <div className="App-container center">
        {/* <textarea className="page"></textarea> */}
        <div className="page" contentEditable></div>
      </div>
    </div>
  );
}

export default App;
