package com.example.my_eshop.service.implementations;

import com.example.my_eshop.entity.Orderline;
import com.example.my_eshop.repository.OrderlineRepository;
import com.example.my_eshop.service.interfaces.IOrderLineService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderlineLineServiceImpl implements IOrderLineService {

    private final OrderlineRepository orderlineRepository;

    @Override
    public List<Orderline> findAllOrderline() {
        List<Orderline> orderlines = orderlineRepository.findAll();
        return null;
    }

    @Override
    public Orderline createOrderline(Orderline newOrderline) {


        return this.orderlineRepository.saveAndFlush(newOrderline);
    }


}
