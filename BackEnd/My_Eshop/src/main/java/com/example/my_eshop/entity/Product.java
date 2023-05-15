package com.example.my_eshop.entity;

import jakarta.persistence.*;
import lombok.Data;


@Data
@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String title;

    private String description;

    private String thumbnail;

    private Integer categoryId;

    private Float price;

    private Integer producerId;
}
