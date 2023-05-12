package com.paf.socialmedia.service;

import com.paf.socialmedia.model.Notification;
import com.paf.socialmedia.repository.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class NotificationService {
    @Autowired
    private NotificationRepository notificationRepository;

    public ResponseEntity<?> getNotificationById(String id){
        Optional<Notification> notification =  notificationRepository.findById(id);
        if(notification.isPresent()){
            return new ResponseEntity<>(notification.get(), HttpStatus.OK);
        }else{
            return new ResponseEntity<>("No Notification Found",HttpStatus.NOT_FOUND);
        }
    }
    public ResponseEntity<?> getNotifications(){
        List<Notification> notifications = notificationRepository.findAll();
        return new ResponseEntity<List<Notification>>(notifications, HttpStatus.OK);
    }
    public ResponseEntity<?> getUnreadNotificationsByUserId(String userId) {
        List<Notification> notifications = notificationRepository.findByUserIdAndIsReadFalse(userId);
        return new ResponseEntity<List<Notification>>(notifications, HttpStatus.OK);
    }
    public ResponseEntity<?> saveNotification(Notification notification){
        try{
            notification.setIsRead(false);
            notification.setCreatedAt(new Date(System.currentTimeMillis()));
            notification.setUpdatedAt(new Date(System.currentTimeMillis()));
            notificationRepository.save(notification);
            return new ResponseEntity<Notification>(notification, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<?> updateNotificationById(String id,Notification notification){

        Optional<Notification> existingNotification =  notificationRepository.findById(id);
        if(existingNotification.isPresent()){
            Notification updateNotification = existingNotification.get();
            if(!notification.getMessage().isEmpty()) {
                updateNotification.setMessage(notification.getMessage());
            }

            if(notification.getIsRead()) {
                updateNotification.setIsRead(notification.getIsRead());
            }

            updateNotification.setUpdatedAt(new Date(System.currentTimeMillis()));
            return new ResponseEntity<>(notificationRepository.save(updateNotification), HttpStatus.OK);
        }else{
            return new ResponseEntity<>("Comment Update Error",HttpStatus.NOT_FOUND);
        }

    }
    public ResponseEntity<?> deleteNotificationById(String id){
        try{
            notificationRepository.deleteById(id);
            return new ResponseEntity<>("Success deleted with " + id,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
        }
    }
}


