function populateHeader(jsonObj) {
  titleToDo.textContent = jsonObj[0]["todo"];
}

///////

const createItem = activity => {
	let item = {
		activity: activity,
		state: false
	}

	arrayActivity.push(item);

	return item;
}

const saveLS = () => {
	localStorage.setItem('myTask', JSON.stringify(arrayActivity));
	printLS();
};

const printLS = () => {
	taskList.innerHTML = '';
	arrayActivity = JSON.parse(localStorage.getItem('myTask'));

	if (arrayActivity === null) {
		arrayActivity = [];
	} else {
		arrayActivity.forEach(element => {
			if (element.state) {
				taskList.innerHTML += `<div class="alert alert-success p-0 d-flex justify-content-between align-items-center ps-4 pe-4 div-task" role="alert"><div><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-cursor-fill" viewBox="0 0 16 16"><path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/></svg><b class="ms-3">${element.activity}</b> - ${element.state}</div><div><span class="me-2"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">done<path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/></svg></span><span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">delete<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/></svg></span></div></div>`;
			} else {
				taskList.innerHTML += `<div class="alert alert-danger p-0 d-flex justify-content-between align-items-center ps-4 pe-4 div-task" role="alert"><div><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-cursor-fill" viewBox="0 0 16 16"><path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/></svg><b class="ms-3">${element.activity}</b> - ${element.state}</div><div><span class="me-2"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">done<path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/></svg></span><span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">delete<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/></svg></span></div></div>`;
			}
		});
	}
};

const deleteLS = activity => {
	arrayActivity.forEach((element, index) => {
		if (element.activity === activity) {
			indexArray = index;
		}
	});

	arrayActivity.splice(indexArray, 1);
	saveLS();
};

const editLS = activity => {
	
	let myIndexDone = element => element.activity == activity;
	let indexArray = arrayActivity.findIndex(myIndexDone);

	/*
	let indexArray = arrayActivity.findIndex( element => {
		return element.activity === activity;
	});
	*/

	if (arrayActivity[indexArray].state) {
		arrayActivity[indexArray].state = false;
	} else {
		arrayActivity[indexArray].state = true;
	}

	saveLS();
};