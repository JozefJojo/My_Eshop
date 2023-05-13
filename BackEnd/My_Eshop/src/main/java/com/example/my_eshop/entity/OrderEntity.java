package com.example.my_eshop.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
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

    @OneToMany(mappedBy = "orderEntity", cascade = CascadeType.ALL)
    private List<Orderline> orderlines;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    public OrderEntity(String created, String status, User user) {
        this.created = created;
        this.status = status;
        this.user = user;
    }

    public OrderEntity(User user, List<Orderline> orderlines) {
        this.created = new Date().toString();
        this.status = "PROCESSED";
//        this.user = user;
        this.orderlines = orderlines;
    }
}