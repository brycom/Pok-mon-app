package com.example.pokemon.api;

import java.util.List;
import java.util.Optional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import com.example.pokemon.model.Pokemon;
import com.example.pokemon.model.PokiDeck;
import com.example.pokemon.model.User;
import com.example.pokemon.repository.UserRepository;
import com.example.pokemon.repository.pokiDeckRepository;

import com.example.pokemon.service.PokiDeckService;

@RestController
@RequestMapping("/api/pokiDeck")
@CrossOrigin
public class pokiDeckController {

    public final PokiDeckService pokiDeckService;
    public final UserRepository userRepository;
    public final pokiDeckRepository pokiDeckRepository;

    public pokiDeckController(PokiDeckService pokiDeckService, UserRepository userRepository,
            com.example.pokemon.repository.pokiDeckRepository pokiDeckRepository) {
        this.pokiDeckService = pokiDeckService;
        this.userRepository = userRepository;
        this.pokiDeckRepository = pokiDeckRepository;
    }

    @GetMapping("/{deckId}")
    public List<Pokemon> getDeck(@PathVariable int deckId) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null) {
            Optional<User> userO = userRepository.findByUsername(authentication.getName());
            User user = userO.orElse(null);

            return pokiDeckService.getPockiDeck(user.getId(), deckId);
        } else {
            System.out.println("du måste logga in först");
            return null;
        }
    }

    @PostMapping("/newDeck")
    public PokiDeck newDeck() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Optional<User> userO = userRepository.findByUsername(authentication.getName());
        User user = userO.orElse(null);
        PokiDeck pokiDeck = new PokiDeck(user.getId());
        pokiDeckRepository.save(pokiDeck);

        return null;
    }

}
