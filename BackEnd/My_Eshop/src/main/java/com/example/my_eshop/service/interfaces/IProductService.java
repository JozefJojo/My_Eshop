package com.example.my_eshop.service.interfaces;

import com.example.my_eshop.entity.Product;

import java.util.List;
import java.util.Optional;

public interface IProductService {

    List<Product> findAllProduct();

    Optional<Product> findProductById(Integer id);
}
