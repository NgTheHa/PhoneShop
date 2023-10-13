package com.hanguyen.phoneshop.service;

import com.hanguyen.phoneshop.exception.ProductException;
import com.hanguyen.phoneshop.model.Product;
import com.hanguyen.phoneshop.model.Rating;
import com.hanguyen.phoneshop.model.User;
import com.hanguyen.phoneshop.repository.RatingRepository;
import com.hanguyen.phoneshop.request.RatingRequest;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
@Service
public class RatingServiceImpl implements RatingService{

    private RatingRepository ratingRepository;
    private ProductService productService;

    public RatingServiceImpl(RatingRepository ratingRepository, ProductService productService) {
        this.ratingRepository = ratingRepository;
        this.productService = productService;
    }

    @Override
    public Rating createRating(RatingRequest req, User user) throws ProductException {

       Product product = productService.findProductById(req.getProductId());

       Rating rating = new Rating();
        rating.setProduct(product);
        rating.setUser(user);
        rating.setRating(req.getRating());
        rating.setCreatedAt(LocalDateTime.now());

        return ratingRepository.save(rating);
    }

    @Override
    public List<Rating> getProductsRating(Long productId) {
        return ratingRepository.getAllProductsRating(productId);
    }
}
