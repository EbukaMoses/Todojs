const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');
const msg = document.querySelector('.message');

//load all event listeners
loadEventListeners();

//load all event listers
function loadEventListeners() {
    //DOM load event
    document.addEventListener('DOMContentLoaded', getTasks);
    //Add task event
    form.addEventListener('submit', addTask);

    //remove task event
    taskList.addEventListener('click', removeTask);

    //cleartask eventlistener
    clearBtn.addEventListener('click', clearTasks);

    //Filter tasks event
    // filter.addEventListener('keyup', filterTasks);
    filter.addEventListener('keyup', filterTasks);
}

//Get Tasks from LS
function getTasks() {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){

        //create li element
        const li = document.createElement('li');
        //Add class
        li.className = 'collection-item';
        //create text node
        li.appendChild(document.createTextNode(task));
        //create new link element
        const link = document.createElement('a');
        //Add class
        link.className = 'delete-item secondary-content float-right';
        //Add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>';
        //Append link tp li
        li.appendChild(link);

        //Append li to ul
        taskList.appendChild(li);

    })
}

//Add Task
function addTask(e) {
    if(taskInput.value === '') {
        // alert('Add Task');
        msg.innerHTML = "Add Task in the Input Field";
        die();
    }
     
    //create li element
    const li = document.createElement('li');
    //Add class
    li.className = 'collection-item';
    //create text node
    li.appendChild(document.createTextNode(taskInput.value));
    //create new link element
    const link = document.createElement('a');
    //Add class
    link.className = 'delete-item secondary-content float-right';
    //Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //Append link tp li
    li.appendChild(link);
    // console.log(li);

    //Append li to ul
    taskList.appendChild(li);

    //store in localstorage
    storeTaskInLocalStorage(taskInput.value);

    //clear taskInput
    taskInput.value = ''; 
    // e.preventDefault();
}

function storeTaskInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Remove task
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();

            //Remove from LS
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
        
    }
}

//Remove from LS
function removeTaskFromLocalStorage(taskItem) {

    // console.log(taskItem);
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//cleartasks
function clearTasks() {
    taskList.innerHTML = '';

    //faster
    // while(taskList.firstChild) {
    //     taskList.removeChlid(taskList.firstChild);
    // }
    //clear from LS
    clearTasksFromLocalStorage();
}
//https://jsperf.com/innerhtml-vs-removechild

//clear Tasks from LS
function clearTasksFromLocalStorage(){
    localStorage.clear();
}

//filter Tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}