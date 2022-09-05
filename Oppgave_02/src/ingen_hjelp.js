const users = [{
        id: 0,
        name: "Trude",
        age: 77
    },
    {
        id: 1,
        name: "Simen",
        age: 85
    },
    {
        id: 2,
        name: "Lars",
        age: 99
    },
    {
        id: 3,
        name: "Ali",
        age: 34
    },
    {
        id: 4,
        name: "Finn",
        age: 60
    },
    {
        id: 5,
        name: "Kåre",
        age: 70
    },
    {
        id: 6,
        name: "Hanne",
        age: 20
    },
    {
        id: 7,
        name: "Åse",
        age: 21
    },
    {
        id: 8,
        name: "Anne",
        age: 6
    },
    {
        id: 9,
        name: "Amanda",
        age: 31
    },
    {
        id: 10,
        name: "Morgan",
        age: 87
    }
];

// TODO: Hent HTML #id med getElementById
var usersUl = document.getElementById("users");
var nameInput = document.getElementById("name");
var ageInput = document.getElementById("age");
var filterBtn = document.getElementById("filter");

// TODO: Lag en funksjon som kan brukes til å skrive ut HTMLen for å se brukerene. Du kan bruke users importert over for å hente en liste med 10 brukere
const showUsers = (arr) => {
    for (var i = 0; i < arr.length; i++) {
        var newElement = document.createElement("li");
        newElement.innerHTML = `ID: ${arr[i].id + 1} | Name: ${arr[i].name} | Age: ${arr[i].age}`
        usersUl.appendChild(newElement)
    }
}

showUsers(users)

// TODO: Lag en funksjon som håndterer søket og oppdaterer grensesnittet med resultatet fra søket
const searchUser = () => {
    let searchedUsers = []
    for (var i = 0; i < users.length; i++) {
        if (users[i].name.toLowerCase().includes(nameInput.value.toLowerCase())) {
            searchedUsers.push(users[i])
        }
    }
    usersUl.innerHTML = ""
    showUsers(searchedUsers);
}

filterBtn.addEventListener("click", (e) => {
    searchUser();
})
// TODO: Lag en funksjon som håndterer filteret og oppdaterer grensesnittet med resultatet fra filteret

// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)

// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)