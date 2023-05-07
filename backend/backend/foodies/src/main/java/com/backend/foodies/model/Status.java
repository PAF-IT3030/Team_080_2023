package com.backend.foodies.model;

import java.sql.Timestamp;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "status")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Status {
    @Id
    private String statusId;
    private String userId;
    private String userName;
    private String statusPath;
    private Timestamp timeStamp;
    private int likeCount;
}
