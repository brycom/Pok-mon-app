package com.example.pokemon.model;

import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class PokiDeck {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    UUID userId;

    public PokiDeck(UUID userId) {
        this.userId = userId;
    }

    public PokiDeck() {
    }

    public int getId() {
        return id;
    }

    public UUID getUserId() {
        return userId;
    }

    public void setUserId(UUID userId) {
        this.userId = userId;
    }

}
