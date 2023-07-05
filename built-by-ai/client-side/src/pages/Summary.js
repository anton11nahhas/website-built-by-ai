import React, { useState, useEffect, useContext } from 'react';
import loadingIcon from "./components/Images/loading-gif.gif"
import ReactHTMLTableToExcel from 'react-html-table-to-excel';



const Summary = () => {
    const [registrations, setRegistrations] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');



    useEffect(() => {
        setIsLoading(true); // Set loading state to true before fetching data

        fetchRegistrations()
            .then((data) => {
                setRegistrations(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching registrations:', error);
                setIsLoading(false);
            });
    }, []);

    const handleDateSearch = () => {
        setIsLoading(true);

        if (startDate && endDate) {
            fetch(`/api/users/search-by-date?startDate=${startDate}&endDate=${endDate}`)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setRegistrations(data);
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.error('Error fetching registrations:', error);
                    setIsLoading(false);
                });
        } else {
            console.log('Please provide both the start date and end date');
        }
    };


    const handleSearch = () => {
        setIsLoading(true);

        if (searchQuery === '') {
            fetchRegistrations()
                .then((data) => {
                    setRegistrations(data);
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.error('Error fetching registrations:', error);
                    setIsLoading(false);
                });
        } else {
            fetch(`/api/users/search-by-city?city=${encodeURIComponent(searchQuery)}`)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setRegistrations(data);
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.error('Error fetching registrations:', error);
                    setIsLoading(false);
                });
        }
    };

    function cancelSearch(){
        fetchRegistrations()
            .then((data) => {
                setRegistrations(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching registrations:', error);
                setIsLoading(false);
            });
    }

    const fetchRegistrations = () => {
        setIsLoading(true); // Set loading state to true before fetching data

        return fetch('/api/users') // Make a GET request to the API endpoint
            .then((response) => response.json()) // Parse the response as JSON
            .then((data) => {
                setIsLoading(false);
                return data; // Return the data
            })
            .catch((error) => {
                console.error('Error fetching registrations:', error);
                setIsLoading(false);
                throw error;
            });
    };


    return (
        <div className="text-center m-5">
            <h2>Summary Page</h2>




            {isLoading ? (
                <img src={loadingIcon} alt="Loading" />
            ) : (
                <>

                    {registrations.length === 0 ? (
                        <h1 className="text-danger">No registrations found!</h1>
                    ) : (
                        <div>
                            <div className="row">
                                <div className="col-6 border border-primary rounded">
                                    <form>
                                        <label className="my-1">Search by City name:</label>
                                        <div>
                                            <input
                                                type="text"
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                placeholder="Search by city..."
                                                className="form-control my-1"
                                            />
                                            <button onClick={handleSearch}
                                                    className="my-1 btn btn-secondary">Search</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-6 border border-info rounded">
                                    <form>
                                        <p>Search by a date range: </p>
                                        <label>Enter starting date: </label>
                                        <input
                                            type="date"
                                            value={startDate}
                                            onChange={(e) => setStartDate(e.target.value)}
                                            placeholder="Start Date"
                                            className="form-control my-1"
                                        />
                                        <label>Enter ending date: </label>
                                        <input
                                            type="date"
                                            value={endDate}
                                            onChange={(e) => setEndDate(e.target.value)}
                                            placeholder="End Date"
                                            className="form-control my-1"
                                        />
                                        <button onClick={handleDateSearch}
                                                className="btn btn-secondary my-1">Search</button>
                                    </form>
                                </div>
                            </div>

                            <button className="btn btn-primary my-2"
                                    onClick={cancelSearch}>Cancel Search</button>

                            <table id = "registrations-table" className="table table-light table-striped my-4">
                                <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Date of Birth</th>
                                    <th>City</th>
                                    <th>Address</th>
                                    <th>COVID-19 History</th>
                                    <th>Zip Code</th>
                                    <th>Landline number</th>
                                    <th>Cellular number</th>
                                    <th>Previous/Current conditions</th>
                                    <th>Other conditions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {registrations.map((registration) => (
                                    <tr key={registration.id}>
                                        <td>{registration.firstName}</td>
                                        <td>{registration.lastName}</td>
                                        <td>{registration.dateOfBirth}</td>
                                        <td>{registration.city}</td>
                                        <td>{registration.address}</td>
                                        <td>{registration.hasCOVIDHistory ? "has been infected before"
                                            : "has not been infected before"}</td>
                                        <td>{registration.zipCode}</td>
                                        <td>{registration.landline}</td>
                                        <td>{registration.cellularPhone}</td>
                                        <td>
                                            {registration.conditions.length === 0 ? (
                                                <span>No previous conditions</span>
                                            ) : (
                                                registration.conditions
                                                    .filter(condition => condition !== "other")
                                                    .map((condition, index) => (
                                                        <span key={index}>{condition} </span>
                                                    ))
                                            )}
                                        </td>


                                        <td>{registration.otherConditions}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            <div>
                                <ReactHTMLTableToExcel
                                    id="export-to-excel"
                                    className="btn btn-dark my-2"
                                    table="registrations-table"
                                    filename="registrations"
                                    sheet="registrations"
                                    buttonText="Export current table to Excel"
                                />
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Summary;
