package com.example.my_eshop.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
public class User {

    private String name;
    private String email;
    private String city;
    private String postalCode;
    private String address;
    private String phoneNumber;
    private String role;

//    toto som pridal kontruktor
    public User(String name, String email, String city, String postalCode, String address, String phoneNumber) {
        this.name = name;
        this.email = email;
        this.city = city;
        this.postalCode = postalCode;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.role = "user";
    }
}
