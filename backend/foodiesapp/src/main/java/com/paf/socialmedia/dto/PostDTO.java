package com.paf.socialmedia.dto;

import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class PostDTO {
    private String id;
    private String userId;
    private String username;
    private String profileImage;
    private List<String> imgLink;
    private String caption;
    private Date createdAt;
    private Date updatedAt;
    private List<String> likedby;
    private List<CommentDTO> comments;
}
