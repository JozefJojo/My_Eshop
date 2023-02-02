package com.example.my_eshop.product;

import java.util.List;
import java.util.Optional;

public interface IProductService {

    List<Product> findAllProduct();

    Optional<Product> findProductById(Integer id);
}
