package com.restaurant_ms.service;

import com.restaurant_ms.model.*;
import com.restaurant_ms.repository.AddressRepository;
import com.restaurant_ms.repository.OrderItemRepository;
import com.restaurant_ms.repository.OrderRepository;
import com.restaurant_ms.repository.UserRepository;
import com.restaurant_ms.request.OrderRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class OrderServiceImpl implements OrderService{

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderItemRepository orderItemRepository;

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RestaurantService restaurantService;

    @Autowired
    private CartService cartService;

    @Override
    public Order createOrder(OrderRequest order, User user) throws Exception {

        Address shippingAddress=order.getDeliveryAddress();
        Address savedAddress=addressRepository.save(shippingAddress);

        if (!user.getAddresses().contains(savedAddress)){
            user.getAddresses().add(savedAddress);
            userRepository.save(user);
        }

        Restaurant restaurant=restaurantService.findRestaurantById(order.getRestaurantId());

        Order createOrder=new Order();
        createOrder.setCustomer(user);
        createOrder.setCreatedAt(new Date());
        createOrder.setOrderStates("PENDING");
        createOrder.setDeleveryAddress(savedAddress);
        createOrder.setRestaurant(restaurant);

        Cart cart=cartService.finCartByUserId(user.getId());
        List<OrderItem> orderItems=new ArrayList<>();

        for (CartItem cartItem : cart.getItems()){
            OrderItem orderItem = new OrderItem();
            orderItem.setFood(cartItem.getFood());
            orderItem.setIngredients(cartItem.getIngredients());
            orderItem.setQuantity(cartItem.getQuantity());
            orderItem.setTotalPrice(cartItem.getTotalPrice());

            OrderItem savedOrderItem=orderItemRepository.save(orderItem);
            orderItems.add(savedOrderItem);
        }
        Long totalPrice=cartService.calculateCartTotals(cart);
        createOrder.setItems(orderItems);
        createOrder.setTotalPrice(totalPrice);

        Order savedOrder=orderRepository.save(createOrder);
        restaurant.getOrders().add(savedOrder);
        return createOrder;
    }

    @Override
    public Order updateOrder(Long orderId, String orderStates) throws Exception {
        Order order=findOrderById(orderId);
        if (orderStates.equals("OUT_FOR_DELIVERY")
                || orderStates.equals("DELIVERED")
                || orderStates.equals("COMPLETED")
                || orderStates.equals("PENDING")
        ){
            order.setOrderStates(orderStates);
            return orderRepository.save(order);
        }
        throw new Exception("Please select a valid order status");
    }

    @Override
    public void cancelOrder(Long orderId) throws Exception {

        Order order = findOrderById(orderId);
        orderRepository.deleteById(orderId);
    }

    @Override
    public List<Order> getUsersOrder(Long userId) throws Exception {
        return orderRepository.findByCustomerId(userId);
    }

    @Override
    public List<Order> getRestaurantsOrder(Long restaurantId, String orderStatus) throws Exception {
        List<Order> orders= orderRepository.findByRestaurantId(restaurantId);
        if (orderStatus !=null){
            orders = orders.stream().filter(order ->
                    order.getOrderStates().equals(orderStatus)).collect(Collectors.toList());
        }
        return orders;
    }

    @Override
    public Order findOrderById(Long orderId) throws Exception {
        Optional<Order> optionalOrder=orderRepository.findById(orderId);
        if (optionalOrder.isEmpty()){
            throw new Exception("order not found");
        }
        return optionalOrder.get();
    }
}
