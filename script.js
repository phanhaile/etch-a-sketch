const container = document.querySelector("#container");
const button = document.querySelector("#resize-btn");

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");

        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "red";
        });

        container.appendChild(square);
    }
}

createGrid(16);

button.addEventListener("click", () => {
    let size = prompt("Enter a grid size:");

    container.innerHTML = "";

    console.log("Grid cleared");
});