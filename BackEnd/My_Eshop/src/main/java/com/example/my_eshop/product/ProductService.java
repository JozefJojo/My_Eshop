package com.example.my_eshop.product;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService implements IProductService {

    private final ProductRepository productRepository;

    @Override
    public List<Product> findAllProduct() {
        List<Product> products = productRepository.findAll();
        return products;
    }
}
