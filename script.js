
let cartItems = [];

function addToCart(productName) {
    cartItems.push(productName);
    displayCart();
}

function displayCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        cartList.appendChild(li);
    });
}

// Contact Form Validation Script
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Stop default submit

  // Collect form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validate fields
  if (!name || !email || !subject || !message) {
      showError('All fields are required.');
      return;
  }

  // Validate email
  if (!validateEmail(email)) {
      showError('Please enter a valid email address.');
      return;
  }

  // If everything is OK
  showSuccess('Thank you! Your message has been sent.');
  this.reset(); // Reset form
});

// Helper function to validate email
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Show error message
function showError(message) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'form-error';
  errorDiv.innerText = message;
  const form = document.getElementById('contactForm');
  clearMessages();
  form.prepend(errorDiv);
}

// Show success message
function showSuccess(message) {
  const successDiv = document.createElement('div');
  successDiv.className = 'form-success';
  successDiv.innerText = message;
  const form = document.getElementById('contactForm');
  clearMessages();
  form.prepend(successDiv);
}

// Clear previous messages
function clearMessages() {
  const errors = document.querySelectorAll('.form-error, .form-success');
  errors.forEach(error => error.remove());
}

// Select the elements
const todoInput = document.getElementById('todoInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const todoList = document.getElementById('todoList');

// Function to create a new task
function createTask(taskText) {
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');
    const completeBtn = document.createElement('button');

    // Set text content and class for buttons
    li.textContent = taskText;
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    completeBtn.textContent = 'Complete';
    completeBtn.classList.add('complete-btn');

    // Append the buttons to the list item
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    // Add functionality for completing a task
    completeBtn.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Add functionality for deleting a task
    deleteBtn.addEventListener('click', () => {
        todoList.removeChild(li);
    });

    // Append the task to the list
    todoList.appendChild(li);
}

// Add task on button click
addTaskBtn.addEventListener('click', () => {
    const taskText = todoInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    createTask(taskText);
    todoInput.value = ''; // Clear the input field
});

// Optional: Allow pressing "Enter" to add task
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTaskBtn.click();
    }
});