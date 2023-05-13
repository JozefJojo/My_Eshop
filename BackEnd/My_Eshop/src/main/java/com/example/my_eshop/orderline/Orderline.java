package com.example.my_eshop.orderline;

import com.example.my_eshop.order.Order;
import com.example.my_eshop.product.Product;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
//@Table (name = "orderline")
public class Orderline {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer orderlineId;

    private Integer productId;

    private Integer amount;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;


    public Orderline(Integer productId, Integer amount) {
        this.productId = productId;
        this.amount = amount;
    }
}

//@ManyToOne
//    @JoinColumn(name = "order_id", referencedColumnName = "id")
//    private Order order;

