import React from "react";

function HasCovid({value, onChange}){
    return(
        <>
            <div>
                <label>Have you been infected by COVID-19 before? </label>
                <input
                    type="checkbox"
                    name="hasCOVIDHistory"
                    checked={value}
                    onChange={onChange}
                />
            </div>
        </>
    );
}

export default HasCovid