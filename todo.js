let taskInput = document.getElementById("taskInput");
let addButton = document.getElementById('addButton');
let taskList = document.getElementById('taskList');

let tasks = [];
let savedTasks = localStorage.getItem('tasks');
if (savedTasks) {
    tasks = JSON.parse(savedTasks);
}

for (let task of tasks) {
    let li = document.createElement('li');
    li.classList.add('task-item');
    li.textContent = task;
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'حذف';
    li.appendChild(deleteBtn);
    li.addEventListener("click", function() {
    li.classList.toggle("done");
});
    deleteBtn.addEventListener("click", function() {
        taskList.removeChild(li);
    });
    taskList.appendChild(li);
}

addButton.addEventListener("click", function() {
    console.log(taskInput.value);
    let li = document.createElement('li');
    li.classList.add('task-item');
    li.textContent = taskInput.value;

    li.addEventListener("click", function() {
    li.classList.toggle("done");
});


    tasks.push(taskInput.value);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'حذف';
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", function() {
    taskList.removeChild(li);
});
    taskList.appendChild(li);
    taskInput.value = "";
});
taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addButton.click();
    }
});
