package com.digitalmetro.shopsy.user;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class ShopsyUserServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(ShopsyUserServiceApplication.class, args);
    }
}
