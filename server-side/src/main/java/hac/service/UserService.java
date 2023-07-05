package hac.service;

import hac.entity.User;
import hac.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

/**
 * This class acts as a service for the user class.
 */
@Service
public class UserService {
    private final UserRepository userRepository;

    /**
     * injects the user repository interface
     * @param userRepository
     */
    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    /**
     * This function saves the user in the database
     * @param user a user object
     * @return
     */
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    /**
     * This function retrieves all users found in the data base
     * @return
     */
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    /**
     * This function retrieves all user born in a specific city
     * @param city city name (string)
     * @return
     */
    public List<User> getUsersByCity(String city) {
        return userRepository.findByCityIgnoreCase(city);
    }

    /**
     * This function retrieves all users born within a specific date range.
     * @param startDate start of the date range
     * @param endDate end of the date range
     * @return
     */
    public List<User> searchByDateRange(String startDate, String endDate) {
        return userRepository.findByDateRange(startDate, endDate);
    }



}

