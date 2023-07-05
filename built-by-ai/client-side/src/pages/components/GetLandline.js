import React from "react";

/**
 * This component has three fields, and it resembles the landline field in the form
 * @param value the value of the field
 * @param onChange event handler
 * @param fieldErrors error message
 * @returns {JSX.Element}
 * @constructor
 */
function GetLandline({value, onChange, fieldErrors}){
    return(
        <>
            <div>
                <label>Landline:</label>
                <input
                    type="text"
                    name="landline"
                    value={value}
                    onChange={onChange}
                    className={`form-control ${fieldErrors.landline ? "is-invalid" : ""}`}
                    placeholder="enter your landline number: "
                />
                {
                    fieldErrors.landline && (
                        <div className="invalid-feedback">{fieldErrors.landline}</div>
                    )
                }
            </div>
        </>
    );
}

export default GetLandline