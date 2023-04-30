package com.example.my_eshop.order;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class OrderService implements IOrderService {

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
