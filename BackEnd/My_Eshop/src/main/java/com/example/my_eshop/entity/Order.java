package com.example.my_eshop.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;


@Data
@Entity
//@Table(name = "o_rder")
@NoArgsConstructor
@AllArgsConstructor
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer orderId;

    private String created;

    private String status;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<Orderline> orderlines;


    public Order(String created, String status, User user) {
        this.created = created;
        this.status = status;
        this.user = user;
    }

    public Order(User user, List<Orderline> orderlines) {
        this.created = new Date().toString();
        this.status = "PROCESSED";
        this.user = user;
        this.orderlines = orderlines;
    }
}
//@OneToMany(cascade = CascadeType.ALL, mappedBy = "id")
//    private List<Orderline> orderlines;