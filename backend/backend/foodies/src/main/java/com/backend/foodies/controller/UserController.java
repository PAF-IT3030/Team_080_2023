package com.backend.foodies.controller;

import com.backend.foodies.model.User;
import com.backend.foodies.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/all")
    public List<User> getusers() {
        return userService.getUsers();
    }

    @PostMapping("/add")
    public User insert(@RequestBody User user) {
        return userService.addUser(user);
    }

    @PutMapping("/update/{id}")
    public User update(@PathVariable int id, @RequestBody User user) {
        return userService.updateUser(id, user);
    }

    @DeleteMapping("/delete/{id}")
    public User delete(@PathVariable int id) {

        return userService.deleteUser(id);
    }

}


