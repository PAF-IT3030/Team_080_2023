package com.backend.foodies.repository;

import com.backend.foodies.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User,Integer> {

}
