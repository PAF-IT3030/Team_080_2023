package com.paf.socialmedia.controller;

import com.paf.socialmedia.model.User;
import com.paf.socialmedia.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("/{id}")
    @PreAuthorize("#user.id == #id")
    public ResponseEntity user(@AuthenticationPrincipal User user, @PathVariable String id) {
        return ResponseEntity.ok(userRepository.findById(id).orElseThrow());
    }

    @GetMapping
    public ResponseEntity getAllUsers() {
        return ResponseEntity.ok(userRepository.findAll());
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateUserById(@PathVariable String id,@RequestBody User user){
        Optional<User> existingUser =  userRepository.findById(id);
        if(existingUser.isPresent()){
            User updateUser = existingUser.get();
            if(user.getContactNumber() != null) {
                updateUser.setContactNumber(user.getContactNumber());
            }
            if(user.getProfileImage() != null) {
                updateUser.setProfileImage(user.getProfileImage());
            }
            if(user.getEmail() != null) {
                updateUser.setEmail(user.getEmail());
            }
            if(user.getCountry() != null) {
                updateUser.setCountry(user.getCountry());
            }
            return new ResponseEntity<>(userRepository.save(updateUser), HttpStatus.OK);
        }else{
            return new ResponseEntity<>("Post Update Error",HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/delete/{id}")
    public ResponseEntity<?> deleteUserById(@PathVariable String id,@RequestBody User user){
        Optional<User> existingUser =  userRepository.findById(id);
        if(existingUser.isPresent()){
            User updateUser = existingUser.get();
            updateUser.setDeleted(true);
            return new ResponseEntity<>(userRepository.save(updateUser), HttpStatus.OK);
        }else{
            return new ResponseEntity<>("Post Update Error",HttpStatus.NOT_FOUND);
        }
    }
    
    @PutMapping("/follow/{userId}")
    public ResponseEntity<?> likePostById(@PathVariable String userId,@RequestBody User user){
        Optional<User> existingUser =  userRepository.findById(userId);
        if(existingUser.isPresent()){
            User updateUser = existingUser.get();
            if(user.getFollowedBy() != null) {
                updateUser.setFollowedBy(user.getFollowedBy());
            }
            return new ResponseEntity<>(userRepository.save(updateUser), HttpStatus.OK);
        }else{
            return new ResponseEntity<>("User Update Error",HttpStatus.NOT_FOUND);
        }
    }
}
