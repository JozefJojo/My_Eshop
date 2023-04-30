package com.example.my_eshop.order;

import com.example.my_eshop.user.IUserService;
import com.example.my_eshop.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/orders")
public class OrderController {

    private final IOrderService orderService;
    private final IUserService userService;

    @GetMapping
    public List<Order> getOrders() {return orderService.findAllOrders();}

//    @GetMapping("/{id}")
//    public Optional<Order> getProductById(@PathVariable (value = "id") Integer id){
//        return orderSercice.findProductById(id);
//    }



    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {
        User user = userService.createUser(order.getUser());
        order.setUser(user);
        Order savedOrder = orderService.createOrder(order);
        return new ResponseEntity<>(savedOrder, HttpStatus.CREATED);
    }



}
