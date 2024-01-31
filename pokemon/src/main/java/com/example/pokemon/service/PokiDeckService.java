package com.example.pokemon.service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.example.pokemon.model.Pokemon;
import com.example.pokemon.model.PokiDeck;
import com.example.pokemon.repository.pokemonRepository;
import com.example.pokemon.repository.pokiDeckRepository;

@Service
public class PokiDeckService {

    private final pokiDeckRepository pokiDeckRepository;
    private final pokemonRepository pokemonRepository;

    public PokiDeckService(com.example.pokemon.repository.pokiDeckRepository pokiDeckRepository,
            com.example.pokemon.repository.pokemonRepository pokemonRepository) {
        this.pokiDeckRepository = pokiDeckRepository;
        this.pokemonRepository = pokemonRepository;
    }

    public List<Pokemon> getPockiDeck(UUID userId, int deckId) {

        Optional<PokiDeck> opDeck = pokiDeckRepository.findById(deckId);
        PokiDeck deck = opDeck.orElseThrow(() -> new NoSuchElementException("PokiDeck är inte närvarande"));

        if (deck.getUserId().equals(userId)) {
            List<Pokemon> pokiList = pokemonRepository.findByDeckId(deck.getId());
            System.out.println(pokiList.size());

            return pokiList;
        } else {
            System.out.println("Du är dum i huvudet");

            return null;
        }

    }

}
