package com.hanguyen.phoneshop.controller;

import com.hanguyen.phoneshop.exception.CartItemException;
import com.hanguyen.phoneshop.exception.UserException;
import com.hanguyen.phoneshop.model.CartItem;
import com.hanguyen.phoneshop.service.CartItemService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cartitems")
public class CartItemController {

    private CartItemService cartItemService;

    public CartItemController(CartItemService cartItemService) {
        this.cartItemService = cartItemService;
    }

    @PostMapping("/")
    public ResponseEntity<CartItem> createCartItem(@RequestBody CartItem cartItem) {
        CartItem createdCartItem = cartItemService.createCartItem(cartItem);
        return new ResponseEntity<>(createdCartItem, HttpStatus.CREATED);
    }

    @PutMapping("/{userId}/{id}")
    public ResponseEntity<CartItem> updateCartItem(@PathVariable Long userId, @PathVariable Long id, @RequestBody CartItem cartItem) throws CartItemException {
        try {
            CartItem updatedCartItem = cartItemService.updateCartItem(userId, id, cartItem);
            return new ResponseEntity<>(updatedCartItem, HttpStatus.OK);
        } catch (CartItemException | UserException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{userId}/{cartItemId}")
    public ResponseEntity<Void> removeCartItem(@PathVariable Long userId, @PathVariable Long cartItemId) {
        try {
            cartItemService.removeCartItem(userId, cartItemId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (CartItemException | UserException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/{cartItemId}")
    public ResponseEntity<CartItem> findCartItemById(@PathVariable Long cartItemId) {
        try {
            CartItem cartItem = cartItemService.findCartItemById(cartItemId);
            return new ResponseEntity<>(cartItem, HttpStatus.OK);
        } catch (CartItemException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
