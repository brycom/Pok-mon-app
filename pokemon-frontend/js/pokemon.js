fetch("https://pokeapi.co/api/v2/berry/2/")
  .then(function (response) {
    if (!response.ok) {
      throw new Error("Du har gjort något fel.....");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
