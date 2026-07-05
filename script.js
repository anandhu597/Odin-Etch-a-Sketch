const container = document.getElementById("container");

//__________Heading _______________
const heading = document.createElement("h1");
heading.innerText = "Etch-a-Sketch";
heading.id = "heading";
document.body.prepend(heading);

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
    // First hover only — generate random color
    if (e.target.dataset.mouseoverCount == 0) {
      getRandomRGB(e.target);
    }

    // Every hover — increment count
    e.target.dataset.mouseoverCount =
      Number(e.target.dataset.mouseoverCount) + 1;
    let count = Number(e.target.dataset.mouseoverCount);

    // Every hover — read stored color and apply with opacity
    let r = e.target.dataset.r;
    let g = e.target.dataset.g;
    let b = e.target.dataset.b;
    let opacity = Math.min(count / 10, 1);

    e.target.style.backgroundColor = `rgba(${r},${g},${b},${opacity})`;
    console.log("count:", count, "opacity:", opacity);
  }
});

resizeBtn.addEventListener("click", getNewGrid);

//_________ Functions _______________

function getNewGrid() {
  const gridSize = Number(prompt("Enter the new Grid size."));
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
    newDive.dataset.mouseoverCount = 0;
    newDive.dataset.rgbVlaue = 0;

    newDive.style.width = `${sizeOfDiv}px`;
    newDive.style.height = `${sizeOfDiv}px`;

    container.appendChild(newDive);
  }
}

function clearContainer() {
  container.innerHTML = "";
}

function getRandomRGB(div) {
  div.dataset.r = Math.floor(Math.random() * 256);
  div.dataset.g = Math.floor(Math.random() * 256);
  div.dataset.b = Math.floor(Math.random() * 256);
}

createGrids(16);
