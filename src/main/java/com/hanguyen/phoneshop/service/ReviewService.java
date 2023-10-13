package com.hanguyen.phoneshop.service;

import com.hanguyen.phoneshop.exception.ProductException;
import com.hanguyen.phoneshop.model.Review;
import com.hanguyen.phoneshop.model.User;
import com.hanguyen.phoneshop.request.ReviewRequest;

import java.util.List;

public interface ReviewService {

    public Review createReview(ReviewRequest req, User user) throws ProductException;

    public List<Review> getAllReview(Long productId);
}
