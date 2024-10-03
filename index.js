const text = document.getElementById("greet");
const button = document.querySelector("button")

function changeText() {
    const newText = "Good Bye";
    text.textContent = newText
}

const form = document.querySelector("form");
const square = document.getElementById("square");
const colorInput = document.querySelector("input[type=color]")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    square.style.backgroundColor = colorInput.value;
})

const form2 = document.getElementById("form2");
const nameInput = document.getElementById("name");
const ul = document.querySelector("ul");

form2.addEventListener("submit", (event) => {
    event.preventDefault();
    if (nameInput.value) {
       const span = document.querySelector("span");
       if (span) {
        span.remove();
       } 
       const li = document.createElement("li")
       li.innerText = nameInput.value;
       ul.appendChild(li);

    //    reset input text value
    nameInput.value = "";
    }
});