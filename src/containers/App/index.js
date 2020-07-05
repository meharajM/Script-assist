import React from 'react';
// import Editor from '../Editor';
// import Elements from '../Elements';
import Board from '../Board'
// import Charector from '../../components/Charector';
// import {CHAR} from '../../constants'
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: [{id: 1, note: ""}],
      content: {},
      elementsCount: {
        sceneHeading: 1,
        action: 0,
        charector: 0,
        dialogue: 0,
        parantheticals: 0,
        transition: 0,
    },
    };
  }
  addBoard = () => {
    this.setState((prevState) => {
      const {boards} = prevState;
      const newBoard = {id: boards.length, note: ""};
      boards.push(newBoard);
      return {...prevState, boards: [...boards, newBoard]} 
    })
  }
  setContent = (id, value) => {
    this.setState((prevState) => {
      const {content} = prevState;
      content[id] = value;
      return {...prevState, content};
    })
  }
  setElementCount = (element) => {
    this.setState((prevState) => {
      const {elementsCount} = prevState;
      const newElementsCount = {...elementsCount, ...element};
      return {...prevState, elementsCount: newElementsCount}
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
          {this.state.boards.map((board) => <Board key={board.id} id={board.id} content={this.state.content} setContent={this.setContent} elementsCount={this.state.elementsCount}/>)}
        </div>
      </div>
    );
  }
  
}

export default App;
