package com.paf.socialmedia.controller;

import com.paf.socialmedia.model.Notification;
import com.paf.socialmedia.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/notifications")
public class NotificationController {
    @Autowired
    private NotificationService notificationService;

    @GetMapping("/{id}")
    public ResponseEntity<?> getNotificationById(@PathVariable String id){
        return notificationService.getNotificationById(id);
    }
    @GetMapping
    public ResponseEntity<?> getNotifications(){
        return notificationService.getNotifications();
    }
    @GetMapping("/user/{id}")
    public ResponseEntity<?> getUnreadNotificationsByUserId(@PathVariable String id){
        return notificationService.getUnreadNotificationsByUserId(id);
    }
    @PostMapping
    public ResponseEntity<?> saveNotification(@RequestBody Notification notification){
        return notificationService.saveNotification(notification);
    }
    @PutMapping("/{id}")
    public ResponseEntity<?> updateNotificationById(@PathVariable String id, @RequestBody Notification notification){
        return  notificationService.updateNotificationById(id,notification);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteNotificationById(@PathVariable String id){
        return notificationService.deleteNotificationById(id);
    }
}

