package com.example.my_eshop.order;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Order,Integer> {
}
