package com.backend.foodies.repository;

import com.backend.foodies.model.PostShare;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface PostShareRepository extends MongoRepository<PostShare, String> {
    List<PostShare> findByUserId(String userId);
}