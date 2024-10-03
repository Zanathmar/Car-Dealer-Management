// const form = document.querySelector("form");
// const formInput = document.getElementsByClassName("form-input")
// const title = document.getElementById("title")
// const note = document.getElementById("note")

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     if (document.getElementById("error-note")) {
//         document.getElementById("error-note").remove();
//     }
//     if (document.getElementById("error-title")) {
//         document.getElementById("error-title").remove();
//     }
//     if (title.value.match(/\d/) || !title.value) {
//         const p = document.createElement("p");
//         p.classList.add("error");
//         p.id = "error-title";

//         if (!name.value) {
//             p.innerText = "Title cannot be empty";
//         }

//         formInput[0].appendChild(p);
//         name.classList.add("border-red");
//     }

//     if (!note.value.includes("@") && !note.value.includes(".")) {
//         const p = document.createElement("p");
//         p.classList.add("error");
//         p.id = "error-note";
//         p.innerText = "note is not valid";

//         formInput[0].appendChild(p);
//         name.classList.add("border-red");
//         if (!note.value) {
//             p.innerText = "note cannot be empty";
//         }
//         formInput[1].appendChild(p);
//         note.classList.add("border-red");
//     }

//     if (!document.getElementById("error-name") && !document.getElementById("error-note")) {
//         alert(`Success!\nYour name is ${name.value} \nYour note is ${note.value}`);
//         form.reset();
//     }
// })

// function removeBorder(input) {
//     input.classList.remove("border-red");
// }

// name.addEventListener("input" ,() =>{
//     removeBorder(name);
// })
// note.addEventListener("input" ,() =>{
//     removeBorder(note);
// })
const form2 = document.getElementById("form2");
const titleInput = document.getElementById("title");
const noteInput = document.getElementById("note");
const list = document.querySelector(".list");
const noteList = document.getElementById("empty-data");
const error = document.get

form2.addEventListener("submit", (event) => {
  event.preventDefault();

  
  const emptyData = document.querySelector("#empty-data");
  if (emptyData) {
      emptyData.remove();
    }
    
    if (titleInput.value && noteInput.value) {
        const div = document.createElement("div");
        div.classList.add("item");
        list.insertBefore(div, list.firstChild);
        
        const dateString = new Date().toLocaleString
        ('id-ID', {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: "2-digit",
            
        })

        if (!titleInput.value) {
          const p = document.createElement("p");
           p.classList.add("error");
           p.id = "error-title";
           p.innerText = "Title cannot be empty";
           titleInput.appendChild(p);
        }
    const span = document.createElement("span");
    span.innerText = dateString;
    div.appendChild(span);

    const h3 = document.createElement("h3");
    h3.innerText = `Title: ${titleInput.value}`;
    div.appendChild(h3);

    const p = document.createElement("p");
    p.innerText = `Note: ${noteInput.value}`;
    div.appendChild(p);

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.setAttribute("onclick", "deleteButton(event)");
    div.appendChild(deleteButton);
    
    titleInput.value = "";
    noteInput.value = "";
  }
});
function deleteButton(event) {
    event.target.parentElement.remove();
    if (list.childElementCount == 0) {
        const noItem = document.createElement("span");
        noItem.id = "no-item";
        noItem.textContent = "Note Empty :("
        list.appendChild(noItem);
    }
    
    
}
