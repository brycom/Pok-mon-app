package com.example.pokemon.api;

import java.util.List;
import java.util.Optional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;

import com.example.pokemon.model.Pokemon;
import com.example.pokemon.model.PokiDeck;
import com.example.pokemon.model.User;
import com.example.pokemon.repository.UserRepository;
import com.example.pokemon.repository.pokemonRepository;
import com.example.pokemon.repository.pokiDeckRepository;

import com.example.pokemon.service.PokiDeckService;

@RestController
@RequestMapping("/api/pokiDeck")
@CrossOrigin
public class pokiDeckController {

    public final PokiDeckService pokiDeckService;
    public final UserRepository userRepository;
    public final pokiDeckRepository pokiDeckRepository;
    public final pokemonRepository pokemonRepository;

    public pokiDeckController(PokiDeckService pokiDeckService, UserRepository userRepository,
            com.example.pokemon.repository.pokiDeckRepository pokiDeckRepository, pokemonRepository pokemonRepository) {
        this.pokiDeckService = pokiDeckService;
        this.userRepository = userRepository;
        this.pokiDeckRepository = pokiDeckRepository;
        this.pokemonRepository = pokemonRepository;
    }

    @GetMapping("/{deckId}")
    public List<Pokemon> getDeck(/* @AuthenticationPrincipal UserDetails userDetails, */ @PathVariable int deckId) {

        Optional<User> userO = userRepository.findByUsername("mathias");
        User user = userO.orElse(null);

        return pokiDeckService.getPockiDeck(user.getId(), deckId);

    }

    @PostMapping("/newDeck")
    public PokiDeck newDeck(@AuthenticationPrincipal UserDetails userDetails) {

        Optional<User> userO = userRepository.findByUsername(userDetails.getUsername());
        User user = userO.orElse(null);
        PokiDeck pokiDeck = new PokiDeck(user.getId());
        pokiDeckRepository.save(pokiDeck);

        return pokiDeck;
    }

    @PostMapping("/addPokemon")
    public Pokemon addPokemon(@RequestBody Pokemon Pokemon) {
        Pokemon p = new Pokemon(Pokemon.getUrl(), 2);
        pokemonRepository.save(p);

        return p;
    }

}
