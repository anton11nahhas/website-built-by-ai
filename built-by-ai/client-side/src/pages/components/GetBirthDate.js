import React from "react";

/**
 * This component receives three properties, it handles the date of birth field in the form
 * @param value the value of the field
 * @param onChange the function that handles the event on change
 * @param fieldErrors an error message to be displayed to the user
 * @returns {JSX.Element}
 * @constructor
 */
function GetBirthDate({value, onChange, fieldErrors}){
    return(
        <>
            <div>
                <label>Date of Birth:</label>
                <input
                    type="date"
                    name="dateOfBirth"
                    value={value}
                    onChange={onChange}
                    className={`form-control ${fieldErrors.dateOfBirth ? "is-invalid" : ""}`}
                />
                {
                    fieldErrors.dateOfBirth && (
                        <div className="invalid-feedback">{fieldErrors.dateOfBirth}</div>
                    )
                }
            </div>
        </>
    );
}

export default GetBirthDate;