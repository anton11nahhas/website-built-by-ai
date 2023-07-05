import React from "react";

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