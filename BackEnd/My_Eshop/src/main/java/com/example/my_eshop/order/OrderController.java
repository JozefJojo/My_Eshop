package com.example.my_eshop.order;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/products")
public class ProductController {

    private final IOrderService productService;

    @GetMapping
    public List<Order> getProducts() {return productService.findAllProduct();}

    @GetMapping("/{id}")
    public Optional<Order> getProductById(@PathVariable (value = "id") Integer id){
        return productService.findProductById(id);
    }


}
