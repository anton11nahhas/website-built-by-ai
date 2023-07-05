package hac.repo;

import hac.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

/**
 * This interface acts as a dependency injection on the interface levels, where it has two function implementing
 * two SQL queries, one for finding all the users with the came city name, the other to find all the users that were
 * born within a specific range.
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    @Query("SELECT u FROM User u WHERE LOWER(u.city) = LOWER(:city)")
    List<User> findByCityIgnoreCase(@Param("city") String city);

    @Query("SELECT u FROM User u WHERE u.dateOfBirth BETWEEN :startDate AND :endDate")
    List<User> findByDateRange(@Param("startDate") String startDate, @Param("endDate") String endDate);

}

