package com.example.my_eshop.service.implementations;

import com.example.my_eshop.entity.User;
import com.example.my_eshop.repository.UserRepository;
import com.example.my_eshop.service.interfaces.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements IUserService {

    private final UserRepository userRepository;

    @Override
    public List<User> findAllUsers() {
        List<User> users = userRepository.findAll();
        return users;
    }

    @Override
    public Optional<User> findUserById(Integer id) {
        return userRepository.findById(id);
    }

    @Override
    public User createUser(User newUser) {

//        var user = this.userRepository.findByName(newUser.name);
//        if (user == null) {

            return this.userRepository.save(newUser);
//        }
//        return null;
    }

}
