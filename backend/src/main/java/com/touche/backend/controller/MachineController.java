package com.touche.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MachineController {
    // get one machine
    // get all machines
    // get all appointments


    //    @Autowired
//    private Something;

    @PostMapping(path = "/")
    public ResponseEntity<?> get() {


        return ResponseEntity.ok(new Object());

    }
}
