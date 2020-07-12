import React from 'react';
import { Tabs, Button } from 'antd';
// import Editor from '../Editor';
// import Elements from '../Elements';
import saveScript from '../../utils/saveScript';
import Board from '../Board'
// import Charector from '../../components/Charector';
// import {CHAR} from '../../constants'
import './App.scss';
const { TabPane } = Tabs;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: [{id: 1, note: ""}],
      activeBoard: 1,
      content: {},
      scriptContent: new Map(),
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
      return {...prevState, boards, activeBoard: newBoard.id} 
    })
  }
  setContent = (id, value, isRemove) => {
    this.setState((prevState) => {
      const {content, scriptContent} = prevState;
      if(isRemove) {
        scriptContent.delete(id);
        delete content[id];
      } else {
        scriptContent.set(id, value);
        content[id] = value;
      }
      return {...prevState, content, scriptContent};
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
  onSave = () => {
    saveScript(this.state.scriptContent);
  }
  render() {
    const {activeBoard} = this.state;
    return (
      <div className="App">
        <header className="App-header center">
         Script assist
        <div className="options">
          <Button className="save-button" onClick={this.onSave}>Save</Button>
        </div>
        </header>
        <div className="App-container">
          {/* <Elements onAddElement={this.onAddElement}/> */}
          {/* <Editor onChange={this.onContentChange} editorRef={this.editor} /> */}
          <Tabs activeKey={activeBoard.toString()} onChange={this.onTabChange} tabPosition="bottom" style={{height: '100%'}} type="editable-card" hideAdd={true}>
          {this.state.boards.map((board, index) => <TabPane tab={`Scene-${index + 1}`} key={board.id.toString()}><Board 
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
