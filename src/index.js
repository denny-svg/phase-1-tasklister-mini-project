document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("task-List");
 

  // To submit
  taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

// for assigning new task description
  const taskDecription = document.getElementById("new-task-description").value
  document.getElementById("new-task-description").value

const newTask = document.createElement("li");
newTask.textContent = taskDecription;

taskList.appendChild(newTask);

document.getElementById("new-task-description").value = ""
     });
});
function addTask(description) {
  const li = document.createElement("li")
  li.textContent = description;

const deleteButton = document.createElement("Button")
 deleteButton.textContent = "Delete"
 deleteButton.addEventListener("click", function(){
  deleteTask (li);
 })  
};

li.appendChild(taskElement) 
  taskList.appendChild(li);


function deleteTask(taskElement) {
  taskElement.remove();
  
};

addTask("Task 1");
addTask("Task 2");
