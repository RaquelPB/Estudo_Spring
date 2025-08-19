package com.multimarcas.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class Home {
    
    @GetMapping("/")
    public String home() {
        return "index";
    }

    @GetMapping("/soma/{num1}/{num2}")
    public String soma(@PathVariable int num1, @PathVariable int num2) {
        return "A soma de: " + num1 + " + " + num2 + " = " + (num1 + num2);
    }

}
