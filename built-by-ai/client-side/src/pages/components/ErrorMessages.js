import React from "react";


/**
 * this component display error messages for user if found.
 * @param errorMsg
 * @returns {JSX.Element}
 * @constructor
 */
function ErrorMessages({errorMsg}){
    return(
        <>
            <div>
                {!errorMsg ?  " " :
                    <p className="bg-danger">something is wrong: {errorMsg}</p> }

            </div>
        </>
    );
}

export default ErrorMessages;