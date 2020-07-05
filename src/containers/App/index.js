import React from 'react';
import { Tabs } from 'antd';
// import Editor from '../Editor';
// import Elements from '../Elements';
import Board from '../Board'
// import Charector from '../../components/Charector';
// import {CHAR} from '../../constants'
import './App.css';
const { TabPane } = Tabs;
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
      const boards = [...prevState.boards];
      const newBoard = {id: boards.length + 1, note: ""};
      boards.push(newBoard);
      return {...prevState, boards} 
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
  onTabChange = () => {

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
          <Tabs defaultActiveKey="1" onChange={this.onTabChange}>
          {this.state.boards.map((board, index) => <TabPane tab={`Scene-${index + 1}`} key={index}><Board 
                                                key={board.id} 
                                                id={board.id} 
                                                content={this.state.content} 
                                                setContent={this.setContent} 
                                                elementsCount={this.state.elementsCount} 
                                                setElementCount={this.setElementCount}
                                                addBoard={this.addBoard}
                                                /> </TabPane>)}
          </Tabs>
          
        </div>
      </div>
    );
  }
  
}

export default App;
