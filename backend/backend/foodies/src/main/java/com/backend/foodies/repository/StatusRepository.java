package com.backend.foodies.repository;

import com.backend.foodies.model.Status;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StatusRepository extends MongoRepository <Status, Integer> {
}
