package com.paf.socialmedia.controller;

import com.paf.socialmedia.model.PostShare;
import com.paf.socialmedia.service.PostShareService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/postshare")
public class PostShareController {
    @Autowired
    private PostShareService postShareService;

    @PostMapping
    public ResponseEntity<?> savePost(@RequestBody PostShare postShare){
        return postShareService.savePost(postShare);
    }
    @GetMapping
    public ResponseEntity<?> getPosts(){
        return postShareService.getPosts();
    }
    @GetMapping("/user/{id}")
    public ResponseEntity<?> getsharedPostsByUserId(@PathVariable String id){
        return postShareService.getsharedPostsByUserId(id);
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> getPostById(@PathVariable String id){
        return postShareService.getPostById(id);
    }
    @PutMapping("/{id}")
    public ResponseEntity<?> updatePostById(@PathVariable String id, @RequestBody PostShare postShare){
        return  postShareService.updatePostById(id,postShare);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePostById(@PathVariable String id){
        return postShareService.deletePostById(id);
    }
}

