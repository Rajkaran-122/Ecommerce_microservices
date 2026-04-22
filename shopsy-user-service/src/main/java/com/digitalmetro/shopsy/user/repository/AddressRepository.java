package com.digitalmetro.shopsy.user.repository;

import com.digitalmetro.shopsy.user.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface AddressRepository extends JpaRepository<Address, Long> {
    List<Address> findByUserId(Long userId);
}
