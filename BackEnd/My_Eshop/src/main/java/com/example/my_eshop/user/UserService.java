package com.example.my_eshop.user;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService implements IUserService {

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
