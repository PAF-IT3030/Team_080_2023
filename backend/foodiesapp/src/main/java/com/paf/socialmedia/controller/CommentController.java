package com.paf.socialmedia.controller;

import com.paf.socialmedia.model.Comment;
import com.paf.socialmedia.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/comments")
public class CommentController {
    @Autowired
    private CommentService commentService;

    @GetMapping("/{id}")
    public ResponseEntity<?> getCommentById(@PathVariable String id){
        return commentService.getCommentById(id);
    }
    @GetMapping
    public ResponseEntity<?> getComments(){
        return commentService.getComments();
    }

    @GetMapping("/post/{id}")
    public ResponseEntity<?> getCommentsByPost(@PathVariable String id){
        return commentService.getCommentsByPost(id);
    }
    @PostMapping
    public ResponseEntity<?> saveComment(@RequestBody Comment comment){
        return commentService.saveComment(comment);
    }
    @PutMapping("/{id}")
    public ResponseEntity<?> updateCommentById(@PathVariable String id, @RequestBody Comment comment){
        return  commentService.updateCommentById(id,comment);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCommentById(@PathVariable String id){
        return commentService.deleteCommentById(id);
    }
}

