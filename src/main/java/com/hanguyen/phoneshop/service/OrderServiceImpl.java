//package com.hanguyen.phoneshop.service;
//
//import com.hanguyen.phoneshop.exception.OrderException;
//import com.hanguyen.phoneshop.model.Address;
//import com.hanguyen.phoneshop.model.CartItem;
//import com.hanguyen.phoneshop.model.Order;
//import com.hanguyen.phoneshop.model.User;
//import com.hanguyen.phoneshop.repository.CartRepository;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class OrderServiceImpl implements OrderService{
//
//    private CartRepository cartRepository;
//    private CartItemService cartItemService;
//    private ProductService productService;
//
//    public OrderServiceImpl(CartRepository cartRepository, CartItemService cartItemService, ProductService productService) {
//        this.cartRepository = cartRepository;
//        this.cartItemService = cartItemService;
//        this.productService = productService;
//    }
//
//    @Override
//    public Order createOrder(User user, Address shippingAddress) {
//        return null;
//    }
//
//    @Override
//    public Order findOrderById(Long orderId) throws OrderException {
//        return null;
//    }
//
//    @Override
//    public List<Order> usersOrderHistory(Long userId) {
//        return null;
//    }
//
//    @Override
//    public Order placedOrder(Long orderId) throws OrderException {
//        return null;
//    }
//
//    @Override
//    public Order confirmedOrder(Long orderId) throws OrderException {
//        return null;
//    }
//
//    @Override
//    public Order shippidOrder(Long orderId) throws OrderException {
//        return null;
//    }
//
//    @Override
//    public Order deliveredOrder(Long orderId) throws OrderException {
//        return null;
//    }
//
//    @Override
//    public Order cancledOrder(Long orderId) throws OrderException {
//        return null;
//    }
//
//    @Override
//    public List<Order> getAllOrders() {
//        return null;
//    }
//
//    @Override
//    public void deleteOrder(Long orderId) throws OrderException {
//
//    }
//}
