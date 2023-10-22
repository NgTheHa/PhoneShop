package com.hanguyen.phoneshop.service;

import com.hanguyen.phoneshop.exception.ProductException;
import com.hanguyen.phoneshop.model.Rating;
import com.hanguyen.phoneshop.model.User;
import com.hanguyen.phoneshop.request.RatingRequest;

import java.util.List;

public interface RatingService {

    public Rating createRating(RatingRequest req, User user) throws ProductException;

    public List<Rating> getProductsRating(Long productId);
}
