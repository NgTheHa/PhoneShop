package com.hanguyen.phoneshop.repository;

import com.hanguyen.phoneshop.model.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
}
