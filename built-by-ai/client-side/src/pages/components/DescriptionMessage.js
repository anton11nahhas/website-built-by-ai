import React, {useState} from "react";

function DescriptionMessage(){

    const [viewDescription, setViewDescription] = useState(true);


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