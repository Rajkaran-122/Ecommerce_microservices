package com.digitalmetro.shopsy.payment.repository;

import com.digitalmetro.shopsy.payment.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
    List<Payment> findByUserIdOrderByCreatedAtDesc(Long userId);
    List<Payment> findByOrderId(Long orderId);
}
