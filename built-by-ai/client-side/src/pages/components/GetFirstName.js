import React, {useState} from "react";

/**
 * This component receives three properties, and it resembles the firstname field of the form
 * @param value the value of the field
 * @param onChange the function that handles events
 * @param fieldErrors error message
 * @returns {JSX.Element}
 * @constructor
 */
function GetFirstName({value, onChange, fieldErrors}){
    return(
        <>
            <div>
                <label>First Name:</label>
                <input
                    type="text"
                    name="firstName"
                    value={value}
                    onChange={onChange}
                    className={`form-control ${fieldErrors.firstName ? "is-invalid" : ""}`}
                    placeholder="enter your first name: "
                />
                {
                    fieldErrors.firstName && (
                        <div className="invalid-feedback">{fieldErrors.firstName}</div>
                    )
                }
            </div>
        </>
    );
}

export default GetFirstName