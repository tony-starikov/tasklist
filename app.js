// Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Declare function to load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
}

// Declare function to add task
function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a task!');
  } else {
    // Create li element for new task
    const li = document.createElement('li');
    // Add class to li
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element to delete task
    const link = document.createElement('a');
    // Add class to delete link
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>'
    // Append link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';
  }

  e.preventDefault();
}

// Load all event listeners
loadEventListeners();

