package com.paf.socialmedia.controller;

import com.paf.socialmedia.model.Post;
import com.paf.socialmedia.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/posts")
public class PostController {
    @Autowired
    private PostService postService;
    @PostMapping
    public ResponseEntity<?> savePost(@RequestBody Post post){
        return postService.savePost(post);
    }
    @GetMapping
    public ResponseEntity<?> getPosts(){
        return postService.getPosts();
    }
    @GetMapping("/user/{id}")
    public ResponseEntity<?> getPostsByUserId(@PathVariable String id){
        return postService.getPostsByUserId(id);
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> getPostById(@PathVariable String id){
        return postService.getPostById(id);
    }
    @PutMapping("/{id}")
    public ResponseEntity<?> updatePostById(@PathVariable String id, @RequestBody Post post){
        return  postService.updatePostById(id,post);
    }
    @PutMapping("/like/{id}")
    public ResponseEntity<?> likePostById(@PathVariable String id, @RequestBody Post post){
        return  postService.likePostById(id,post);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePostById(@PathVariable String id){
        return postService.deletePostById(id);
    }
}

