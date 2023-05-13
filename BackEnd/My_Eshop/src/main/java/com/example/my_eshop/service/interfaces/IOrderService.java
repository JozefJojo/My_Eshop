package com.example.my_eshop.service.interfaces;

import com.example.my_eshop.entity.OrderEntity;

import java.util.List;

public interface IOrderService {

    List<OrderEntity> findAllOrders();


//
//    Order findById(Integer id);

//    Order createOrder(OrderInputModel order);
    OrderEntity createOrder(OrderEntity orderEntity);

//    List<Order> findByUserId(int userId);

//    void deleteById(int orderId);
}
