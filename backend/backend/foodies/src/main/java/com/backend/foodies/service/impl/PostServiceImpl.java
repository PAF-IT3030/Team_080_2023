package com.backend.foodies.service.impl;

import com.backend.foodies.model.Post;
import com.backend.foodies.repository.PostRepository;
import com.backend.foodies.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class PostServiceImpl implements PostService{
    @Autowired
    private PostRepository postRepo;

    @Override
    public List<Post> getPosts() {
        return postRepo.findAll();
    }

    @Override
    public Post addPost (Post post) {
        return postRepo.save(post);
    }

    @Override
    public Post deletePost(int id) {
        Post post = postRepo.findById(id).get();
        postRepo.delete(post);
        return post;
    }

}
