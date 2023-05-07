package com.backend.foodies.controller;

import com.backend.foodies.model.Status;
import com.backend.foodies.service.StatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/status")

public class StatusController {
    @Autowired
    private StatusService statusService;

    @GetMapping("/all")
    public List<Status> getstatus() {return statusService.getStatus();}

    @PostMapping("/add")
    public Status insert(@RequestBody Status status)  {return statusService.addStatus(status);}

    /*@PutMapping("/update/{id}")
    public Post update(@PathVariable int id, @RequestBody Post post) {
        return postService.updatePost(id, post);
    }*/

    @DeleteMapping("/delete/{id}")
    public Status delete(@PathVariable int id) {

        return statusService.deleteStatus(id);
    }
}
