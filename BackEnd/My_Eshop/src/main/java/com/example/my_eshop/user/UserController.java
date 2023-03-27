package com.example.my_eshop.user;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.rmi.ServerException;
import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/users")
public class UserController {

    private final IUserService userService;

    @GetMapping
    public List<User> getUsers() {return userService.findAllUsers();}

//    @GetMapping("/{id}")
//    public Optional<User> getProductById(@PathVariable (value = "id") Integer id){
//        return userService.findUserById(id);
//    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<User> createUser(@RequestBody User newUser) throws Exception {
        var user = userService.createUser(newUser);

        if (user == null) {
            throw new ServerException("The user has not been created");
        }

        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

}
