package com.backend.foodies.repository;

import java.util.List;
import org.springframework.stereotype.Repository;
import com.backend.foodies.model.Notification;
import org.springframework.data.mongodb.repository.MongoRepository;

@Repository
public interface NotificationRepository extends MongoRepository<Notification, String> {
    List<Notification> findByUserIdAndIsReadFalse(String userId);

}