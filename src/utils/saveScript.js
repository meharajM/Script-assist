import fileSaver from 'file-saver';
export default function(scriptContent) {
    console.log(scriptContent);
    let result = "";
    for (let [key, value] of scriptContent) {
        result = `${result} ${value}`
    }
    const blob = new Blob([result], {type: "text/plain;charset=utf-8"});
    fileSaver.saveAs(blob, "screenplay.txt");
}