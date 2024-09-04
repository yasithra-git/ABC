package com.restaurant_ms.repository;

import com.restaurant_ms.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    public List<Category> findByRestaurantId(Long id);
}
