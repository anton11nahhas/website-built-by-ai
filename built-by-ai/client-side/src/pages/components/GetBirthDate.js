import React from "react";

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