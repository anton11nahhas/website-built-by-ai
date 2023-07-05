import React, {useEffect, useState} from 'react';
import DescriptionMessage from "./components/DescriptionMessage";
import GetFirstName from "./components/GetFirstName";
import GetLastName from "./components/GetLastName";
import GetBirthDate from "./components/GetBirthDate";
import GetAddress from "./components/GetAddress";
import GetCity from "./components/GetCity";
import GetZip from "./components/GetZip";
import GetLandline from "./components/GetLandline";
import GetCellular from "./components/GetCellular";
import HasCovid from "./components/HasCovid";
import PreviousConditions from "./components/PreviousConditions";
import conditionsData from "./components/resources/diseases.json"
import axios from 'axios'
import ErrorMessages from "./components/ErrorMessages";

/**
 * This component handles the registry page, it has a header, description, and the form.
 * @returns {JSX.Element}
 * @constructor
 */
const Registry = () => {
    // the initial values of the data
    const initialData ={
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        address: '',
        city: '',
        zipCode: '',
        landline: '',
        cellularPhone: '',
        hasCOVIDHistory: false,
        conditions: [],
        otherConditions: ''
    };

    const [formData, setFormData] = useState(initialData)
    const [successMessage, setSuccessMessage] = useState("")
    const [conditions, setConditions] = useState([]);
    const [fieldErrors, setFieldErrors] = useState({});
    const [errorMsg, setErrorMsg] = useState();

    useEffect(() => {
        setConditions(conditionsData);
    }, []);

    /**
     * This function receives an event and handles the input change by updating the value provided by the user
     * to our object
     * @param event
     */
    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        const fieldValue = type === 'checkbox' ? checked : value;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: fieldValue
        }));
    };

    /**
     * This function clears the form by setting our object to its initial values.
     */
    const clearForm = () => {
        setFormData(initialData)
    }

    /**
     * This function updates the list of condition when the checkboxes are checked or unchecked
     * @param event
     */
    const handleConditionChange = (event) => {
        const { name, checked } = event.target;

        if (checked) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                conditions: [...prevFormData.conditions, name]
            }));
        } else {
            setFormData((prevFormData) => ({
                ...prevFormData,
                conditions: prevFormData.conditions.filter((condition) => condition !== name)
            }));
        }
    };

    /**
     * This function handles the submission of the form by fetching a post request to our api, the response returned
     * are the error messages, if any, retrieved from the database validations, if an unexpected error occurred,
     * the error message is updated so it can render the error page, notifying the user of the error.
     * @param event
     */
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('/api/users', formData)
            .then(response => {
                setFieldErrors(response.data)
                clearForm();

                setSuccessMessage((prevSuccessMessage) => {
                    const hasErrors = Object.keys(response.data).length > 0;
                    return hasErrors ? null : "You have submitted successfully!";
                });

            })
            .catch(error => setErrorMsg(error.message));
    };

    return (

        <div className="m-5 text-center">

            <div>
                <ErrorMessages errorMsg={errorMsg}/>
            </div>

            <div className="row border border-success rounded">
                <div className="col">
                    <h2>Registration Page</h2>
                    <div className="row border border-primary rounded m-2">
                        <DescriptionMessage />
                    </div>
                    {successMessage ? <h5 className="text-success">{successMessage}</h5> : ""}
                    <div className="row">
                        <div className="col">
                            <form onSubmit={handleSubmit}>
                                <div className="row border border-info rounded m-2">
                                    <h5>personal info:</h5>
                                    <div className="col-4 my-2">
                                        <GetFirstName
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            fieldErrors={fieldErrors}
                                        />
                                    </div>
                                    <div className="col-4 my-2">
                                        <GetLastName
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            fieldErrors={fieldErrors}
                                        />
                                    </div>
                                    <div className="col-4 my-2">
                                        <GetBirthDate
                                            value={formData.dateOfBirth}
                                            onChange={handleInputChange}
                                            fieldErrors={fieldErrors}
                                        />
                                    </div>
                                </div>
                                <div className="row border border-warning rounded m-2">
                                    <h5>geographic info:</h5>
                                    <div className="col-4 my-2">
                                        <GetAddress
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            fieldErrors={fieldErrors}
                                        />
                                    </div>
                                    <div className="col-4 my-2">
                                        <GetCity
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            fieldErrors={fieldErrors}
                                        />
                                    </div>
                                    <div className="col-4 my-2">
                                        <GetZip
                                            value={formData.zipCode}
                                            onChange={handleInputChange}
                                            fieldErrors={fieldErrors}
                                        />
                                    </div>
                                </div>
                                <div className="row border border-dark rounded m-2">
                                    <h5>contact info:</h5>
                                    <div className="col-6 my-2">
                                        <GetLandline
                                            value={formData.landline}
                                            onChange={handleInputChange}
                                            fieldErrors={fieldErrors}
                                        />
                                    </div>
                                    <div className="col-6 my-2">
                                        <GetCellular
                                            value={formData.cellularPhone}
                                            onChange={handleInputChange}
                                            fieldErrors={fieldErrors}
                                        />
                                    </div>
                                </div>
                                <div className="row border border-danger rounded m-2">
                                    <h5>Medical info:</h5>
                                    <div className="col-6 my-2">
                                        <HasCovid
                                            value={formData.hasCOVIDHistory}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="col-6 my-2">
                                        <PreviousConditions
                                            conditions={conditions}
                                            formData={formData}
                                            handleConditionChange={handleConditionChange}
                                            handleInputChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-secondary my-1">Submit your form</button>
                                <button type="button" className="btn my-1" onClick={clearForm}>clear form</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Registry;