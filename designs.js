//This is the makeGrid function, here is the button event listener

function makeGrid() {
//Declaring variables

  const submitNew = document.querySelector('input[type="submit"]');
  //Create event listener for the submit button
  submitNew.addEventListener("click", makeGridF(event));
}
//Function to make a tableGrid on (button) click
let makeGridF = function createTableGrid(event) {
  let submitHeight = document.getElementById("inputHeight").value;
  let submitWidth = document.getElementById("inputWidth").value;
  const tableGrid = document.getElementById("pixelCanvas");
  var myTableBody = document.createElement("tbody");
  //Loop to create the table grid
  for (let i = 0; i < submitHeight; i++) {
    let tableTr = document.createElement("tr");
    myTableBody.appendChild(tableTr);
    for (let j = 0; j < submitWidth; j++) {
      let tableTd = document.createElement("td");
      tableTr.appendChild(tableTd);
      //Add second event listener
      tableTd.addEventListener("click", paintCell(tableTd));
    }
  }
  tableGrid.appendChild(myTableBody);
  event.preventDefault();
  document.getElementById("subName").disabled = true;
 }
//Create fuction to paint a cell
function paintCell(tableTd) {
  //Add third event listener
  tableTd.addEventListener("click", function () {
    let submitColor = document.getElementById("colorPicker");
    tableTd.style.backgroundColor = submitColor.value;
  });
}


