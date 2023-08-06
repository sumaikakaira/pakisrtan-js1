
//receiving user value
var mytodoList = document.getElementById("mytodoList");
var inputTag = document.getElementById("userInput");

// Enter key functionality on key press
inputTag.addEventListener("keydown", function (e) {
   if (e.code === "Enter") {
       addTodo();
  };
});

function addTodo() {
    if (inputTag.value === "") {
        alert("Please Enter Todo")
    }
    else {
        var li = document.createElement("li");
        var liText = document.createTextNode(inputTag.value);
        li.appendChild(liText);
        li.setAttribute("class", "myList");
        mytodoList.appendChild(li);
        li.setAttribute("data-aos", "fade-up");
        li.setAttribute("data-aos-duration", "1000");

        // Delete Button 
        var deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("class", "delete_btn");
        deleteBtn.setAttribute("onclick", "deleteList(this)");
        deleteBtn.innerHTML = "<img src = 'del-png'/>";
        li.appendChild(deleteBtn);

        // Edit Button 
        var editBtn = document.createElement("button");
        editBtn.setAttribute("class", "edit_btn");
        editBtn.setAttribute("onclick", "editList(this)");
        editBtn.innerHTML = "<img src = 'editButtonImg.png' />";
        li.appendChild(editBtn);

        inputTag.value = "";
    }
};

// Edit List Functionality
function editList(btn) {
    var editedVal = prompt("Enter new todo");
    btn.parentNode.firstChild.nodeValue = editedVal;
};

// Delete List Functionality
function deleteList(btn) {
    btn.parentNode.remove();
};

// Delete All List Items Functionality
function deleteAll() {
    mytodoList.innerHTML = "";
};


















