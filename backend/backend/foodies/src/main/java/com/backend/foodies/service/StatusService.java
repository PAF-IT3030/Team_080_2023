package com.backend.foodies.service;

import com.backend.foodies.model.Post;
import com.backend.foodies.model.Status;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface StatusService {
    public List<Status> getStatus();

    public Status addStatus(Status status);

    public Status deleteStatus(int id );
}
