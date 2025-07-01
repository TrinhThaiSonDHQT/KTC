// Global variables
let todos = [];
let notes = [];
let currentFilter = 'all';
let isDarkTheme = false;

const noteColors = [
  '#ffeb3b',
  '#ff9800',
  '#f44336',
  '#e91e63',
  '#9c27b0',
  '#673ab7',
  '#3f51b5',
  '#2196f3',
  '#03a9f4',
  '#00bcd4',
  '#009688',
  '#4caf50',
  '#8bc34a',
  '#cddc39',
];

// DOM elements
const clockEl = document.getElementById('clock');
const greetingEl = document.getElementById('greeting');
const themeToggleEl = document.getElementById('themeToggle');
const todoInputEl = document.getElementById('todoInput');
const addTodoBtnEl = document.getElementById('addTodoBtn');
const todoListEl = document.getElementById('todoList');
const todoErrorEl = document.getElementById('todoError');
const todoEmptyStateEl = document.getElementById('todoEmptyState');
const noteInputEl = document.getElementById('noteInput');
const addNoteBtnEl = document.getElementById('addNoteBtn');
const notesContainerEl = document.getElementById('notesContainer');
const noteErrorEl = document.getElementById('noteError');
const noteEmptyStateEl = document.getElementById('noteEmptyState');
const filterBtnsEl = document.querySelectorAll('.filter-btn');

// Initialize app
function init() {
  updateClock();
  updateGreeting();
  loadFromStorage();
  renderTodos();
  renderNotes();
  attachEventListeners();

  // Update clock every second
  setInterval(updateClock, 1000);
}

// Clock functionality
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  clockEl.textContent = timeString;
}

function updateGreeting() {
  const hour = new Date().getHours();
  let greeting;

  if (hour < 12) {
    greeting = 'Good Morning! 🌅';
  } else if (hour < 17) {
    greeting = 'Good Afternoon! ☀️';
  } else {
    greeting = 'Good Evening! 🌙';
  }

  greetingEl.textContent = greeting;
}

// Theme functionality
function toggleTheme() {
  isDarkTheme = !isDarkTheme;
  document.body.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
  themeToggleEl.textContent = isDarkTheme ? '☀️' : '🌙';
  localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
}

// Todo functionality
function addTodo() {
  const text = todoInputEl.value.trim();

  if (!text) {
    showError(todoErrorEl);
    return;
  }

  const todo = {
    id: Date.now(),
    text: text,
    completed: false,
    createdAt: new Date(),
  };

  todos.push(todo);
  todoInputEl.value = '';
  hideError(todoErrorEl);
  renderTodos();
  saveToStorage();
}

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  renderTodos();
  saveToStorage();
}

function toggleTodo(id) {
  const todo = todos.find((t) => t.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    renderTodos();
    saveToStorage();
  }
}

function filterTodos(filter) {
  currentFilter = filter;

  // Update active filter button
  filterBtnsEl.forEach((btn) => {
    btn.classList.remove('active');
    if (btn.dataset.filter === filter) {
      btn.classList.add('active');
    }
  });

  renderTodos();
}

function renderTodos() {
  const filteredTodos = todos.filter((todo) => {
    if (currentFilter === 'completed') return todo.completed;
    if (currentFilter === 'incomplete') return !todo.completed;
    return true;
  });

  if (filteredTodos.length === 0) {
    todoListEl.innerHTML = '';
    todoEmptyStateEl.style.display = 'block';
    return;
  }

  todoEmptyStateEl.style.display = 'none';

  todoListEl.innerHTML = filteredTodos
    .map(
      (todo) => `
                <li class="todo-item ${todo.completed ? 'completed' : ''}">
                    <input type="checkbox" class="todo-checkbox" 
                           ${todo.completed ? 'checked' : ''} 
                           onchange="toggleTodo(${todo.id})">
                    <span class="todo-text">${todo.text}</span>
                    <button class="btn btn-danger" onclick="deleteTodo(${
                      todo.id
                    })">Delete</button>
                </li>
            `
    )
    .join('');
}

// Notes functionality
function addNote() {
  const text = noteInputEl.value.trim();

  if (!text) {
    showError(noteErrorEl);
    return;
  }

  const note = {
    id: Date.now(),
    text: text,
    color: noteColors[Math.floor(Math.random() * noteColors.length)],
    createdAt: new Date(),
  };

  notes.push(note);
  noteInputEl.value = '';
  hideError(noteErrorEl);
  renderNotes();
  saveToStorage();
}

function deleteNote(id) {
  notes = notes.filter((note) => note.id !== id);
  renderNotes();
  saveToStorage();
}

function renderNotes() {
  if (notes.length === 0) {
    notesContainerEl.innerHTML =
      '<div class="empty-state">No notes yet. Add one above!</div>';
    return;
  }

  notesContainerEl.innerHTML = notes
    .map(
      (note) => `
                <div class="note" style="background-color: ${note.color}">
                    <button class="note-delete" onclick="deleteNote(${note.id})">×</button>
                    <div>${note.text}</div>
                </div>
            `
    )
    .join('');
}

// Error handling
function showError(errorEl) {
  errorEl.classList.add('show');
  setTimeout(() => hideError(errorEl), 3000);
}

function hideError(errorEl) {
  errorEl.classList.remove('show');
}

// Local storage functionality
function saveToStorage() {
  localStorage.setItem('todos', JSON.stringify(todos));
  localStorage.setItem('notes', JSON.stringify(notes));
}

function loadFromStorage() {
  const savedTodos = localStorage.getItem('todos');
  const savedNotes = localStorage.getItem('notes');
  const savedTheme = localStorage.getItem('theme');

  if (savedTodos) {
    todos = JSON.parse(savedTodos);
  }

  if (savedNotes) {
    notes = JSON.parse(savedNotes);
  }

  if (savedTheme === 'dark') {
    isDarkTheme = true;
    document.body.setAttribute('data-theme', 'dark');
    themeToggleEl.textContent = '☀️';
  }
}

// Event listeners
function attachEventListeners() {
  // Theme toggle
  themeToggleEl.addEventListener('click', toggleTheme);

  // Todo events
  addTodoBtnEl.addEventListener('click', addTodo);
  todoInputEl.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTodo();
  });

  // Filter events
  filterBtnsEl.forEach((btn) => {
    btn.addEventListener('click', () => filterTodos(btn.dataset.filter));
  });

  // Note events
  addNoteBtnEl.addEventListener('click', addNote);
  noteInputEl.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addNote();
  });
}

// Start the app
init();
