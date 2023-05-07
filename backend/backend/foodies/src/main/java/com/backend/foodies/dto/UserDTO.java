package com.backend.foodies.dto;

import com.backend.foodies.model.User;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class UserDTO {

    private String id;
    private String username;

    public static UserDTO from(User user) {
        return builder()
                .id(user.getId())
                .username(user.getUsername())
                .build();
    }
}
