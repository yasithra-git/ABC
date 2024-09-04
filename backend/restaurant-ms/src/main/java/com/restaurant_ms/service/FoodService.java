package com.restaurant_ms.service;

import com.restaurant_ms.model.Category;
import com.restaurant_ms.model.Food;
import com.restaurant_ms.model.Restaurant;
import com.restaurant_ms.request.CreateFoodRequest;

import java.util.List;

public interface FoodService {

    public Food createFood(CreateFoodRequest req, Category category, Restaurant restaurant);

    void deleteFood(Long foodId) throws Exception;

    public List<Food>getRestaurantsFood(Long restaurantId,
                                       boolean isVegetarian,
                                       boolean isNonveg,
                                       boolean isSeasonal,
                                       String foodCategory
    );

    public List<Food> searchFood(String keyword);
    public Food findFoodById(Long foodId)throws Exception;

    public Food updateAvailabilityStates(Long foodId)throws Exception;
}
