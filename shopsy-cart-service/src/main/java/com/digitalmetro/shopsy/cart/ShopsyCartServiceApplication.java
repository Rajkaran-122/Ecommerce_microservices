package com.digitalmetro.shopsy.cart;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class ShopsyCartServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(ShopsyCartServiceApplication.class, args);
    }
}
