document.addEventListener("DOMContentLoaded", () => {
  // initialize taskList class
  const form = document.getElementById('create-task-form');
   const taskDescription = document.getElementById('new-task-description');
   
   function addTasks (event) {
     const task = document.createElement('li'); // Create a task.

     task.textContent = taskDescription.value + " ";
