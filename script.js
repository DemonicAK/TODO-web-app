add_item = () => {
  console.log("adding item");
  let item = document.getElementById("Tittle").value;
  let desc = document.getElementById("desc").value;

  if (localStorage.getItem("itemsJson") == null) {
    itemsJsonArray = [];
    itemsJsonArray.push([item, desc]);
    localStorage.setItem("itemsJson", JSON.stringify(itemsJsonArray));
  } else {
    itemsJsonArrayStr = localStorage.getItem("itemsJson");
    itemsJsonArray = JSON.parse(itemsJsonArrayStr);
    itemsJsonArray.push([item, desc]);
    localStorage.setItem("itemsJson", JSON.stringify(itemsJsonArray));
  }

  //populate the table
  tableupdte();
  console.log("updated......");
document.getElementById("Tittle").value = "";
document.getElementById("desc").value="";




};

tableupdte = () => {
  itemsJsonArrayStr = localStorage.getItem("itemsJson");
  itemsJsonArray = JSON.parse(itemsJsonArrayStr);
  let tableBody = document.getElementById("tablebody");
  let str = "";
  itemsJsonArray.forEach((element, index) => {
    str += `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button class="btn btn-sm btn-primary"  onclick ="deleted(${
              index + 1
            })" >Delete</button></td>
        </tr>`;
  });
  tableBody.innerHTML = str;
};

function deleted(item) {
  console.log("delete", item);

  itemsJsonArrayStr = localStorage.getItem("itemsJson");
  itemsJsonArray = JSON.parse(itemsJsonArrayStr);

  itemsJsonArray = itemsJsonArray.filter(
    (element) => element !== itemsJsonArray[item - 1]
  );
  localStorage.setItem("itemsJson", JSON.stringify(itemsJsonArray));
  tableupdte();
}

let clrstor = () => {
  itemsJsonArrayStr = localStorage.getItem("itemsJson");
  itemsJsonArray = JSON.parse(itemsJsonArrayStr);
//   empty(itemsJsonArray);
itemsJsonArray.splice(0, itemsJsonArray.length);
  localStorage.setItem("itemsJson", JSON.stringify(itemsJsonArray));
  tableupdte();
};

let add = document.getElementById("addtolist");
add.addEventListener("click", add_item);
let clean = document.getElementById("clearlist");
clean.addEventListener("click", clrstor);

// add_item();
// tableupdte();
