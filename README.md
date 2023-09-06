# Full-Stack-Developer-Intern-Assignment
Here are the identified issues in the code and the corresponding fixes:

Syntax Errors:
    In the fetchUsers function, there is a typo in setTimout. It should be setTimeout.
    In the displayUsers function, there is a typo in innerhtml. It should be innerHTML.
    In the fetchUsers callback, the parameter should be users, not user.
Logical Errors:
    In the fetchUsers callback, the fetchUsers function is called with a callback function that takes a parameter named users. 
    However, in the fetchUsers function, the data is passed to the callback as an array of users. This mismatch needs to be corrected.
Data Fetching Errors:
    The code in app.js simulates fetching user data with a delay using setTimeout. 
    To handle the fetched data correctly, we need to fix the issues in the code.

