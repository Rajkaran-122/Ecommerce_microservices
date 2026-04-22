package com.digitalmetro.shopsy.payment;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class ShopsyPaymentServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(ShopsyPaymentServiceApplication.class, args);
    }
}
