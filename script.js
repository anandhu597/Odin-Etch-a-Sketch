const container = document.getElementById("container");

//__________Resize btn_______________
const resizeBtn = document.createElement("button");
resizeBtn.id = "resizeBtn";
const btnDiv = document.createElement("div");
btnDiv.id = "btnDiv";
btnDiv.appendChild(resizeBtn);
resizeBtn.textContent = "RESIZE";
document.body.insertBefore(btnDiv, container);

//_________Event Listeners _______________

container.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("box")) {
    e.target.classList.add("inked");
  }
});

resizeBtn.addEventListener("click", getNewGrid);

function getNewGrid() {
  const gridSize = prompt("Enter the new Grid size.");
  console.log(gridSize);
  if (gridSize > 100) {
    alert("Thant is not Valid Inter new size");
    getNewGrid();
  } else {
    clearContainer();
    createGrids(gridSize);
  }
}
//_________dives _______________

function createGrids(userInput) {
  const sizeOfDiv = 960 / userInput;
  const totalDivs = userInput * userInput;
  for (let i = 0; i < totalDivs; i++) {
    const newDive = document.createElement("div");

    newDive.className = "box";
    newDive.style.width = `${sizeOfDiv}px`;
    newDive.style.height = `${sizeOfDiv}px`;

    container.appendChild(newDive);
  }
}

function clearContainer() {
  container.innerHTML = "";
}

createGrids(16);
