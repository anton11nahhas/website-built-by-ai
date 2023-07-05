import React from "react";

/**
 * This component receives three properties, and it resembles the last name field of the form
 * @param value the value of the field
 * @param onChange the event handler
 * @param fieldErrors error message
 * @returns {JSX.Element}
 * @constructor
 */
function GetLastName({value, onChange, fieldErrors}){
    return(
        <>
            <div>
                <label>Last Name:</label>
                <input
                    type="text"
                    name="lastName"
                    value={value}
                    onChange={onChange}
                    className={`form-control ${fieldErrors.lastName ? "is-invalid" : ""}`}
                    placeholder="enter your last name: "
                />
                {
                    fieldErrors.lastName && (
                        <div className="invalid-feedback">{fieldErrors.lastName}</div>
                    )
                }
            </div>
        </>
    );
}

export default GetLastName