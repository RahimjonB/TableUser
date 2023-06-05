function addUser() {
    let idInput = document.getElementById("id");
    let logoInput = document.getElementById("logo");
    let nameInput = document.getElementById("name");
    let emailInput = document.getElementById("email");
    let ageInput = document.getElementById("age");
    let phoneNumber = document.getElementById("phoneNum");
  
    let id = idInput.value;
    let logo = logoInput.value;
    let name = nameInput.value;
    let email = emailInput.value;
    let age = ageInput.value;
    let phoneNum = phoneNumber.value;
  
    if (id && logo && name && email && age && phoneNum) {
      let tableBody = document.getElementById("user-body");
      let newRow = document.createElement("tr");
  
      let idCell = document.createElement("td");
      idCell.innerHTML = id;
  
      let logoCell = document.createElement("td");
      let logoImg = document.createElement("img");
      logoImg.src = logo;
      logoCell.appendChild(logoImg);
  
      let nameCell = document.createElement("td");
      nameCell.innerHTML = name;
  
      let emailCell = document.createElement("td");
      emailCell.innerHTML = email;
  
      let ageCell = document.createElement("td");
      ageCell.innerHTML = age;
  
      let phoneCell = document.createElement("td");
      phoneCell.innerHTML = phoneNum;
  
      let actionCell = document.createElement("td");
      let deleteButton = document.createElement("button");
      deleteButton.innerHTML = "Delete";
      deleteButton.onclick = deleteUser;
      actionCell.appendChild(deleteButton);
  
      newRow.appendChild(idCell);
      newRow.appendChild(logoCell);
      newRow.appendChild(nameCell);
      newRow.appendChild(emailCell);
      newRow.appendChild(ageCell);
      newRow.appendChild(phoneCell);
      newRow.appendChild(actionCell);
  
      let emptyCell = document.createElement("td");
      newRow.appendChild(emptyCell);
  
      tableBody.appendChild(newRow);
  
      idInput.value = "";
      logoInput.value = "";
      nameInput.value = "";
      emailInput.value = "";
      ageInput.value = "";
      phoneNumber.value = "";
    }
  }
  
  function deleteUser(event) {
    let button = event.target;
    let row = button.parentNode.parentNode;
    row.remove();
  }
  

  function editUser(button) {
    let row = button.parentNode.parentNode;
    let cells = row.getElementsByTagName("td");
    
    let name = cells[0].innerHTML;
    let email = cells[1].innerHTML;
    let age = cells[2].innerHTML;
    
    let editNameInput = document.getElementById("name");
    let editEmailInput = document.getElementById("email");
    let editAgeInput = document.getElementById("age");
    
    editNameInput.value = name;
    editEmailInput.value = email;
    editAgeInput.value = age;

    editRowIndex = row.rowIndex;

    let editFormContainer = document.getElementById("edit-form-container");
    editFormContainer.style.display = "block";
  }

  function updateUser() {
    let editNameInput = document.getElementById("name");
    let editEmailInput = document.getElementById("email");
    let editAgeInput = document.getElementById("age");

    let name = editNameInput.value;
    let email = editEmailInput.value;
    let age = editAgeInput.value;

    if (name && email && age) {
      let table = document.getElementById("user-table");
      let row = table.rows[editRowIndex];
      let cells = row.getElementsByTagName("td");

      cells[0].innerHTML = name;
      cells[1].innerHTML = email;
      cells[2].innerHTML = age;

  
    }
  }
