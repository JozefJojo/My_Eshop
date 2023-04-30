package com.example.my_eshop.orderline;

import com.example.my_eshop.order.Order;
import com.example.my_eshop.product.Product;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table (name = "orderline")
public class Orderline {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    public Integer id;

//    @Column(name = "productId")
//    public Integer productId;

    @Column(name = "amount")
    public Integer amount;

//Joins
//    @ManyToOne
//    @JoinColumn(name = "neworderId")
//    private Order order;

    @OneToOne
    @JoinColumn(name = "productId")
    private Product product;

}
