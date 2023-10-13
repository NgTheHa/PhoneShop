package com.hanguyen.phoneshop.repository;

import com.hanguyen.phoneshop.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address, Long> {
}
