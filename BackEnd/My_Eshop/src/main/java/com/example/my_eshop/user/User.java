package com.example.my_eshop.user;

import com.example.my_eshop.order.Order;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Entity
@Table(name = "user")
@NoArgsConstructor
@AllArgsConstructor
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


//    Joins
    @OneToOne(mappedBy = "user")
    private Order order;


    public User(String name, String email, String city, String postalCode, String address, String phoneNumber, String role, Order order) {
        this.name = name;
        this.email = email;
        this.city = city;
        this.postalCode = postalCode;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.role = role;
        this.order = order;
    }
}
