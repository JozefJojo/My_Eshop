package com.example.my_eshop.user;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<User,Integer> {
}
