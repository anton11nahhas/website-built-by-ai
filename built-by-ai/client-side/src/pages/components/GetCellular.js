import React from "react";

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