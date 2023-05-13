package com.example.my_eshop.service.interfaces;

import com.example.my_eshop.entity.Order;

import java.util.List;

public interface IOrderService {

    List<Order> findAllOrders();


//
//    Order findById(Integer id);

//    Order createOrder(OrderInputModel order);
    Order createOrder(Order order);

//    List<Order> findByUserId(int userId);

//    void deleteById(int orderId);
}
