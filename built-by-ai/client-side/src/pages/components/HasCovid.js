import React from "react";

/**
 * This component receives two properties, and resembles the covid checkbox in the form
 * @param value the value of the checkbox
 * @param onChange event handler
 * @returns {JSX.Element}
 * @constructor
 */
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