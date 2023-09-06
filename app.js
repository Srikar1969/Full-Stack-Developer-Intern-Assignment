// Load existing users from local storage or initialize an empty array
let users = JSON.parse(localStorage.getItem('users')) || [];

// Function to save users to local storage
function saveUsersToLocalStorage() {
  localStorage.setItem('users', JSON.stringify(users));
}

// Function to display users
function displayUsers(usersToDisplay) {
  const userListDiv = document.querySelector('#userList');
  userListDiv.innerHTML = ''; // Clear existing content

  usersToDisplay.forEach((user) => {
    const userDiv = document.createElement('div');
    userDiv.textContent = user.name;

    // Create a delete button for each user
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      // Remove the user from the array
      const userIndex = users.findIndex((u) => u.id === user.id);
      if (userIndex !== -1) {
        users.splice(userIndex, 1);
        saveUsersToLocalStorage();
        displayUsers(users);
      }
    });

    // Append the userDiv and deleteButton to the userListDiv
    userListDiv.appendChild(userDiv);
    userListDiv.appendChild(deleteButton);
  });
}

// Function to add a new user
function addUser(userName) {
  const newUser = {
    id: new Date().getTime(), // Unique ID based on timestamp
    name: userName,
  };
  users.push(newUser);
  saveUsersToLocalStorage();
  displayUsers(users);
}

// Function to filter users based on search input
function searchUsers(searchText) {
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchText.toLowerCase())
  );
  displayUsers(filteredUsers);
}

// Event listeners
const userForm = document.querySelector('#userForm');
const newUserNameInput = document.querySelector('#newUserName');
const searchInput = document.querySelector('#searchInput');

userForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const userName = newUserNameInput.value.trim();
  if (userName) {
    addUser(userName);
    newUserNameInput.value = ''; // Clear the input field
  }
});

searchInput.addEventListener('input', () => {
  const searchText = searchInput.value.trim();
  searchUsers(searchText);
});

// Initial display of users
displayUsers(users);
