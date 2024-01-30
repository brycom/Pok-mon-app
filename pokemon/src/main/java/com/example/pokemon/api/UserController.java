package com.example.pokemon.api;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.pokemon.model.User;

import ch.qos.logback.core.model.Model;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class UserController {

    @GetMapping("/users")
    public String getUser() {
        return "nu fungerar det din lilla filur!!!";
    }

    /*     @PostMapping("/newUser")
    public User newUser(Model model, ) {
    
    
        return user;
    } */

}
