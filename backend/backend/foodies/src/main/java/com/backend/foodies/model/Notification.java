package com.backend.foodies.model;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "notifications")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Notification {
    @Id
    private String id;
    private String message;
    private Boolean isRead;
    private String userId;
    private Date createdAt;
    private Date updatedAt;
}
