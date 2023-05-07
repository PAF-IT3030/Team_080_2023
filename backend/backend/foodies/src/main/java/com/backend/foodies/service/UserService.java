package com.backend.foodies.service;

import com.backend.foodies.model.User;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface UserService {

    public List<User> getUsers();

    public User addUser(User user);

    public User deleteUser(int id );

    public User updateUser(int id , User user);
}