import React, {useState} from "react";

/**
 * This component has a single state, the description view, which handles the visibility of the description message
 * using a button that toggles it. The component returns the html code that resembles the description box, including
 * the header, the description itself and the button.
 * @returns {JSX.Element}
 * @constructor
 */
function DescriptionMessage(){

    const [viewDescription, setViewDescription] = useState(true);

    /**
     * this function toggles the visibility of the description body, if it is true then the text is visible, and
     * invisible otherwise.
     */
    const toggleTextVisibility = () => {
        setViewDescription((prevIsTextVisible) => !prevIsTextVisible);
    };

    return(
        <>
            <div className="col-8">
                <h5>Got vaccinated?</h5>
                {viewDescription && <p>this survey is here to help gather electronic records for the
                    citizens of your country to help prioritise vaccinating victims in need!
                    Please let us have a little from your time to fill up the form and help others get
                    vaccinated.</p>}
            </div>
            <div className="col-4 my-4">
                <button onClick={toggleTextVisibility}>
                    {viewDescription ? 'Hide Description' : 'Show Description'}
                </button>
            </div>
        </>
    );
}

export default DescriptionMessage;