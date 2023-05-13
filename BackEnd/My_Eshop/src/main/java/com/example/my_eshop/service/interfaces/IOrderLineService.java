package com.example.my_eshop.service.interfaces;

import com.example.my_eshop.entity.Orderline;

import java.util.List;

public interface IOrderLineService {

    List<Orderline> findAllOrderline();

    Orderline createOrderline(Orderline newOrderline);
}
