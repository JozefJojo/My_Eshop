package com.example.my_eshop.user;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductService implements IProductService {

    private final ProductRepository productRepository;

    @Override
    public List<User> findAllProduct() {
        List<User> products = productRepository.findAll();
        return products;
    }

    @Override
    public Optional<User> findProductById(Integer id) {
        return productRepository.findById(id);
    }
}
