package com.digitalmetro.shopsy.payment.web;

import com.digitalmetro.shopsy.payment.model.Payment;
import com.digitalmetro.shopsy.payment.model.PaymentStatus;
import com.digitalmetro.shopsy.payment.repository.PaymentRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {

    private final PaymentRepository paymentRepository;

    public PaymentController(PaymentRepository paymentRepository) {
        this.paymentRepository = paymentRepository;
    }

    @PostMapping
    public ResponseEntity<Payment> processPayment(@RequestBody Payment payment) {
        // Simulate payment processing
        payment.setStatus(PaymentStatus.COMPLETED);
        Payment savedPayment = paymentRepository.save(payment);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedPayment);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Payment> getPayment(@PathVariable Long id) {
        return paymentRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/user/{userId}")
    public List<Payment> getUserPayments(@PathVariable Long userId) {
        return paymentRepository.findByUserIdOrderByCreatedAtDesc(userId);
    }

    @GetMapping("/order/{orderId}")
    public List<Payment> getOrderPayments(@PathVariable Long orderId) {
        return paymentRepository.findByOrderId(orderId);
    }
}
