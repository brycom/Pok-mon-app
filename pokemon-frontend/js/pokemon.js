let body = document.body;
let listOfPokemons = document.createElement("ul");
body.appendChild(listOfPokemons);
let searchField = document.getElementById("searchField");
let searchBtn = document.getElementById("searchBtn");

function getPikiList() {
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
        getPokiInfo(poki.url);
      });
    });
}

function getPokiInfo(url) {
  fetch(url)
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
      console.log(data);
    })
    .catch((err) => {
      console.error("något gick fel", err);
      let li = document.createElement("li");
      li.innerText = "Tyvärr finns det ingen Pokemon med det namnet";
      listOfPokemons.appendChild(li);
    });
}

function yourPokiDeck(deckId) {
  fetch("http://localhost:8080/api/pokiDeck/" + deckId)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach((poki) => {
        getPokiInfo(poki.url);
      });
    });
}

function displayPokiSpec(pokemon) {}

searchBtn.addEventListener("click", () => {
  if (searchField.value == "") {
    listOfPokemons.innerHTML = "";
    getPikiList();
    console.log("i if");
  } else {
    console.log("i else");
    listOfPokemons.innerHTML = "";
    getPokiInfo("https://pokeapi.co/api/v2/pokemon/" + searchField.value);
    console.log(searchField.value);
  }
  searchField.value = "";
});

//getPikiList();
yourPokiDeck(2);
