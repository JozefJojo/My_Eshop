package com.example.my_eshop.orderline;

import com.example.my_eshop.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderlineService implements IOrderService{

    private final OrderlineRepository orderlineRepository;

    @Override
    public List<Orderline> findAllOrderline() {
        List<Orderline> orderlines = orderlineRepository.findAll();
        return null;
    }

    @Override
    public Orderline createOrderline(Orderline newOrderline) {
        return this.orderlineRepository.save(newOrderline);
    }
}
