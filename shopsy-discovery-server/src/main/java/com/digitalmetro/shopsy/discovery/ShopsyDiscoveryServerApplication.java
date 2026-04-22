package com.digitalmetro.shopsy.discovery;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@EnableEurekaServer
@SpringBootApplication
public class ShopsyDiscoveryServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(ShopsyDiscoveryServerApplication.class, args);
    }
}
