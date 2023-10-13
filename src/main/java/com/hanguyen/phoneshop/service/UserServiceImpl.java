package com.hanguyen.phoneshop.service;

import com.hanguyen.phoneshop.config.JwtProvider;
import com.hanguyen.phoneshop.exception.UserException;
import com.hanguyen.phoneshop.model.User;
import com.hanguyen.phoneshop.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;
    private final JwtProvider jwtProvider;

    public UserServiceImpl(UserRepository userRepository, JwtProvider jwtProvider) {
        this.userRepository = userRepository;
        this.jwtProvider = jwtProvider;
    }

    @Override
    public User findUserById(Long userId) throws UserException {

        Optional<User>user = userRepository.findById(userId);
        if (user.isPresent()){
            return user.get();
        }

        throw new UserException("User not found with id - "+userId);
    }

    @Override
    public User findUserProfileByJwt(String jwt) throws UserException {

        String email = jwtProvider.getEmailFromToken(jwt);

        User user = userRepository.findByEmail(email);

        if (user == null){
            throw new UserException("User not found with email - "+ email);
        }
        return user;
    }
}
