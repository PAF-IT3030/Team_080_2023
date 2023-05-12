package com.paf.socialmedia.service;

import com.paf.socialmedia.model.Comment;
import com.paf.socialmedia.model.Post;
import com.paf.socialmedia.model.User;
import com.paf.socialmedia.dto.CommentDTO;
import com.paf.socialmedia.dto.PostDTO;
import com.paf.socialmedia.repository.CommentRepository;
import com.paf.socialmedia.repository.PostRepository;
import com.paf.socialmedia.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class PostService {
    @Autowired
    private PostRepository postRepository;

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private UserRepository userRepository;

    public ResponseEntity<?> getPostById(String id){
        Optional<Post> post =  postRepository.findById(id);
        if(post.isPresent()){
            return new ResponseEntity<>(post.get(), HttpStatus.OK);
        }else{
            return new ResponseEntity<>("No Post Found",HttpStatus.NOT_FOUND);
        }
    }
    public ResponseEntity<?> getPosts(){
        List<Post> posts = postRepository.findAll();

        List<PostDTO> postDTOList = new ArrayList<>();

        for (Post post:posts) {
            PostDTO postDTO = new PostDTO();
            postDTO.setId(post.getId());
            postDTO.setCaption(post.getCaption());
            postDTO.setImgLink(post.getImgLink());
            postDTO.setUpdatedAt(post.getUpdatedAt());
            postDTO.setCreatedAt(post.getCreatedAt());
            postDTO.setLikedby(post.getLikedby());
            postDTO.setUserId(post.getUserId());

            Optional<User> user =  userRepository.findById(post.getUserId());
            if(user.isPresent()) {
                postDTO.setUsername(user.get().getUsername());
                postDTO.setProfileImage(user.get().getProfileImage());
            }

            List<Comment> comments = commentRepository.findByPostId(post.getId());
            if(comments.size() > 0){
                List<CommentDTO> commentDTOList = new ArrayList<>();

                for(Comment comment: comments){
                    CommentDTO commentDTO = new CommentDTO();
                    commentDTO.setId(comment.getId());
                    commentDTO.setText(comment.getText());
                    commentDTO.setPostId(comment.getPostId());
                    commentDTO.setCreatedAt(comment.getCreatedAt());
                    commentDTO.setUpdatedAt(comment.getUpdatedAt());
                    commentDTO.setUserId(comment.getUserId());
                    Optional<User> commentedUser =  userRepository.findById(comment.getUserId());
                    if(commentedUser.isPresent()) {
                        commentDTO.setUsername(commentedUser.get().getUsername());
                        commentDTO.setProfileImage(commentedUser.get().getProfileImage());
                    }
                    if(commentedUser.isPresent()) {
                        commentDTOList.add(commentDTO);
                    }

                }

                postDTO.setComments(commentDTOList);
            }
            if(user.isPresent()) {
                postDTOList.add(postDTO);
            }

        }

        return new ResponseEntity<List<PostDTO>>(postDTOList, HttpStatus.OK);
    }

    public ResponseEntity<?> getPostsByUserId(String userId) {
        List<Post> posts = postRepository.findByUserId(userId);
        List<PostDTO> postDTOList = new ArrayList<>();

        for (Post post:posts) {
            PostDTO postDTO = new PostDTO();
            postDTO.setId(post.getId());
            postDTO.setCaption(post.getCaption());
            postDTO.setImgLink(post.getImgLink());
            postDTO.setUpdatedAt(post.getUpdatedAt());
            postDTO.setCreatedAt(post.getCreatedAt());
            postDTO.setLikedby(post.getLikedby());
            postDTO.setUserId(post.getUserId());

            Optional<User> user =  userRepository.findById(post.getUserId());
            if(user.isPresent()) {
                postDTO.setUsername(user.get().getUsername());
                postDTO.setProfileImage(user.get().getProfileImage());
            }

            List<Comment> comments = commentRepository.findByPostId(post.getId());
            if(comments.size() > 0){
                List<CommentDTO> commentDTOList = new ArrayList<>();

                for(Comment comment: comments){
                    CommentDTO commentDTO = new CommentDTO();
                    commentDTO.setId(comment.getId());
                    commentDTO.setText(comment.getText());
                    commentDTO.setPostId(comment.getPostId());
                    commentDTO.setCreatedAt(comment.getCreatedAt());
                    commentDTO.setUpdatedAt(comment.getUpdatedAt());
                    commentDTO.setUserId(comment.getUserId());
                    Optional<User> commentedUser =  userRepository.findById(comment.getUserId());
                    if(commentedUser.isPresent()) {
                        commentDTO.setUsername(commentedUser.get().getUsername());
                        commentDTO.setProfileImage(commentedUser.get().getProfileImage());
                    }
                    if(commentedUser.isPresent()) {
                        commentDTOList.add(commentDTO);
                    }

                }

                postDTO.setComments(commentDTOList);
            }
            if(user.isPresent()) {
                postDTOList.add(postDTO);
            }

        }

        return new ResponseEntity<List<PostDTO>>(postDTOList, HttpStatus.OK);
    }
    public ResponseEntity<?> savePost(Post postShare){
        try{
            postShare.setCreatedAt(new Date(System.currentTimeMillis()));
            postShare.setUpdatedAt(new Date(System.currentTimeMillis()));
            postRepository.save(postShare);
            return new ResponseEntity<Post>(postShare, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<?> updatePostById(String id,Post post){
        Optional<Post> existingPost =  postRepository.findById(id);
        if(existingPost.isPresent()){
            Post updatePost = existingPost.get();
            if(post.getCaption() != null) {
                updatePost.setCaption(post.getCaption());
            }
            if(post.getImgLink() != null) {
                updatePost.setImgLink(post.getImgLink());
            }
            updatePost.setUpdatedAt(new Date(System.currentTimeMillis()));
            return new ResponseEntity<>(postRepository.save(updatePost), HttpStatus.OK);
        }else{
            return new ResponseEntity<>("Post Update Error",HttpStatus.NOT_FOUND);
        }
    }
    public ResponseEntity<?> likePostById(String id,Post post){
        Optional<Post> existingPost =  postRepository.findById(id);
        if(existingPost.isPresent()){
            Post updatePost = existingPost.get();
            if(post.getLikedby() != null) {
                updatePost.setLikedby(post.getLikedby());
            }
            return new ResponseEntity<>(postRepository.save(updatePost), HttpStatus.OK);
        }else{
            return new ResponseEntity<>("Post Update Error",HttpStatus.NOT_FOUND);
        }
    }
    public ResponseEntity<?> deletePostById(String id){
        try{
            postRepository.deleteById(id);
            return new ResponseEntity<>("Success deleted with " + id,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
        }
    }
}
