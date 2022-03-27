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
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear all tasks event
  clearBtn.addEventListener('click', clearTask);
  // Filter tasks event
  filter.addEventListener('keyup', filterTasks);
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

// Declare function to remove task
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }

  e.preventDefault();
}

// Declare function to clear all tasks
function clearTask(e) {
  // Wrong way
  // taskList.innerHTML = '';

  // Faster
  if (confirm('You want to delete all tasks?')) {
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
  }
  
  e.preventDefault();
}

// Declare function to filter tasks
function filterTasks(e) {
  // Get text from filter string
  const text = e.target.value.toLowerCase();

  // Get all tasks and filter them
  document.querySelectorAll('.collection-item').forEach(function (task) {
    // Get text from task
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      // Display task if match
      task.style.display = 'block';
    } else {
      // Hide task if not match
      task.style.display = 'none';
    }
  })

  e.preventDefault();
}

// Load all event listeners
loadEventListeners();

