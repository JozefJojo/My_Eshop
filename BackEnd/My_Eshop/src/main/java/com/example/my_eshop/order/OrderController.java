package com.example.my_eshop.order;

import com.example.my_eshop.orderline.Orderline;
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

//bolo by lepsie pouzit DTO a to z dovodu ze ako Order staci vediet usera ktory si to objednava
//    zvysok mozes dat generovat v triede Order napriklad cas kedy vznikla order, status ze je created
//    a taktiez na vytvorenie User mozes pouzit DTO  , potrebujes vediet iba zakladne udaje , zvysok das
//    vygenerovat v User.class  (vygenerovat nechas id, user rolu)
    @PostMapping ("/createOrderWithUser")
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {
        User user = userService.createUser(order.getUser());
        Order savedOrder = orderService.createOrder(order);

        Orderline o=new Orderline(1,3);
        Orderline o1=new Orderline(1,3);
        Orderline o2=new Orderline(1,3);
        o.setOrder(order);
        o1.setOrder(order);
        o2.setOrder(order);
        order.setOrderlines(List.of(o,o1,o2));

        order.setUser(user);
//        Order savedOrder = orderService.createOrder(order);


        return new ResponseEntity<>(savedOrder, HttpStatus.CREATED);
    }



}
