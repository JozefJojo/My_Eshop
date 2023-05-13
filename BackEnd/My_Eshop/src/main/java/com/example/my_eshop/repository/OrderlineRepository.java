package com.example.my_eshop.repository;

import com.example.my_eshop.entity.Orderline;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderlineRepository extends JpaRepository<Orderline,Integer> {
}
