package com.backend.foodies.service;

import com.backend.foodies.model.Comment;
import com.backend.foodies.model.User;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface CommentService {

    public List<Comment> getComments();

    public Comment addComment(Comment comment);

    public Comment deleteComment(int id);

    public Comment updateComment(int id, Comment comment);
}
