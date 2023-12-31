package hac.validators;

import hac.entity.User;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

import java.time.LocalDate;
import java.time.Period;

/**
 * This class implements a custom validator for the date of birth member, where it validates if the user is older than
 * 16 years old.
 */
public class AgeConstraintValidator implements ConstraintValidator<User.AgeConstraint, String> {

    private int minAge;

    @Override
    public void initialize(User.AgeConstraint constraintAnnotation) {
        this.minAge = constraintAnnotation.minAge();
    }

    @Override
    public boolean isValid(String dateOfBirth, ConstraintValidatorContext context) {
        if (dateOfBirth == null) {
            return true; // null values are considered valid
        }

        LocalDate birthDate = LocalDate.parse(dateOfBirth);

        // Calculate the age based on the current date
        int age = Period.between(birthDate, LocalDate.now()).getYears();

        return age >= minAge;
    }
}

