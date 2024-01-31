package com.example.pokemon.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.pokemon.model.Pokemon;

public interface pokemonRepository extends CrudRepository<Pokemon, Integer> {

}
