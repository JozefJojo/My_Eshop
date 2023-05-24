package com.example.my_eshop.controller;

import com.example.my_eshop.entity.Orderline;
import com.example.my_eshop.entity.User;
import com.example.my_eshop.repository.OrderRepository;
import com.example.my_eshop.repository.OrderlineRepository;
import com.example.my_eshop.service.interfaces.IOrderService;
import com.example.my_eshop.entity.OrderEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")   //povolujem vsetky requesty , v buducnosti dovolit len z mojej stranky  (pozri si aj websokety)
@RequestMapping("/orders")
public class OrderController {

    private final IOrderService orderService;
    private final OrderRepository orderRepository;
    private final OrderlineRepository orderlineRepository;

    @GetMapping
    public List<OrderEntity> getOrders() {return orderService.findAllOrders();}

//    @GetMapping("/{id}")
//    public Optional<Order> getProductById(@PathVariable (value = "id") Integer id){
//        return orderSercice.findProductById(id);
//    }

//bolo by lepsie pouzit DTO
    @PostMapping("/createOrderWithUser")
    public ResponseEntity<OrderEntity> createOrder(@RequestBody OrderEntity orderEntity) {

        LocalDateTime timeNow = LocalDateTime.now();
        DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("dd.MM.yyyy HH:mm:ss");
        String timeOfCreationOrder = timeNow.format(timeFormatter);


        orderEntity.setStatus("CREATED");
        orderEntity.setCreated(String.valueOf(timeOfCreationOrder));
        orderEntity.setRole("user");
        List<Orderline> orderlines = orderEntity.getOrderlines();
        for (Orderline orderline : orderlines) {
            orderline.setOrderEntity(orderEntity);
        }
        orderEntity.setOrderlines(orderlines);
        orderRepository.saveAndFlush(orderEntity);

        return new ResponseEntity<>(orderEntity, HttpStatus.CREATED);
    }



}
