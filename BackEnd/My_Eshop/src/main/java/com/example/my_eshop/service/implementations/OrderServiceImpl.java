package com.example.my_eshop.service.implementations;

import com.example.my_eshop.entity.Order;
import com.example.my_eshop.repository.OrderRepository;
import com.example.my_eshop.service.interfaces.IOrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements IOrderService {

    private final OrderRepository orderRepository;

    @Override
    public List<Order> findAllOrders() {
        List<Order> orders = orderRepository.findAll();
        return orders;
    }

    @Override
    public Order createOrder(Order order) {
        return this.orderRepository.save(order);
    }

//    @Override
//    public Optional<Order> findProductById(Integer id) {
//        return productRepository.findById(id);
//    }
}
