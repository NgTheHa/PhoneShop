package com.hanguyen.phoneshop.service;

import com.hanguyen.phoneshop.exception.ProductException;
import com.hanguyen.phoneshop.model.Product;
import com.hanguyen.phoneshop.request.CreateProductRequest;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ProductService {
    public Product createProduct(CreateProductRequest req);

    public String deleteProduct(Long productId)throws ProductException;

    public Product updateProduct(Long productId, Product req)throws ProductException;

    public Product findProductById(Long id)throws ProductException;

    public List<Product>findProductByCategory(String category);

    public Page<Product> getAllProduct(String category, List<String>colors, List<String>storages, Integer minPrice, Integer maxPrice,
                                       Integer minDiscount, String sort, String stock, Integer pageNumber, Integer pageSize);


    List<Product> findAllProducts();
}
