function getAndUpdate() {
  console.log("updating list...");
  tit = document.getElementById("title").value;
  desc = document.getElementById("description").value;
  if (localStorage.getItem("itemsJson") == null) {
    let itemJsonArray = [];
    itemJsonArray.push([tit, desc]);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  } else {
    itemJsonArrayStr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    itemJsonArray.push([tit, desc]);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  }
  update();
}

function update() {
  if (localStorage.getItem("itemsJson") == null) {
    itemJsonArray = [];
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  } else {
    let itemJsonArrayStr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
  }
  // enhance table
  let tableBody = document.getElementById("tableBody");
  let str = "";
  itemJsonArray.forEach((element, index) => {
    str += `<tr>
              <th scope="row">${index + 1}</th>
              <td>${element[0]}</td>
              <td>${element[1]}</td>
              <td><button class="btn btn-sm btn-danger" onclick="deleted(${index})" >Delete</button></td>
            </tr>`;
  });
  tableBody.innerHTML = str;
}

add = document.getElementById("add");
add.addEventListener("click", getAndUpdate);
update();

// deleted function
function deleted(itemIndex) {
  console.log("delete item at index", itemIndex);
  itemJsonArrayStr = localStorage.getItem("itemsJson");
  itemJsonArray = JSON.parse(itemJsonArrayStr);
  // delete itemIndex element from the array a
  itemJsonArray.splice(itemIndex, 1);
  localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  update();
}

// clear function
function clearLocalStorage() {
  if (confirm("do you realy want to clear ?")) {
    // console.log("clearing the storage...");
    localStorage.clear();
    update();
  }
}
