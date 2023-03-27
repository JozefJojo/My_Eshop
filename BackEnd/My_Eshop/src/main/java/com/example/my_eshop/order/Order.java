package com.example.my_eshop.order;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;


@Data
@Entity
@Table(name = "order")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    public Integer id;

    @Column(name = "totalCost")
    public String totalCost;

    @Column(name = "deliveryAddress")
    public String deliveryAddress;

    @Column(name = "created")
    public String created = new Date().toString();

    @Column(name = "status")
    public String status = "PROCESSED";

    @Column(name = "userId")
    public int userId;
}
