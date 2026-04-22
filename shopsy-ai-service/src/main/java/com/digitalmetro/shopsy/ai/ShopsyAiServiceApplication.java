package com.digitalmetro.shopsy.ai;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class ShopsyAiServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(ShopsyAiServiceApplication.class, args);
    }
}
