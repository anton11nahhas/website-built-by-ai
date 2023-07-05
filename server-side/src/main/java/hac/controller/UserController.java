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

/**
 * This controller handles all the end-points of the website, it allows cross-origin connection to port 3000 since
 * react application is run on that port, the server is run on local host port 8080, thus we use api as our route.
 */
@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    private final UserService userService;

    /**
     * Inject the user service bean.
     * @param userService
     */
    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    /**
     * This endpoint creates a new user and saves it to the database, it also uses binding result to check if any
     * of the sql validations failed, and returns a response of a hash map with all the errors and their fields
     * if any are found. The keys of the hash map are the field errors, and the value are the error messages.
     * @param user
     * @param bindingResult
     * @return
     */
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

    /**
     * This end-point handles the get requests to the search by city route, where it receives a city name with its
     * parameters and finds all the users born in the same city and returns it.
     * @param city
     * @return
     */
    @GetMapping("/search-by-city")
    public ResponseEntity<List<User>> searchUsersByCity(@RequestParam String city) {
        List<User> users = userService.getUsersByCity(city);
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    /**
     * This endpoint receives a start and an end date, within this range of dates, the end-point retrieves from the
     * database all the users that were born in that range.
     * @param startDate
     * @param endDate
     * @return
     */
    @GetMapping("/search-by-date")
    public List<User> searchByDateRange(@RequestParam("startDate") String startDate,
                                        @RequestParam("endDate") String endDate) {
        return userService.searchByDateRange(startDate, endDate);
    }

    /**
     * This end-point handles the get requests to the /api/users route, where it finds all of the users in the
     * database and returns them as a list.
     * @return
     */
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
}
