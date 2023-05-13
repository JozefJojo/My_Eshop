package com.example.my_eshop.controller;

import com.example.my_eshop.repository.OrderRepository;
import com.example.my_eshop.repository.OrderlineRepository;
import com.example.my_eshop.repository.UserRepository;
import com.example.my_eshop.service.interfaces.IOrderService;
import com.example.my_eshop.entity.OrderEntity;
import com.example.my_eshop.entity.Orderline;
import com.example.my_eshop.service.interfaces.IUserService;
import com.example.my_eshop.entity.User;
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
    private final OrderRepository orderRepository;
    private final UserRepository userRepository;
    private final OrderlineRepository orderlineRepository;

    @GetMapping
    public List<OrderEntity> getOrders() {return orderService.findAllOrders();}

//    @GetMapping("/{id}")
//    public Optional<Order> getProductById(@PathVariable (value = "id") Integer id){
//        return orderSercice.findProductById(id);
//    }

//bolo by lepsie pouzit DTO a to z dovodu ze ako Order staci vediet usera ktory si to objednava
//    zvysok mozes dat generovat v triede Order napriklad cas kedy vznikla order, status ze je created
//    a taktiez na vytvorenie User mozes pouzit DTO  , potrebujes vediet iba zakladne udaje , zvysok das
//    vygenerovat v User.class  (vygenerovat nechas id, user rolu)
    @PostMapping ("/createOrderWithUser")
    public ResponseEntity<OrderEntity> createOrder() {


        return new ResponseEntity<>(new OrderEntity(), HttpStatus.CREATED);
    }



}