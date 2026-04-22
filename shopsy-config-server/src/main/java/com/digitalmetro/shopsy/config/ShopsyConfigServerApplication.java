package com.digitalmetro.shopsy.config;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;

@EnableConfigServer
@SpringBootApplication
public class ShopsyConfigServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(ShopsyConfigServerApplication.class, args);
    }
}
