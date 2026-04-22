package com.digitalmetro.shopsy.product.repository;

import com.digitalmetro.shopsy.product.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    List<Category> findByParentIsNull();
}
