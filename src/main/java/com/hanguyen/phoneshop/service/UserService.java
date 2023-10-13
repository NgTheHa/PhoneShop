package com.hanguyen.phoneshop.service;

import com.hanguyen.phoneshop.exception.UserException;
import com.hanguyen.phoneshop.model.User;
import jdk.jshell.spi.ExecutionControl;

public interface UserService {

    public User findUserById(Long userId)throws UserException;

    public User findUserProfileByJwt(String jwt) throws UserException;



}
