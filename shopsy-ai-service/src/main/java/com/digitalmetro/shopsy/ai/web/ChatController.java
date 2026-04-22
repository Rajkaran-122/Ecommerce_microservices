package com.digitalmetro.shopsy.ai.web;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class ChatController {

    private final ChatClient chatClient;

    public ChatController(ChatClient.Builder chatClientBuilder) {
        this.chatClient = chatClientBuilder
            .defaultSystem("You are a helpful shopping assistant for Shopsy, an e-commerce platform. You help users find products, track orders, and provide styling advice.")
            .build();
    }

    @GetMapping("/api/chat")
    public Map<String, String> chat(@RequestParam(value = "message", defaultValue = "Hello!") String message) {
        String response = chatClient.prompt()
            .user(message)
            .call()
            .content();
        return Map.of("response", response);
    }
}
