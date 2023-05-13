package com.example.my_eshop.controller;

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
    public ResponseEntity<OrderEntity> createOrder(@RequestBody OrderEntity orderEntity) {
//        User user = userService.createUser(orderEntity.getUser());
        OrderEntity savedOrderEntity = orderService.createOrder(orderEntity);

        Orderline o=new Orderline(1,3);
        Orderline o1=new Orderline(1,3);
        Orderline o2=new Orderline(1,3);
//        o.setOrderEntity(orderEntity);
//        o1.setOrderEntity(orderEntity);
//        o2.setOrderEntity(orderEntity);
//        orderEntity.setOrderlines(List.of(o,o1,o2));

//        orderEntity.setUser(user);
//        Order savedOrder = orderService.createOrder(order);


        return new ResponseEntity<>(savedOrderEntity, HttpStatus.CREATED);
    }



}
