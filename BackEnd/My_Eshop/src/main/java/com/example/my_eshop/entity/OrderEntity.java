package com.example.my_eshop.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class OrderEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer orderId;
    private String created;
    private String status;
//user section
    private String name;
    private String email;
    private String city;
    private String postalCode;
    private String address;
    private String phoneNumber;
    private String role;

    @OneToMany(mappedBy = "orderEntity", cascade = CascadeType.ALL)
    private List<Orderline> orderlines;

    public OrderEntity(String created, String status, User user) {
        this.created = created;
        this.status = status;
        this.name = user.getName();
        this.email = user.getEmail();
        this.city = user.getCity();
        this.postalCode = user.getPostalCode();
        this.address = user.getAddress();
        this.phoneNumber = user.getPhoneNumber();
        this.role = "user-rola";
    }


}