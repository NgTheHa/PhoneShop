package com.hanguyen.phoneshop.controller;

import com.hanguyen.phoneshop.exception.OrderException;
import com.hanguyen.phoneshop.model.Order;
import com.hanguyen.phoneshop.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/orders")
public class AdminController {
    private OrderService orderService;
    @Autowired
    public AdminController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping("/")
    public ResponseEntity<List<Order>> getAllOrderHandler(){
        List<Order> orders = orderService.getAllOrders();
        return new ResponseEntity<>(orders, HttpStatus.ACCEPTED);
    }

    @PutMapping("/{orderId}/comfirmed")
    public ResponseEntity<Order> ComfirmedOrderHandler(@PathVariable Long orderId,
                                                       @RequestHeader("Authorization") String jwt) throws OrderException{
        Order order = orderService.confirmedOrder(orderId);
        return new ResponseEntity<>(order, HttpStatus.OK);
    }

    @PutMapping("/{orderId}/ship")
    public ResponseEntity<Order> ShippedOrderHandler(@PathVariable Long orderId,
                                                       @RequestHeader("Authorization") String jwt) throws OrderException{
        Order order = orderService.shippidOrder(orderId);
        return new ResponseEntity<>(order, HttpStatus.OK);
    }

    @PutMapping("/{orderId}/deliver")
    public ResponseEntity<Order> DeliveredOrderHandler(@PathVariable Long orderId,
                                                     @RequestHeader("Authorization") String jwt) throws OrderException{
        Order order = orderService.deliveredOrder(orderId);
        return new ResponseEntity<>(order, HttpStatus.OK);
    }

    @PutMapping("/{orderId}/cancel")
    public ResponseEntity<Order> CancelOrderHandler(@PathVariable Long orderId,
                                                       @RequestHeader("Authorization") String jwt) throws OrderException{
        Order order = orderService.cancledOrder(orderId);
        return new ResponseEntity<>(order, HttpStatus.OK);
    }

//    @DeleteMapping("/{orderId}/delete")
//    public ResponseEntity<Order> DeleteOrderHandler(@PathVariable Long orderId,
//                                                       @RequestHeader("Authorization") String jwt) throws OrderException{
//        orderService.deleteOrder(orderId);
//
//        return  new ResponseEntity<>(order, HttpStatus.OK);
//    }

}
