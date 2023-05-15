package com.example.my_eshop.repository;

import com.example.my_eshop.entity.Orderline;
import org.aspectj.weaver.ast.Or;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderlineRepository extends JpaRepository<Orderline,Integer> {


}
