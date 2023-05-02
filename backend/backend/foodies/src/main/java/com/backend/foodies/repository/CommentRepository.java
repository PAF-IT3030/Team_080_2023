package com.backend.foodies.repository;

import com.backend.foodies.model.Comment;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CommentRepository extends MongoRepository <Comment, Integer> {
}
