package com.backend.foodies.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Document(collection = "post")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Post {
    @Id
    private String id;
    private String userId;
    private List<String> imgLink;
    private String caption;
    private List<String> likedby;
    private Date createdAt;
    private Date updatedAt;
}
