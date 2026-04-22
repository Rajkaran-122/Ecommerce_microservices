package com.digitalmetro.shopsy.product.web;

import com.digitalmetro.shopsy.product.model.Product;
import com.digitalmetro.shopsy.product.model.ProductReview;
import com.digitalmetro.shopsy.product.repository.ProductRepository;
import com.digitalmetro.shopsy.product.repository.ProductReviewRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductRepository productRepository;
    private final ProductReviewRepository productReviewRepository;

    public ProductController(ProductRepository productRepository, ProductReviewRepository productReviewRepository) {
        this.productRepository = productRepository;
        this.productReviewRepository = productReviewRepository;
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        return productRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/search")
    public List<Product> searchProducts(@RequestParam String q) {
        return productRepository.searchProducts(q);
    }

    @GetMapping("/category/{categoryId}")
    public List<Product> getProductsByCategory(@PathVariable Long categoryId) {
        return productRepository.findByCategoryId(categoryId);
    }

    @GetMapping("/{id}/reviews")
    public List<ProductReview> getProductReviews(@PathVariable Long id) {
        return productReviewRepository.findByProductId(id);
    }

    @PostMapping("/{id}/reviews")
    public ResponseEntity<ProductReview> addProductReview(@PathVariable Long id, @RequestBody ProductReview review) {
        Optional<Product> productOptional = productRepository.findById(id);
        if (productOptional.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Product product = productOptional.get();
        review.setProduct(product);
        ProductReview savedReview = productReviewRepository.save(review);
        
        // Update product average rating (simplified)
        List<ProductReview> allReviews = productReviewRepository.findByProductId(id);
        double avgRating = allReviews.stream().mapToInt(ProductReview::getRating).average().orElse(0.0);
        product.setRating(avgRating);
        product.setReviewCount(allReviews.size());
        productRepository.save(product);

        return ResponseEntity.status(HttpStatus.CREATED).body(savedReview);
    }
}
