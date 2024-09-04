package com.restaurant_ms.repository;

import com.restaurant_ms.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address,Long> {
}
