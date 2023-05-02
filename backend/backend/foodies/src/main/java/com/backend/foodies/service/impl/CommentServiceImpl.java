package com.backend.foodies.service.impl;

import com.backend.foodies.model.Comment;
import com.backend.foodies.repository.CommentRepository;
import com.backend.foodies.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CommentServiceImpl implements CommentService {
    @Autowired
    private CommentRepository commentRepo;

    @Override
    public List<Comment> getComments() {
        return commentRepo.findAll();
    }

    @Override
    public Comment addComment(Comment comment) {
        return commentRepo.save(comment);
    }

    @Override
    public Comment deleteComment(int id) {
        Comment comment = commentRepo.findById(id).get();
        commentRepo.delete(comment);
        return comment;
    }

    @Override
    public Comment updateComment(int id, Comment comment) {
        Comment commentvar = commentRepo.findById(id).get();
        commentvar.setComment(comment.getComment());
        commentRepo.save( commentvar);
        return  commentvar;
    }
}
