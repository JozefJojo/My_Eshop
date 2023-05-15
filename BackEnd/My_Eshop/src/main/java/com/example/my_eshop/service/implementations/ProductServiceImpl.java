package com.example.my_eshop.service.implementations;

import com.example.my_eshop.entity.Product;
import com.example.my_eshop.repository.ProductRepository;
import com.example.my_eshop.service.interfaces.IProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements IProductService {

    private final ProductRepository productRepository;

    @Override
    public List<Product> findAllProduct() {
        List<Product> products = productRepository.findAll();
        return products;
    }

    @Override
    public Optional<Product> findProductById(Integer id) {
        return productRepository.findById(id);
    }
}
