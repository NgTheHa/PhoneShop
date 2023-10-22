package com.hanguyen.phoneshop.service;

import com.hanguyen.phoneshop.exception.ProductException;
import com.hanguyen.phoneshop.model.Product;
import com.hanguyen.phoneshop.model.Review;
import com.hanguyen.phoneshop.model.User;
import com.hanguyen.phoneshop.repository.ProductRepository;
import com.hanguyen.phoneshop.repository.ReviewRepository;
import com.hanguyen.phoneshop.request.ReviewRequest;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
@Service
public class ReviewServiceImpl implements ReviewService{

    private ReviewRepository reviewRepository;
    private ProductService productService;
    private ProductRepository productRepository;

    public ReviewServiceImpl(ReviewRepository reviewRepository, ProductService productService, ProductRepository productRepository) {
        this.reviewRepository = reviewRepository;
        this.productService = productService;
        this.productRepository = productRepository;
    }

    @Override
    public Review createReview(ReviewRequest req, User user) throws ProductException {

        Product product =  productService.findProductById(req.getProductId());

        Review review = new Review();
        review.setUser(user);
        review.setProduct(product);
        review.setReview(req.getReview());
        review.setCreatedAt(LocalDateTime.now());

        return reviewRepository.save(review);
    }

    @Override
    public List<Review> getAllReview(Long productId) {
        return reviewRepository.getAllProductsReview(productId);
    }
}
