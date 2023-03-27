package com.example.my_eshop.order;

import jakarta.persistence.*;
import lombok.Data;


@Data
@Entity
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    public Integer id;

    @Column(name = "title")
    public String title;

    @Column(name = "description")
    public String description;

    @Column(name = "thumbnail")
    public String thumbnail;

    @Column(name = "categoryId")
    public Integer categoryId;

    @Column(name = "price")
    public Float price;

    @Column(name = "producerId")
    public Integer producerId;
}
