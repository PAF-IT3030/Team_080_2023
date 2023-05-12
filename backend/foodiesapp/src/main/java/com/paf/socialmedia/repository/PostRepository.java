package com.paf.socialmedia.repository;

import com.paf.socialmedia.model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends MongoRepository<Post,String> {
    List<Post> findByUserId(String userId);
}
