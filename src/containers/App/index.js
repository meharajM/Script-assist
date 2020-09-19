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
import Logline from '../../components/Logline';
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
  const defaultElement = {type: constants.SCENE_HEADING, sceneNumber: elementsCount.sceneHeading, id: `board-${1}-sceneHeading-${elementsCount.sceneHeading}`};
  const elementsLists = {1: [defaultElement]}
    this.state = {
      boards: [{id: 'logline', type: constants.LOGLINE, name: 'Logline'}, {id: 1, note: "", name: 'Scene-1'}],
      activeBoard: 1,
      content: {},
      scriptContent: new Map(),
      elementsCount,
      elementsLists: elementsLists,
      currentElementsList: elementsLists[1],
      currentElement: defaultElement.id,
    };
  }
  setElemetsList = (newEle) => {
    this.setState(prevState => {
      const prevElList = {...prevState.elementsLists};
      prevElList[prevState.activeBoard] = [...prevElList[prevState.activeBoard], newEle]
      return {...prevState, elementsLists: prevElList, currentElementsList: prevElList[prevState.activeBoard]}
    });
  }
  removeElement = (eleId) => {
    const {currentElementsList, activeBoard} = this.state;
    const elementsLists = {...this.state.elementsLists};
    if(currentElementsList.length > 1 && eleId){
      const newElementsList = currentElementsList.filter(el => el.id !== eleId);
      elementsLists[activeBoard] = newElementsList;
      this.setState({elementsLists, currentElementsList: newElementsList});
      this.setCurrentElement(newElementsList[newElementsList.length - 1].id);
      this.setContent(eleId, undefined, true);
  }
  }
  setCurrentElement = (ele) => {
    this.setState({currentElement: ele});
  }
  addBoard = () => {
    const {elementsCount} = this.state;
    this.setState((prevState) => {
      const boards = [...prevState.boards];
      const newId = boards[boards.length - 1].id + 1;
      debugger;
      const newBoard = {id: newId, note: "", name: `Scene-${newId}`};
      boards.push(newBoard);
      const elementsLists = {...prevState.elementsLists};
      // const newElementsCount = {...prevState.elementsCount, sceneHeading: prevState.elementsCount.sceneHeading + 1}
      const newScene = {type: constants.SCENE_HEADING, sceneNumber: elementsCount.sceneHeading, id: `board-${newBoard.id}-sceneHeading-${elementsCount.sceneHeading}`};
      elementsLists[newBoard.id] = [newScene];
      return {...prevState, boards, activeBoard: newBoard.id, elementsLists, currentElementsList: elementsLists[newBoard.id], currentElement: newScene.id} 
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
    const newState = {activeBoard: activeKey};
    if(activeKey !== "logline") {//if not log line page
      const {elementsLists} = this.state;
      newState.currentElementsList = elementsLists[activeKey]
    }
    this.setState(newState);
  }
  onSave = () => {
    saveScript(this.state.scriptContent);
  }
  render() {
    const {activeBoard, currentElement, elementsCount, currentElementsList} = this.state;
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
          {this.state.boards.map((board, index) => <TabPane tab={board.name} key={board.id.toString()}>
            {board.type === constants.LOGLINE ? 
              <Logline 
              content={this.state.content} 
              onChange={(ev) => {
                const content = ev.target.value;
                debugger;
                this.setContent(board.id, content);
              }} 

              id={board.id}
              />
            : 
            <Board 
              id={board.id} 
              key={`board-${board.id}`}
              content={this.state.content} 
              setContent={this.setContent} 
              elementsCount={this.state.elementsCount} 
              setElementCount={this.setElementCount}
              addBoard={this.addBoard}
              elementsList={currentElementsList}
              setElemetsList={this.setElemetsList}
              currentElement={currentElement}
              setCurrentElement={this.setCurrentElement}
              removeElement={this.removeElement}
            /> }</TabPane>)}
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
                this.setElemetsList(elementTypes.action(elementsCount, activeBoard));
                this.setElementCount({ action: elementsCount.action + 1});
              }}>Action</Button>
              <Button onClick={() => {
                this.setElemetsList(elementTypes.charecter(elementsCount, activeBoard));
                this.setElementCount({ charector: elementsCount.charector + 1});
              }} >Character</Button>
              <Button onClick={() => {
                this.setElemetsList(elementTypes.paranthetical(elementsCount, activeBoard));
                this.setElementCount({parantheticals: elementsCount.parantheticals + 1});
              }} >Paranthetical</Button>
              <Button onClick={() => {
                this.setElemetsList(elementTypes.dialogue(elementsCount, activeBoard));
                this.setElementCount({dialogue: elementsCount.dialogue + 1});

              }} >Dialogue</Button>
              <Button onClick={() => {
                this.setElemetsList(elementTypes.transition(elementsCount, activeBoard));
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
