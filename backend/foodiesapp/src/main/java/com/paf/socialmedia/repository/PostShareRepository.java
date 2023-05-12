package com.paf.socialmedia.repository;

import com.paf.socialmedia.model.PostShare;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface PostShareRepository extends MongoRepository<PostShare, String> {
    List<PostShare> findByUserId(String userId);
}
