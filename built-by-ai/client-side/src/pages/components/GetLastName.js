import React from "react";

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