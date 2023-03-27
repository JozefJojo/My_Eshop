package com.example.my_eshop.user;

import jakarta.persistence.*;
import lombok.Data;


@Data
@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    public Integer id;

    @Column(name = "name")
    public String name;

    @Column(name = "email")
    public String email;

    @Column(name = "city")
    public String city;

    @Column(name = "postalCode")
    public String postalCode;

    @Column(name = "address")
    public String address;

    @Column(name = "phoneNumber")
    public String phoneNumber;

    @Column(name = "role")
    public String role;
}
