package com.example.my_eshop.service.interfaces;

import com.example.my_eshop.entity.User;

import java.util.List;
import java.util.Optional;

public interface IUserService {

    List<User> findAllUsers();

    User createUser(User newUser);

    Optional<User> findUserById(Integer id);


//    Optional<User> findUserById(Integer id);
}
