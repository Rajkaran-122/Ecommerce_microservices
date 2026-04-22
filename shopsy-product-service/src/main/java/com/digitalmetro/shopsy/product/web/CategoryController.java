package com.digitalmetro.shopsy.product.web;

import com.digitalmetro.shopsy.product.model.Category;
import com.digitalmetro.shopsy.product.repository.CategoryRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {

    private final CategoryRepository categoryRepository;

    public CategoryController(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @GetMapping
    public List<Category> getAllCategories() {
        // Return top level categories (they contain subCategories inside)
        return categoryRepository.findByParentIsNull();
    }
}
