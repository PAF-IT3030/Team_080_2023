package com.backend.foodies.repository;

import com.backend.foodies.model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostRepository extends MongoRepository <Post, Integer> {
}