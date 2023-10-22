package com.hanguyen.phoneshop.controller;

import com.hanguyen.phoneshop.exception.ProductException;
import com.hanguyen.phoneshop.exception.UserException;
import com.hanguyen.phoneshop.model.Rating;
import com.hanguyen.phoneshop.model.User;
import com.hanguyen.phoneshop.request.RatingRequest;
import com.hanguyen.phoneshop.service.RatingService;
import com.hanguyen.phoneshop.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ratings")
public class RatingController {
    private UserService userService;
    private RatingService ratingService;

    @Autowired
    public RatingController(UserService userService, RatingService ratingService) {
        this.userService = userService;
        this.ratingService = ratingService;
    }

    @PostMapping("/create")
    public ResponseEntity<Rating> createRating(@RequestBody RatingRequest req,
                                               @RequestHeader("Authorization") String jwt) throws UserException, ProductException{
        User user = userService.findUserProfileByJwt(jwt);
        Rating rating = ratingService.createRating(req, user);
        return new ResponseEntity<Rating>(rating, HttpStatus.CREATED);
    }

    @GetMapping("/product/{productId}")
    public ResponseEntity<List<Rating>> getProductRating(@PathVariable Long productId,
                                                         @RequestHeader("Authorization") String jwt) throws  UserException, ProductException{
        User user = userService.findUserProfileByJwt(jwt);
        List<Rating> ratings = ratingService.getProductsRating(productId);
        return  new ResponseEntity<>(ratings, HttpStatus.CREATED);
    }
}
