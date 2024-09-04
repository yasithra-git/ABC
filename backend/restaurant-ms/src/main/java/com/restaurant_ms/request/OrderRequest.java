package com.restaurant_ms.request;

import com.restaurant_ms.model.Address;
import lombok.Data;

@Data
public class OrderRequest {

    private Long restaurantId;
    private Address deliveryAddress;
}
