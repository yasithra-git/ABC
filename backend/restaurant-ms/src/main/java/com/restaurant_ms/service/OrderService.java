package com.restaurant_ms.service;

import com.restaurant_ms.model.Order;
import com.restaurant_ms.model.User;
import com.restaurant_ms.request.OrderRequest;

import java.util.List;

public interface OrderService {

    public Order createOrder(OrderRequest order, User user) throws Exception;

    public Order updateOrder(Long orderId, String orderStates) throws Exception;

    public void cancelOrder(Long orderId)throws Exception;

    public List<Order> getUsersOrder(Long userId) throws Exception;

    public List<Order> getRestaurantsOrder(Long restaurantId, String orderStatus)throws Exception;

    public Order findOrderById (Long orderId) throws Exception;
}
