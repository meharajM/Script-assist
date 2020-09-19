import fileSaver from 'file-saver';
import {elementTypeMap, elementSubTypeMap} from '../constants';
const TEXT_FILE_LINE_LIMIT = 110;
function getFormattedText(id, value, content) {
    let newContent = content;
    const [board, boardId, currentElement, eleId, type] = id.split('-');;
    // debugger
    if (currentElement === elementTypeMap.SCENE_HEADING) {
        if(type === elementSubTypeMap.SUMMARY) {
            newContent = `Scene ${eleId}: ${value} \n`;
        } else if(type === elementSubTypeMap.INT || type === elementSubTypeMap.LOCATION) {
            newContent = `${newContent} ${value}`;
        } else if(type === elementSubTypeMap.TIME) {
            newContent = `${newContent} ${value}\n`;
        }
    } else if(currentElement === elementTypeMap.ACTION) {
        // const arr = value.split();
        // let str = '';
        // console.log(arr);
        // while(arr.length || arr.length < TEXT_FILE_LINE_LIMIT) {
        //     str = str +  arr.splice(0, TEXT_FILE_LINE_LIMIT).join('') + '\n';
        // }
        newContent = `${newContent}${value} \n`;
    }
    return newContent;
}
export default function(scriptContent) {
    console.log(scriptContent);
    let result = [];
    for (let [key, value] of scriptContent) {
        const formattedContent = getFormattedText(key, value, result);
         result.push(formattedContent);
    }
    debugger
    const blob = new Blob([...result], {type: "text/plain;charset=utf-8"});
    fileSaver.saveAs(blob, "screenplay.txt");
}