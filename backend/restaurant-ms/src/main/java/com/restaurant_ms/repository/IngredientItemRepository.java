package com.restaurant_ms.repository;

import com.restaurant_ms.model.IngredientsItem;
import com.restaurant_ms.model.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IngredientItemRepository extends JpaRepository<IngredientsItem,Long> {

    List<IngredientsItem> findByRestaurantId(Long id);

}
