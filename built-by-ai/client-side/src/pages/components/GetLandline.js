import React from "react";

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