import React, {useState} from "react";

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