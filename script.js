//Title constructor function that creates a Title object
function Title(t1) 
{
  this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
  return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

let selectedRows = 0;
function addRow()
{
  let lastRowindex = document.getElementById("myTable").firstElementChild.querySelectorAll("tr").length - 1;
  let count1 = "";
  let count = 1;
  if(lastRowindex !== 0)
  {
    count1 = document.getElementById("myTable").firstElementChild.querySelector("tr:nth-child(" + lastRowindex +")").querySelector("td:nth-child(2)").textContent.split(" ")[1];
    count = parseInt(count1) + 1;
  }
  let node = document.createElement("tr");
  let checkBox = document.createElement("td");
  checkBox.innerHTML = "<input type=\"checkbox\" onchange = \"selectRow(this)\"/><br /><br /><img src=\"down.png\" width=\"25px\"  onclick = \"toggleRow(this)\"/>";
  let studentId = document.createElement("td");
  studentId.innerHTML = `Student ${count}`;
  let teacherId = document.createElement("td");
  teacherId.innerHTML = `Teacher ${count}`;
  let approved = document.createElement("td");
  approved.innerHTML = "Approved";
  let fall = document.createElement("td");
  fall.innerHTML = "Fall";
  let ta = document.createElement("td");
  ta.innerHTML = "TA";
  let budget = document.createElement("td");
  budget.innerHTML = "34567";
  let percentage = document.createElement("td");
  percentage.innerHTML = "100%";
  let delButton = document.createElement("td");
  delButton.classList.add("yup");
  delButton.classList.add("click-col");
  delButton.innerHTML = "<button class = \"delete\" onclick = \"deleteButton(this)\">Delete</button>";
  let editButton = document.createElement("td");
  editButton.classList.add("yup");
  editButton.classList.add("click-col");
  editButton.innerHTML = "<button class = \"edit\" onclick = \"editingButton()\">Edit</button>";
  let hiddenRow = document.createElement("tr");
  hiddenRow.classList.add("dropDownTextArea");
  hiddenRow.innerHTML = "<td colspan=\"8\">" +
      "Advisor:<br /><br />" +
      "Award Details<br />" +
      "Summer 1-2014(TA)<br />" +
      "Budget Number: <br />" +
      "Tuition Number: <br />" +
      "Comments:<br /><br /><br />" +
      "Award Status:<br /><br /><br />" +
      "</td>";
  node.appendChild(checkBox);
  node.appendChild(studentId);
  node.appendChild(teacherId);
  node.appendChild(approved);
  node.appendChild(fall);
  node.appendChild(ta);
  node.appendChild(budget);
  node.appendChild(percentage);
  node.appendChild(delButton);
  node.appendChild(editButton);
  alert("Record added successfully.");
  document.querySelector("#myTable").firstElementChild.appendChild(node);
  document.querySelector("#myTable").firstElementChild.appendChild(hiddenRow);
}
function toggleRow(button)
{
  button.parentElement.parentElement.nextElementSibling.classList.toggle("dropDownTextArea");
}

function selectRow(checkBox)
{
  let row = checkBox.parentElement.parentElement;
  if(checkBox.checked)
  {
    row.classList.toggle("checked");
    row.getElementsByClassName("yup")[0].classList.toggle("click-col");
    row.getElementsByClassName("yup")[1].classList.toggle("click-col");
  }
  else
  {
    row.classList.toggle("checked");
    row.getElementsByClassName("yup")[0].classList.toggle("click-col");
    row.getElementsByClassName("yup")[1].classList.toggle("click-col");
  }
  if(document.querySelector("input:checked"))
  {
    row.parentElement.firstElementChild.getElementsByClassName("yup")[0].classList.remove("click-col");
    row.parentElement.firstElementChild.getElementsByClassName("yup")[1].classList.remove("click-col");
    document.getElementById("button").style.backgroundColor = "orange";
    document.getElementById("button").style.border = "2px solid orange";
    document.getElementById("button").disabled = false;
  }
  if(!document.querySelector("input:checked"))
  {
    row.parentElement.firstElementChild.getElementsByClassName("yup")[0].classList.add("click-col");
    row.parentElement.firstElementChild.getElementsByClassName("yup")[1].classList.add("click-col");
    document.getElementById("button").style.backgroundColor = "grey";
    document.getElementById("button").style.border = "2px solid grey";
    document.getElementById("button").disabled = true;
  }
}

function editingButton()
{
  prompt("Edit details.");
}

function deleteButton(button)
{
  alert("Record deleted successfully.");
  let row = button.parentElement.parentElement;
  document.getElementById("myTable").deleteRow(row.rowIndex + 1);
  row.remove();

  if(document.querySelector("input:checked"))
  {
    document.getElementById("myTable").firstElementChild.firstElementChild.getElementsByClassName("yup")[0].classList.remove("click-col");
    document.getElementById("myTable").firstElementChild.firstElementChild.getElementsByClassName("yup")[1].classList.remove("click-col");
    document.getElementById("button").style.backgroundColor = "orange";
    document.getElementById("button").style.border = "2px solid orange";
    document.getElementById("button").disabled = false;
  }
  if(!document.querySelector("input:checked"))
  {
    document.getElementById("myTable").firstElementChild.firstElementChild.getElementsByClassName("yup")[0].classList.add("click-col");
    document.getElementById("myTable").firstElementChild.firstElementChild.getElementsByClassName("yup")[1].classList.add("click-col");
    document.getElementById("button").style.backgroundColor = "grey";
    document.getElementById("button").style.border = "2px solid grey";
    document.getElementById("button").disabled = true;
  }
}