package com.example.pokemon.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class PokiDeck {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    int userId;

}
