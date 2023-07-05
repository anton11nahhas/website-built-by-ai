package hac.repo;

import hac.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    @Query("SELECT u FROM User u WHERE LOWER(u.city) = LOWER(:city)")
    List<User> findByCityIgnoreCase(@Param("city") String city);

    @Query("SELECT u FROM User u WHERE u.dateOfBirth BETWEEN :startDate AND :endDate")
    List<User> findByDateRange(@Param("startDate") String startDate, @Param("endDate") String endDate);

}

