package com.restaurant_ms.service;

import com.restaurant_ms.model.Cart;
import com.restaurant_ms.model.CartItem;
import com.restaurant_ms.request.AddCartItemRequest;

public interface CartService {

    public CartItem addItemToCart(AddCartItemRequest req, String jwt)throws Exception;

    public CartItem updateCartItemQuantity(Long cartItemId,int quantity)throws Exception;

    public Cart removeItemFromCart(Long cartItemId, String jwt)throws Exception;

    public Long calculateCartTotals(Cart cart)throws Exception;

    public Cart findCartById(Long id)throws Exception;

    public Cart finCartByUserId(Long userId)throws Exception;

    public Cart clearCart(Long userId)throws Exception;

}
