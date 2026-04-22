package com.digitalmetro.shopsy.product;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class ShopsyProductServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(ShopsyProductServiceApplication.class, args);
    }
}
