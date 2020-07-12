import React from 'react';
import { Tabs, Button } from 'antd';
// import Editor from '../Editor';
// import Elements from '../Elements';
import saveScript from '../../utils/saveScript';
import isMobile from '../../utils/isMobile';
import elementTypes from './elementTypes';
import Board from '../Board'
// import Charector from '../../components/Charector';
// import {CHAR} from '../../constants'
import constants from '../../constants';
import './App.scss';
const { TabPane } = Tabs;
class App extends React.Component {
  constructor(props) {
    super(props);
    const elementsCount = {
      sceneHeading: 1,
      action: 0,
      charector: 0,
      dialogue: 0,
      parantheticals: 0,
      transition: 0,
  };
    this.state = {
      boards: [{id: 1, note: ""}],
      activeBoard: 1,
      content: {},
      scriptContent: new Map(),
      elementsCount,
      elementsList: [{type: constants.SCENE_HEADING, sceneNumber: elementsCount.sceneHeading, id: `sceneHeading-${elementsCount.sceneHeading}`}],
      currentElement: `sceneHeading-${elementsCount.sceneHeading}`,
    };
  }
  setElemetsList = (newEle) => {
    this.setState(prevState => {
      const prevElList = prevState.elementsList;
      return {...prevState, elementsList: [...prevElList, newEle]}
    });
  }
  removeElement = (eleId) => {
    const {elementsList} = this.state;
    if(elementsList.length > 1 && eleId){
      const newElementsList = elementsList.filter(el => el.id !== eleId);
      this.setState({elementsList: newElementsList});
      this.setCurrentElement(newElementsList[newElementsList.length - 1].id);
      this.setContent(eleId, undefined, true);
  }
  }
  setCurrentElement = (ele) => {
    this.setState({currentElement: ele});
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
  onTabChange = (activeKey) => {
    this.setState({activeBoard: activeKey})
  }
  onSave = () => {
    saveScript(this.state.scriptContent);
  }
  render() {
    const {activeBoard, currentElement, elementsCount} = this.state;
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
          <Tabs activeKey={activeBoard.toString()} className="boards" onChange={this.onTabChange} tabPosition="top" type="editable-card" hideAdd={true}>
          {this.state.boards.map((board, index) => <TabPane tab={`Scene-${index + 1}`} key={board.id.toString()}>
            <Board 
              id={board.id} 
              content={this.state.content} 
              setContent={this.setContent} 
              elementsCount={this.state.elementsCount} 
              setElementCount={this.setElementCount}
              addBoard={this.addBoard}
              elementsList={this.state.elementsList}
              setElemetsList={this.setElemetsList}
              currentElement={currentElement}
              setCurrentElement={this.setCurrentElement}
              removeElement={this.removeElement}
              /> </TabPane>)}
          </Tabs>
          
        </div>
        <footer>
          {isMobile() && <div className="mobile-footer">
            <div className="mobile-options">
        
              <Button onClick={() => {
                this.setElementCount({ sceneHeading: elementsCount.sceneHeading + 1});
                this.addBoard();
              }} >Scene heading</Button>
              <Button onClick={() => {
                this.setElemetsList(elementTypes.action(elementsCount));
                this.setElementCount({ action: elementsCount.action + 1});
              }}>Action</Button>
              <Button onClick={() => {
                this.setElemetsList(elementTypes.charecter(elementsCount));
                this.setElementCount({ charector: elementsCount.charector + 1});
              }} >Character</Button>
              <Button onClick={() => {
                this.setElemetsList(elementTypes.paranthetical(elementsCount));
                this.setElementCount({parantheticals: elementsCount.parantheticals + 1});
              }} >Paranthetical</Button>
              <Button onClick={() => {
                this.setElemetsList(elementTypes.dialogue(elementsCount));
                this.setElementCount({dialogue: elementsCount.dialogue + 1});

              }} >Dialogue</Button>
              <Button onClick={() => {
                this.setElemetsList(elementTypes.transition(elementsCount));
                this.setElementCount({ transition: elementsCount.transition + 1});

              }} >Transition</Button>
            </div>
            </div>}
        </footer>
      </div>
    );
  }
  
}

export default App;
