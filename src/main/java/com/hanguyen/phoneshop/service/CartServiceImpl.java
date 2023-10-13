package com.hanguyen.phoneshop.service;

import com.hanguyen.phoneshop.exception.ProductException;
import com.hanguyen.phoneshop.model.Cart;
import com.hanguyen.phoneshop.model.CartItem;
import com.hanguyen.phoneshop.model.Product;
import com.hanguyen.phoneshop.model.User;
import com.hanguyen.phoneshop.repository.CartRepository;
import com.hanguyen.phoneshop.request.AddItemRequest;

public class CartServiceImpl implements CartService{

    private CartRepository cartRepository;
    private CartItemService cartItemService;
    private ProductService productService;

    public CartServiceImpl(CartRepository cartRepository, CartItemService cartItemService, ProductService productService) {
        this.cartRepository = cartRepository;
        this.cartItemService = cartItemService;
        this.productService = productService;
    }

    @Override
    public Cart createCart(User user) {

        Cart cart = new Cart();
        cart.setUser(user);
        return cartRepository.save(cart);
    }

    @Override
    public String addCartItem(Long userId, AddItemRequest req) throws ProductException {

        Cart cart = cartRepository.findByUserId(userId);
        Product product = productService.findProductById(req.getProductId());

        CartItem ispPresent = cartItemService.isCartItemExist(cart, product, req.getStorage(), userId);

        if (ispPresent==null){
           CartItem cartItem = new CartItem();
           cartItem.setProduct(product);
           cartItem.setCart(cart);
           cartItem.setQuantity(req.getQuantity());
           cartItem.setUserId(userId);

           int price = req.getQuantity()*product.getDiscountedPrice();
           cartItem.setPrice(price);
           cartItem.setStorage(req.getStorage());

           CartItem createdCartItem = cartItemService.createCartItem(cartItem);
           cart.getCartItems().add(createdCartItem);
        }
        return "Item add to Cart";
    }

    @Override
    public Cart findUserCard(Long userId) {

        Cart cart = cartRepository.findByUserId(userId);

        int totalPrice = 0;
        int totalDiscountPrice = 0;
        int totalItem = 0;

        for (CartItem cartItem :cart.getCartItems()){
            totalPrice = totalPrice + cartItem.getPrice();
            totalDiscountPrice = totalDiscountPrice + cartItem.getDiscountedPrice();
            totalItem= totalItem + cartItem.getQuantity();
        }

        cart.setTotalDiscountedPrice(totalDiscountPrice);
        cart.setTotalItem(totalItem);
        cart.setTotalPrice(totalPrice);
        cart.setDiscounte(totalPrice-totalDiscountPrice);

        return cartRepository.save(cart);
    }
}
