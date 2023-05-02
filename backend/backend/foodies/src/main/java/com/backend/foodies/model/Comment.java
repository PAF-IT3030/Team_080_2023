package com.backend.foodies.model;

import java.sql.Timestamp;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "comment")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Comment {
    @Id
    private String commentId;
    private String userId;
    private String userName;
    private String postID;
    private Timestamp timeStamp;
    private String comment;

}
