let body = document.getElementById("content");
let listOfPokemons = document.createElement("ul");
body.appendChild(listOfPokemons);
let searchField = document.getElementById("searchField");
let searchBtn = document.getElementById("searchBtn");
let homeBtn = document.getElementById("home");
let myDecks = document.getElementById("myDecks");
let newDeckBtn = document.getElementById("newDeck");
let newDeckContainer = document.getElementById("newDeckContainer");
let decks = [];

let pokemonList = [];

function getPokiList() {
  fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Du har gjort något fel.....");
      }
      return response.json();
    })
    .then((data) => {
      let pokilist = data.results;
      pokilist.forEach((poki) => {
        getPokiInfo(poki);
      });
    });
}

function getPokiInfo(pokemon) {
  fetch(pokemon.url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let li = document.createElement("li");
      let h2 = document.createElement("h2");
      let img = document.createElement("img");
      let info = document.createElement("p");
      let dropDownContainer = document.createElement("div");
      let dropDownBtn = document.createElement("button");
      let dropDown = document.createElement("div");
      dropDownContainer.className = "dropDown";
      dropDown.className = "dropdownContent";
      dropDownBtn.id = "dropDownBtn";
      dropDownBtn.innerText = "Menu";

      info.innerText = pokemon.comment;
      dropDownContainer.append(dropDownBtn, dropDown);

      img.src = data.sprites.front_default;
      h2.innerText = data.name;
      li.append(h2, img, dropDownContainer, info);
      listOfPokemons.appendChild(li);
      if (pokemonList.includes(pokemon)) {
        deleteFromMyDeck(pokemon, li, dropDown);
        addComment(pokemon, info, dropDown);
      } else {
        console.log("det här borde du inte se????");
        addToMyDeck(pokemon, dropDown);
      }
    })
    .catch((err) => {
      console.error("något gick fel", err);
      let li = document.createElement("li");
      li.innerText = "Tyvärr finns det ingen Pokemon med det namnet";
      listOfPokemons.appendChild(li);
    });
}

function getAllDecks() {
  myDecks.innerHTML = "";
  fetch("http://localhost:8080/api/pokiDeck/decks")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.forEach((deck) => {
        decks.push(deck);
        let btn = document.createElement("button");
        btn.innerText = deck.name;
        btn.className = "nav-item";
        myDecks.appendChild(btn);
        btn.addEventListener("click", () => {
          yourPokiDeck(deck.id);
        });
      });
    });
}

function yourPokiDeck(deckId) {
  listOfPokemons.innerHTML = "";
  fetch("http://localhost:8080/api/pokiDeck/" + deckId)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach((poki) => {
        pokemonList.push(poki);
        getPokiInfo(poki);
      });
    });
}
function addToMyDeck(pokemon, parent) {
  decks.forEach((deck) => {
    let addbtn = document.createElement("button");
    addbtn.innerText = "Lägg till i " + deck.name;

    parent.appendChild(addbtn);
    const bodyData = {
      url: pokemon.url,
      deckId: deck.id
    };

    addbtn.addEventListener("click", () => {
      fetch("http://localhost:8080/api/pokiDeck/addPokemon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyData)
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    });
  });
}

function deleteFromMyDeck(pokemon, parent, dropDown) {
  let deletebtn = document.createElement("button");

  deletebtn.innerText = "Ta bort från min deck";
  dropDown.appendChild(deletebtn);

  deletebtn.addEventListener("click", () => {
    fetch("http://localhost:8080/api/pokiDeck/deletePokemon/" + pokemon.id, {
      method: "DELETE"
    });
    console.log("Deleted");
    listOfPokemons.removeChild(parent);
  });
}

function addComment(pokemon, parent, dropDown) {
  let editBtn = document.createElement("button");
  editBtn.innerText = "Lägg till komentar";
  dropDown.appendChild(editBtn);

  editBtn.addEventListener("click", () => {
    let comment = document.createElement("textarea");
    let submit = document.createElement("button");
    submit.innerText = "Lägg till";
    parent.append(comment, submit);

    submit.addEventListener("click", () => {
      fetch("http://localhost:8080/api/pokiDeck/addComment/" + pokemon.id, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: comment.value
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          parent.innerText = data.comment;
        });
    });
  });
}

searchBtn.addEventListener("click", () => {
  if (searchField.value == "") {
    listOfPokemons.innerHTML = "";
    getPekiList();
  } else {
    listOfPokemons.innerHTML = "";
    getPokiInfo("https://pokeapi.co/api/v2/pokemon/" + searchField.value);
    console.log(searchField.value);
  }
  searchField.value = "";
});

searchField.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    if (searchField.value == "") {
      listOfPokemons.innerHTML = "";
      getPokiList();
      console.log("i if");
    } else {
      console.log("i else");
      listOfPokemons.innerHTML = "";
      getPokiInfo("https://pokeapi.co/api/v2/pokemon/" + searchField.value);
      console.log(searchField.value);
    }
    searchField.value = "";
  }
});

homeBtn.addEventListener("click", () => {
  getPokiList();
});

newDeckBtn.addEventListener("click", () => {
  if (newDeckContainer.querySelector("input")) {
    newDeckContainer.removeChild(newDeckContainer.querySelector("input"));
  } else {
    let input = document.createElement("input");
    let button = document.createElement("button");
    button.innerText = "Lägg till";
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Namn:");
    newDeckContainer.append(input, button);
    button.addEventListener("click", () => {
      fetch("http://localhost:8080/api/pokiDeck/newDeck/" + input.value, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          getAllDecks();
        });
    });
  }
});
getPokiList();
getAllDecks();
