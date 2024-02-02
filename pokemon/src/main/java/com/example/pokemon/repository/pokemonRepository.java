package com.example.pokemon.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.pokemon.model.Pokemon;
import java.util.List;

public interface pokemonRepository extends CrudRepository<Pokemon, Integer> {

    List<Pokemon> findByDeckId(int deckId);

    Pokemon findByUrl(String url);

}
