package com.backend.foodies.service;

import com.backend.foodies.model.Post;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface PostService {

    public List<Post> getPosts();

    public Post addPost(Post post);

    public Post deletePost(int id );

}
