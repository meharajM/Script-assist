import React from 'react';
// import Editor from '../Editor';
// import Elements from '../Elements';
import Board from '../Board'
import Charector from '../../components/Charector';
import {CHAR} from '../../constants'
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    }
    this.editor = React.createRef();
  }
  onContentChange = (ev) => {
    this.setState({content: ev.currentTarget})
  }
  onAddElement = (ele) => {
    this.setState((prevState) => {
      let {content} = prevState;
      switch(ele) {
        case CHAR:
      content = `${content} ${<Charector name="meharaj"/>}`
          break;
        default: 
      }
      return {...prevState, content};
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header center">
         Script assist
        </header>
        <div className="App-container">
          {/* <Elements onAddElement={this.onAddElement}/> */}
          {/* <Editor onChange={this.onContentChange} editorRef={this.editor} /> */}
          <Board/>
        </div>
      </div>
    );
  }
  
}

export default App;
