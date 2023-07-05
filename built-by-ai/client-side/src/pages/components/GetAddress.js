import React from "react";

/**
 * This component receives three properties, and handles the answer field
 * @param value the query value to be added to the field
 * @param onChange on change function that will handle the events on change
 * @param fieldErrors a string holding an indicative error message for the user if any
 * @returns {JSX.Element}
 * @constructor
 */
function GetAddress({value, onChange, fieldErrors}){
    return(
        <>
            <div>
                <label>Address:</label>
                <input
                    type="text"
                    name="address"
                    value={value}
                    onChange={onChange}
                    className={`form-control ${fieldErrors.address ? "is-invalid" : ""}`}
                    placeholder="enter your address: "
                />
                {
                    fieldErrors.address && (
                        <div className="invalid-feedback">{fieldErrors.address}</div>
                    )
                }
            </div>
        </>
    );
}

export default GetAddress;