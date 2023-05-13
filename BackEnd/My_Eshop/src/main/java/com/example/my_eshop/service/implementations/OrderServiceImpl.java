package com.example.my_eshop.service.implementations;

import com.example.my_eshop.entity.OrderEntity;
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
    public List<OrderEntity> findAllOrders() {
        List<OrderEntity> orderEntities = orderRepository.findAll();
        return orderEntities;
    }

    @Override
    public OrderEntity createOrder(OrderEntity orderEntity) {
        return this.orderRepository.save(orderEntity);
    }

//    @Override
//    public Optional<Order> findProductById(Integer id) {
//        return productRepository.findById(id);
//    }
}
