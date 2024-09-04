package com.restaurant_ms.service;

import com.restaurant_ms.model.User;
import jdk.jshell.spi.ExecutionControl;

public interface UserService {
    public User findUserByJwtToken(String jwt) throws Exception;

    public User findUserByEmail(String email) throws Exception;
}
