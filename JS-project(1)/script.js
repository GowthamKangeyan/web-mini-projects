function addStudent() {
    // Get form values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const course = document.getElementById('course').value;
    const email = document.getElementById('email').value;

    // Create a new row
    const table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Insert cells
    const nameCell = newRow.insertCell(0);
    const ageCell = newRow.insertCell(1);
    const courseCell = newRow.insertCell(2);
    const genderCell = newRow.insertCell(3);
    const emailCell = newRow.insertCell(4);
    const actionCell = newRow.insertCell(5);

    // Add values to cells
    nameCell.textContent = name;
    ageCell.textContent = age;
    courseCell.textContent = course;
    genderCell.textContent = gender;
    emailCell.textContent = email;

    // Add delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.onclick = function() {
        table.deleteRow(newRow.rowIndex - 1);
    };
    actionCell.append(deleteButton);

    // Clear form
    document.getElementById('studentForm').reset();
}
