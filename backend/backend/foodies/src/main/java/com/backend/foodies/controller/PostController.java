package com.backend.foodies.controller;

import com.backend.foodies.model.Post;
import com.backend.foodies.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/post")
public class PostController {
    @Autowired
    private PostService postService;

    @GetMapping("/all")
    public List<Post> getposts() {return postService.getPosts();}

    @PostMapping("/add")
    public Post insert(@RequestBody Post post)  {return postService.addPost(post);}

    /*@PutMapping("/update/{id}")
    public Post update(@PathVariable int id, @RequestBody Post post) {
        return postService.updatePost(id, post);
    }*/

    @DeleteMapping("/delete/{id}")
    public Post delete(@PathVariable int id) {

        return postService.deletePost(id);
    }
}
