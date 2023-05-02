package com.backend.foodies.service.impl;

import com.backend.foodies.model.Status;
import com.backend.foodies.repository.StatusRepository;
import com.backend.foodies.service.StatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class StatusServiceImpl  implements StatusService{
    @Autowired
    private StatusRepository statusRepo;

    @Override
    public List<Status> getStatus() {
        return statusRepo.findAll();
    }

    @Override
    public Status addStatus (Status status) {
        return statusRepo.save(status);
    }

    @Override
    public Status deleteStatus(int id) {
        Status status = statusRepo.findById(id).get();
        statusRepo.delete(status);
        return status;
    }
}
