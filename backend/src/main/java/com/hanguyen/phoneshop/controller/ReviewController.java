package com.hanguyen.phoneshop.controller;

import com.hanguyen.phoneshop.exception.ProductException;
import com.hanguyen.phoneshop.exception.UserException;
import com.hanguyen.phoneshop.model.Review;
import com.hanguyen.phoneshop.model.User;
import com.hanguyen.phoneshop.request.ReviewRequest;
import com.hanguyen.phoneshop.service.ReviewService;
import com.hanguyen.phoneshop.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {
    private ReviewService reviewService;
    private UserService userService;
    @Autowired
    public ReviewController(ReviewService reviewService, UserService userService){
        this.reviewService = reviewService;
        this.userService = userService;
    }

    @PostMapping("/create")
    public ResponseEntity<Review> createReview(@RequestBody ReviewRequest req,
                                               @RequestHeader("Authorization")String jwt) throws UserException, ProductException{
        User user = userService.findUserProfileByJwt(jwt);
        Review review = reviewService.createReview(req, user);
        return  new ResponseEntity<Review>(review, HttpStatus.CREATED);
    }

    @GetMapping("/product/{productId}")
    public ResponseEntity<List<Review>> getProductsReview(@PathVariable Long productId) throws UserException, ProductException {

        List<Review> reviews = reviewService.getAllReview(productId);
        return new ResponseEntity<>(reviews, HttpStatus.ACCEPTED);
    }
}
