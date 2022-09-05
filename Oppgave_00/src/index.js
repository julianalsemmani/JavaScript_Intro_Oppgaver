// Oppgave 1
var remove = document.getElementById("remove")
var removeBtn = document.getElementById("remove-btn");
removeBtn.addEventListener("click", (e) => {
    remove.remove();
});
// Oppgave 2
var change = document.getElementById("change")
var changeBtn = document.getElementById("change-btn");
changeBtn.addEventListener("click", (e) => {
    change.innerHTML = "Denne teksten er byttet til noe helt annet etter at man trykker på knappen"
});

// Oppgave 3
var input = document.getElementById("input")
var inputText = document.getElementById("input-text")

input.addEventListener("keyup", (e) => {
    inputText.innerHTML = input.value;
})
// Oppgave 4
const myList = ['item one', 'item two', 'item three'];
var ul = document.getElementById("ul")
var writeList = document.getElementById("write-list")

writeList.addEventListener("click", (e) => {
    for (var i = 0; i < myList.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = myList[i];
        ul.appendChild(li)
    }
});

// Oppgave 5
var select = document.getElementById("select")
var createBtn = document.getElementById("create")
var text = document.getElementById("text")
var placeholder = document.getElementById("placeholder")

createBtn.addEventListener("click", (e) => {
    var element = document.createElement(select.value);
    element.innerHTML = text.value;
    placeholder.appendChild(element)
});

// Oppgave 6
var list = document.getElementById("list")
var removeLiBtn = document.getElementById("remove-li")

removeLiBtn.addEventListener("click", (e) => {
    list.removeChild(list.lastElementChild)
});
// Oppgave 7
var nameInput = document.getElementById("name")
var orderBtn = document.getElementById("order")

nameInput.addEventListener("keyup", (e) => {
    if (nameInput.value.length > 4)
        orderBtn.disabled = true;
});

// Oppgave 8
var allChildren = document.querySelectorAll(".children li")
var colorBtn = document.getElementById("color")

colorBtn.addEventListener("click", (e) => {
    for (var i = 0; i < allChildren.length; i++) {
        if (i % 2 != 0) {
            allChildren[i].style.border = "1px solid green"
        } else {
            allChildren[i].style.border = "5px solid pink"
        }
    }
});