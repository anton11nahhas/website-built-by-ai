package hac.entity;

import hac.validators.AgeConstraintValidator;
import jakarta.persistence.*;
import jakarta.validation.Constraint;
import jakarta.validation.Payload;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import java.util.List;


@Entity
@Table(name = "users")
public class User {

    @Target({ElementType.FIELD})
    @Retention(RetentionPolicy.RUNTIME)
    @Constraint(validatedBy = AgeConstraintValidator.class)
    public @interface AgeConstraint {
        String message() default "Invalid age";
        Class<?>[] groups() default {};
        Class<? extends Payload>[] payload() default {};
        int minAge() default 0;
    }


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name")
    @NotBlank(message = "First name is required")
    @Pattern(regexp = "^[a-zA-Z]+$", message = "First name should only contain letters")
    private String firstName;

    @Column(name = "last_name")
    @NotBlank(message = "Last name is required")
    @Pattern(regexp = "^[a-zA-Z]+$", message = "Last name should only contain letters")
    private String lastName;

    @Column(name = "birth_date")
    @NotBlank(message = "Date of birth is required")
    @AgeConstraint(minAge = 16, message = "Must be at least 16 years old")
    private String dateOfBirth;

    @Column(name = "city")
    @NotBlank(message = "City is required")
    private String city;

    @Column(name = "address")
    @NotBlank(message = "Address is required")
    private String address;

    @Column(name = "has_covid_history")
    private Boolean hasCOVIDHistory;


    @Column(name = "zip_code")
    private String zipCode;



    @Column(name = "land_line")
    @NotBlank(message = "Landline number is required")
    @Pattern(regexp = "^\\+?[0-9\\-\\s()]{7,}$", message = "Invalid landline number, at least there must be 7 digits")
    private String landline;

    @Column(name = "cellular_phone")
    @NotBlank(message = "Cellular phone number is required")
    @Pattern(regexp = "^\\+?[0-9\\-\\s()]{10,}$", message = "Invalid cellular phone number, at least there must be 10 digits")
    private String cellularPhone;

    @Column(name = "other_conditions")
    private String otherConditions;

    @ElementCollection
    @CollectionTable(name = "user_conditions", joinColumns = @JoinColumn(name = "user_id"))
    @Column(name = "condition")
    private List<String> conditions;

    // Constructors, getters, and setters

    public User() {
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setDateOfBirth(String dateOfBirth){
        this.dateOfBirth = dateOfBirth;
    }

    public String getDateOfBirth(){
        return dateOfBirth;
    }

    public void setOtherConditions(String otherConditions){
        if(otherConditions.isEmpty())
            this.otherConditions = "No other conditions";
        else
            this.otherConditions = otherConditions;
    }

    public String getOtherConditions(){
        return otherConditions;
    }

    public void setCellularPhone(String cellularPhone){
        this.cellularPhone = cellularPhone.trim();
    }

    public String getCellularPhone(){
        return cellularPhone;
    }

    public void setZipCode(String zipCode){
        if(zipCode.isEmpty()){
            this.zipCode = "N/A";
        }
        else
            this.zipCode = zipCode.trim();
    }

    public String getZipCode(){
        return zipCode;
    }

    public void setCity(String city){
        this.city = city;
    }

    public String getCity(){
        return city;
    }

    public void setAddress(String address){
        this.address = address.trim();
    }

    public String getAddress(){
        return address;
    }

    public void setHasCOVIDHistory(Boolean hasCOVIDHistory){
        this.hasCOVIDHistory = hasCOVIDHistory;
    }

    public Boolean getHasCOVIDHistory(){
        return hasCOVIDHistory;
    }

    public void setLandline(String landline){
        this.landline = landline.trim();
    }

    public String getLandline(){
        return landline;
    }

    public List<String> getConditions() {
        return conditions;
    }

    public void setConditions(List<String> conditions) {
        this.conditions = conditions;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName.trim();
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName.trim();
    }

}

