package com.example.my_eshop.orderline;

import com.example.my_eshop.user.User;

import java.util.List;

public interface IOrderService {

    List<Orderline> findAllOrderline();

    Orderline createOrderline(Orderline newOrderline);
}
