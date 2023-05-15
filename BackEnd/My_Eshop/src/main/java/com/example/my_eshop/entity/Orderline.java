package com.example.my_eshop.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Entity
@NoArgsConstructor
public class Orderline {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer orderlineId;
    private Integer productId;
    private Integer amount;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "orderId")
    @JsonIgnore
    private OrderEntity orderEntity;

    public Orderline(Integer productId, Integer amount) {
        this.productId = productId;
        this.amount = amount;
    }
}
