package hac.controller;

import hac.entity.User;
import hac.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<Map<String, String>> addUser(@Valid @RequestBody User user, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            Map<String, String> errors = new HashMap<>();
            for (FieldError fieldError : bindingResult.getFieldErrors()) {
                errors.put(fieldError.getField(), fieldError.getDefaultMessage());
            }
            return ResponseEntity.ok().body(errors);
        }

        userService.saveUser(user);
        return ResponseEntity.ok().body(Collections.emptyMap());
    }

    @GetMapping("/search-by-city")
    public ResponseEntity<List<User>> searchUsersByCity(@RequestParam String city) {
        List<User> users = userService.getUsersByCity(city);
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/search-by-date")
    public List<User> searchByDateRange(@RequestParam("startDate") String startDate,
                                        @RequestParam("endDate") String endDate) {
        return userService.searchByDateRange(startDate, endDate);
    }




    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
}
