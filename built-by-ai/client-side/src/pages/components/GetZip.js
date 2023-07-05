import React from "react";

/**
 * This component receives three properties, and resembles the zip code field in the form
 * @param value the value of the field
 * @param onChange event handler
 * @param fieldErrors error message
 * @returns {JSX.Element}
 * @constructor
 */
function GetZip({value, onChange, fieldErrors}){
    return(
        <>
            <div>
                <label>Zip Code (Optional):</label>
                <input
                    type="text"
                    name="zipCode"
                    value={value}
                    onChange={onChange}
                    className={`form-control ${fieldErrors.zipCode ? "is-invalid" : ""}`}
                    placeholder="enter your zip code: "
                />
                {
                    fieldErrors.zipCode && (
                        <div className="invalid-feedback">{fieldErrors.zipCode}</div>
                    )
                }
            </div>
        </>
    );
}

export default GetZip