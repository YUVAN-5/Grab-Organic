package com.organic.backend.controller;
import com.organic.backend.exception.UserNotFoundException;
import com.organic.backend.model.User;
 import com.organic.backend.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepo userRepo;

    @PostMapping("/user")//Register
    public User newUser(@RequestBody User newUser) {
        return userRepo.save(newUser);
    }

    @GetMapping("/users")//login
    public List<User> getAllUsers() {
        return  userRepo.findAll();
    }



    @PutMapping("/user/{id}")
    public User updateUser(@RequestBody User newUser, @PathVariable Long id) {
        return userRepo.findById(id)
                .map(user -> {
                    user.setUsername(newUser.getUsername());
                    user.setEmail(newUser.getEmail());
                    user.setPassword(newUser.getPassword()); // assuming you also want to update the password
                    return userRepo.save(user);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @DeleteMapping("/user/{id}")
    public String deleteUser(@PathVariable Long id) {
        if (!userRepo.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        userRepo.deleteById(id);
        return "User with id " + id + " has been deleted successfully.";
    }
}