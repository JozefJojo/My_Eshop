package com.example.my_eshop.orderline;


import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.rmi.ServerException;
import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/orderlines")
public class OrderlineController {

    private final IOrderService orderService;

    @GetMapping
    public List<Orderline> getOrderlines(){
        return orderService.findAllOrderline();
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Orderline> createOrderline(@RequestBody Orderline newOrderline) throws Exception{
        var orderline = orderService.createOrderline(newOrderline);

        if (orderline == null) {
            throw new ServerException("The orderline has not been created");
        }

        return new ResponseEntity<>(orderline, HttpStatus.CREATED);
    }
}


