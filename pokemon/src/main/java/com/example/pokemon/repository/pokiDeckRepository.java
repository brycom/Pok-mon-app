package com.example.pokemon.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.pokemon.model.PokiDeck;

public interface pokiDeckRepository extends CrudRepository<PokiDeck, Integer> {

}
