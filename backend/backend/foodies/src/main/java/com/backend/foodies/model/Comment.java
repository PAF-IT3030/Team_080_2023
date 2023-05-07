package com.backend.foodies.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Date;

@Document(collection = "comment")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Comment {
    @Id
    private String id;
    private String text;
    private String userId;
    private String postId;
    private Date createdAt;
    private Date updatedAt;

}
