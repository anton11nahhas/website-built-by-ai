import React, { useState } from 'react';
import {Link} from "react-router-dom";

/**
 * this is a page that informs the user the route he is looking for is not working.
 * @returns {JSX.Element}
 * @constructor
 */
function ErrorPage(){

    return(
        <>
            <div className="mb-5 text-center">
                <h1>Error: Cannot find the page you were looking for</h1>
            </div>
        </>


    )
}

export default ErrorPage