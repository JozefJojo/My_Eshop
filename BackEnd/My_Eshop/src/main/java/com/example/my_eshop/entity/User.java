package com.example.my_eshop.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String name;
    private String email;
    private String city;
    private String postalCode;
    private String address;
    private String phoneNumber;
    private String role;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private OrderEntity orderEntity;




    public User(String name, String email, String city, String postalCode, String address, String phoneNumber, String role, OrderEntity orderEntity) {
        this.name = name;
        this.email = email;
        this.city = city;
        this.postalCode = postalCode;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.role = role;
        this.orderEntity = orderEntity;
    }
}
