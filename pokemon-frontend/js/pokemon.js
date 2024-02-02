let body = document.body;
let listOfPokemons = document.createElement("ul");
body.appendChild(listOfPokemons);
let searchField = document.getElementById("searchField");
let searchBtn = document.getElementById("searchBtn");

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
      info.innerText = data.id;

      img.src = data.sprites.front_default;
      h2.innerText = data.name;
      li.append(img, h2);
      listOfPokemons.appendChild(li);
      addToMyDeck(pokemon, li);
      deleteFromMyDeck(pokemon, li);
    })
    .catch((err) => {
      console.error("något gick fel", err);
      let li = document.createElement("li");
      li.innerText = "Tyvärr finns det ingen Pokemon med det namnet";
      listOfPokemons.appendChild(li);
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
        getPokiInfo(poki);
      });
    });
}
function addToMyDeck(pokemon, parent) {
  let addbtn = document.createElement("button");

  addbtn.innerText = "Lägg till i mina pokemons";

  parent.appendChild(addbtn);
  const bodyData = {
    url: pokemon.url,
    deckId: 2
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
}

function deleteFromMyDeck(pokemon, parent) {
  let deletebtn = document.createElement("button");
  deletebtn.id = pokemon.id;
  deletebtn.innerText = "Ta bort från min deck";
  parent.appendChild(deletebtn);

  deletebtn.addEventListener("click", () => {
    fetch("http://localhost:8080/api/pokiDeck/deletePokemon/" + pokemon.id, {
      method: "DELETE"
    });
    console.log("Deleted");
    listOfPokemons.removeChild(parent);
  });
}

searchBtn.addEventListener("click", () => {
  if (searchField.value == "") {
    listOfPokemons.innerHTML = "";
    getPekiList();
    console.log("i if");
  } else {
    console.log("i else");
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
//getPokiList();
yourPokiDeck(2);
