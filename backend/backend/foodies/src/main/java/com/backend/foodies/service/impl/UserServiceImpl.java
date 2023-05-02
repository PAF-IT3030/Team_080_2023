package com.backend.foodies.service.impl;

import com.backend.foodies.model.User;
import com.backend.foodies.repository.UserRepository;
import com.backend.foodies.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepo;
    @Override
    public List<User> getUsers() {
        return userRepo.findAll();
    }

    @Override
    public User addUser(User user) {
        return userRepo.save(user);
    }

    @Override
    public User deleteUser(int id) {
       User user = userRepo.findById(id).get();
        userRepo.delete(user);
        return user;
    }

    @Override
    public User updateUser(int id, User user) {
        User uservar = userRepo.findById(id).get();
        uservar.setName(user.getName());
        uservar.setProfileImage(user.getProfileImage());
        userRepo.save( uservar);
        return  uservar;
    }
}