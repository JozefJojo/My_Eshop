package com.example.my_eshop.user;

import java.util.List;
import java.util.Optional;

public interface IProductService {

    List<User> findAllProduct();

    Optional<User> findProductById(Integer id);
}
