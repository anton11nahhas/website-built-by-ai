import React from "react";

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