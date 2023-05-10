package com.paf.socialmedia.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "postshare")
public class PostShare {
    @Id
    private String id;
    private String caption;
    private String userId;
    @DBRef
    private Post post;
    private Date createdAt;
    private Date updatedAt;
}
