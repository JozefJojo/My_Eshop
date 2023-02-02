package com.example.my_eshop.product;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/products")
public class ProductController {

    private final IProductService productService;

    @GetMapping
    public List<Product> getProducts() {return productService.findAllProduct();}

    @GetMapping("/{id}")
    public Optional<Product> getProductById(@PathVariable (value = "id") Integer id){
        return productService.findProductById(id);
    }


}
