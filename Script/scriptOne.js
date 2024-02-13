const requestURL = 'http://localhost:3000/title';

const request = new XMLHttpRequest()

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

//////

const titleToDo = document.getElementById('title-to-do');
const elementTest = document.getElementById('element-test');
const formNames = document.getElementById('form-names');
const inputNameTask = document.getElementById('names-task');
const btnSaveInput = document.getElementById('btn-save-input');
const taskList = document.getElementById('task-list');

let arrayActivity = [];