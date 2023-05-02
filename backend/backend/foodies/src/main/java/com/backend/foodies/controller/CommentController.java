package com.backend.foodies.controller;

import com.backend.foodies.model.Comment;
import com.backend.foodies.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comment")
public class CommentController {
    @Autowired
    private CommentService commentService;

    @GetMapping("/all")
    public List<Comment> getcomments() {return commentService.getComments();}

    @PostMapping("/add")
    public Comment insert(@RequestBody Comment comment)  {return commentService.addComment(comment);}

    @PutMapping("/update/{id}")
    public Comment update(@PathVariable int id, @RequestBody Comment comment) {return commentService.updateComment(id, comment);}

    @DeleteMapping("/delete/{id}")
    public Comment delete(@PathVariable int id) { return commentService.deleteComment(id);}

}
