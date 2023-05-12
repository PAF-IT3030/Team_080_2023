package com.paf.socialmedia.dto;

import lombok.Data;

import java.util.Date;
@Data
public class SharedPostDTO {
    private String id;
    private String caption;
    private String userId;
    private String username;
    private String profileImage;
    private PostDTO post;
    private Date createdAt;
    private Date updatedAt;
}
