import React from "react";

/**
 * This component receives three properties, and handles the cellular phone field in the form
 * @param value the value of the field
 * @param onChange the function that handles the event
 * @param fieldErrors error message to be displayed to the user
 * @returns {JSX.Element}
 * @constructor
 */
function GetCellular({value, onChange, fieldErrors}){
    return(
        <>
            <div>
                <label>Cellular Phone:</label>
                <input
                    type="text"
                    name="cellularPhone"
                    value={value}
                    onChange={onChange}
                    className={`form-control ${fieldErrors.cellularPhone ? "is-invalid" : ""}`}
                    placeholder="enter your cellular number: "
                />
                {
                    fieldErrors.cellularPhone && (
                        <div className="invalid-feedback">{fieldErrors.cellularPhone}</div>
                    )
                }
            </div>
        </>
    )
}

export default GetCellular