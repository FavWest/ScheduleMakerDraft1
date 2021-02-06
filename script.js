console.log("connected");

/*Note: function makeTableHead and function makeTable
come from https://www.valentinog.com/blog/html-table/*/
function makeTableHead(table, data) {
  let thead=table.createTHead();
  let row=thead.insertRow();
  for (let key of data){
    let th=document.createElement("th");
    let text=document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function makeTable(table, data) {
  for (let element of data){
    let row=table.insertRow();
    for (key in element){
      let cell= row.insertCell();
      let text= document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

function pushTable(table, newRow) {
  let row=table.insertRow();
  for (key in newRow){
    let cell=row.insertCell();
    let text=document.createTextNode(newRow[key]);
    cell.appendChild(text);
  }
}

let monTotal=0;
let tuesTotal=0;
let wedTotal=0;
let thursTotal=0;
let friTotal=0;

const jsData=[{Name:'',
              Monday:monTotal,
              Tuesday:tuesTotal,
              Wednesday:wedTotal,
              Thursday:thursTotal,
              Friday:friTotal,
              'Days':''}];

let resultTable=document.querySelector("#schedule");
let jsTHdata=Object.keys(jsData[0]);

makeTable(resultTable, jsData);
makeTableHead(resultTable, jsTHdata);

function getInput() {
  let inputNameValue=document.querySelector('#inputName').value;
  let inputMonValue=document.querySelector('#inputMon').value;
  let inputTuesValue=document.querySelector('#inputTues').value;
  let inputWedValue=document.querySelector('#inputWed').value;
  let inputThursValue=document.querySelector('#inputThurs').value;
  let inputFriValue=document.querySelector('#inputFri').value;
  let newRow={Name:inputNameValue,
              Monday:inputMonValue,
              Tuesday:inputTuesValue,
              Wednesday:inputWedValue,
              Thursday:inputThursValue,
              Friday:inputFriValue};
  pushTable(resultTable, newRow);
  jsData.push(newRow);
}