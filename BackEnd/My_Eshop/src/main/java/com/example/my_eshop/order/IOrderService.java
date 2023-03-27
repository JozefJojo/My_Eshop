package com.example.my_eshop.order;

import java.util.List;
import java.util.Optional;

public interface IProductService {

    List<Order> findAllProduct();

    Optional<Order> findProductById(Integer id);
}
