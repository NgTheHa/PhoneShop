package com.hanguyen.phoneshop.controller;

import com.hanguyen.phoneshop.config.JwtProvider;
import com.hanguyen.phoneshop.exception.UserException;
import com.hanguyen.phoneshop.model.Cart;
import com.hanguyen.phoneshop.model.User;
import com.hanguyen.phoneshop.repository.UserRepository;
import com.hanguyen.phoneshop.request.LoginRequest;
import com.hanguyen.phoneshop.response.AuthResponse;
import com.hanguyen.phoneshop.service.CartService;
import com.hanguyen.phoneshop.service.CustomeUserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {
    private UserRepository userRepository;
    private JwtProvider jwtProvider;
    private PasswordEncoder passwordEncoder;
    private CustomeUserServiceImpl customeUserService;
    private AuthenticationManager authenticationManager;
    private CartService cartService;

    public AuthController(UserRepository userRepository,JwtProvider jwtProvider,
                          PasswordEncoder passwordEncoder, CustomeUserServiceImpl customeUserService,
                          CartService cartService, AuthenticationManager authenticationManager) {
        this.userRepository = userRepository;
        this.jwtProvider = jwtProvider;
        this.passwordEncoder = passwordEncoder;
        this.customeUserService = customeUserService;
        this.cartService = cartService;
        this.authenticationManager =authenticationManager;
    }

    @PostMapping("/signup")
    public ResponseEntity<AuthResponse>createUserHandle(@RequestBody User user) throws Exception{

        String email = user.getEmail();
        String password = user.getPassword();
        String firstName = user.getFirstName();
        String lastName = user.getLastName();

        User isEmailExist = userRepository.findByEmail(email);

        if (isEmailExist!=null){
            throw new UserException("Email is already used with another Account");
        }



        User createdUser = new User();
        createdUser.setEmail(email);
        createdUser.setPassword(passwordEncoder.encode(password));
        createdUser.setFirstName(firstName);
        createdUser.setLastName(lastName);

        User savedUser = userRepository.save(createdUser);
        Cart cart = cartService.createCart(savedUser);

        Authentication authentication = new UsernamePasswordAuthenticationToken(savedUser.getEmail(), savedUser.getPassword());
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = jwtProvider.GenerateToken(authentication);


        AuthResponse authResponse = new AuthResponse();
        authResponse.setJwt(token);
        authResponse.setMessage("Signup Succsess...");

        return new ResponseEntity<AuthResponse>(authResponse, HttpStatus.CREATED);
    }


    @PostMapping("/signin")
    public ResponseEntity<AuthResponse> loginUserHandle(@RequestBody LoginRequest loginRequest) {
        String username = loginRequest.getEmail();
        String password = loginRequest.getPassword();

        User user = userRepository.findByEmail(username);
        if (user != null && passwordEncoder.matches(password, user.getPassword())) {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(username, password));
            SecurityContextHolder.getContext().setAuthentication(authentication);

            String token = jwtProvider.GenerateToken(authentication);

            AuthResponse authResponse = new AuthResponse();
            authResponse.setJwt(token);
            authResponse.setMessage("Signin Success...");

            return new ResponseEntity<AuthResponse>(authResponse, HttpStatus.CREATED);
        } else {
            throw new BadCredentialsException("Invalid password");
        }
    }

    private Authentication authenticate(String username, String password) {
        UserDetails userDetails = customeUserService.loadUserByUsername(username);

        if(userDetails==null){
            throw new BadCredentialsException("Invalid username...");
        }
        if (!passwordEncoder.matches(password, userDetails.getPassword())){
            throw new BadCredentialsException("Invalid password...");
        }
        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    }
}
