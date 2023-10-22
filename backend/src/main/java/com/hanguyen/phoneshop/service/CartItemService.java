package com.hanguyen.phoneshop.service;

import com.hanguyen.phoneshop.exception.CartItemException;
import com.hanguyen.phoneshop.exception.UserException;
import com.hanguyen.phoneshop.model.Cart;
import com.hanguyen.phoneshop.model.CartItem;
import com.hanguyen.phoneshop.model.Product;

public interface CartItemService {

    public CartItem createCartItem(CartItem cartItem);

    public CartItem updateCartItem(Long userId, Long id, CartItem cartItem) throws CartItemException, UserException;

    public CartItem isCartItemExist(Cart cart, Product product, String storage, Long userId);

    public void removeCartItem(Long userId, Long cartItemId) throws CartItemException, UserException;

    public CartItem findCartItemById(Long cartItemId) throws CartItemException;


}
