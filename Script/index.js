request.onload = function () {
	const titleToDo = request.response;
	populateHeader(titleToDo);
};

//////


formNames.addEventListener('submit', e => {
	e.preventDefault();
	let myNames = inputNameTask.value;

	createItem(inputNameTask.value);
	saveLS();

	formNames.reset();
});

document.addEventListener('DOMContentLoaded', printLS);

taskList.addEventListener('click', (e) => {
	e.preventDefault();

	const text = e.target.parentNode.parentNode.offsetParent.childNodes[0].childNodes[1].innerHTML;
	const donePath = 'done<path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>';
	const deletePath = 'delete<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"></path><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"></path>';

	if (e.target.innerHTML === donePath || e.target.innerHTML === deletePath) {

		if (e.target.innerHTML === deletePath) {
			deleteLS(text);
		}

		if (e.target.innerHTML === donePath) {
			editLS(text);
		}
	}
});



/*
const btn = document.getElementById('btn');
const elements = document.getElementById('element-test');

let lear = [
	{
		name: 'Juan',
		age: 3
	},
	{
		name: 'Carlos',
		age: 39
	}
];

localStorage.setItem('lol', 'Lucas');
console.log(localStorage.getItem('lol'));

localStorage.setItem('list', JSON.stringify(lear));
let list = JSON.parse(localStorage.getItem('list'));
console.log(list);



btn.addEventListener('click', () => {
	list.forEach(element => {

		let div = document.createElement('div');
		div.innerHTML = element.name + ': ' + element.age;

		elements.appendChild(div);
	});

	(() => {
		const myList = localStorage.getItem('list');
		if (myList === null) {
			elements.innerHTML = none;
		} else {
			elements.innerHTML = myList;
		}
	})();
})

//localStorage.removeItem(key);
*/