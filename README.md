Pokemon app


Det finns en SQL fil med i projektet med ett par users och ett par decks.
det viktiga när projektet körs är att det finns en användare med användarnamn mathias. Eftersom frontenden inte har något inlogningssystem så är user funktionerna mockade med användarnamnet mathias.
utan det kommer du inte kunna se dina decks då alla för tilfället är knutna till den användaren.

Om du vill använda en annan användare kan du lägga till en ny användare via postman (localhost:8080/api/newUser) och byta ut mathias till det nya användarnamnet i controllern.

Ibland har det upkommit CORS problem men det har gått att lösa med en CORS blocker direkt i webläsaren.

Frontenden har funtioner för att lägga till nya decks, lägga till pokemons i dom olika decksen samt komentera dina tillagda pokemons och ta bort dom från dina decks.
