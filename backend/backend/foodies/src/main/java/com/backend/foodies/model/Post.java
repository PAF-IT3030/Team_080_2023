package com.backend.foodies.model;

import java.sql.Timestamp;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "post")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Post {
    @Id
    private String postId;
    private String userId;
    private String userName;
    private String postPath;
    private Timestamp timeStamp;
    private int likeCount;
}
