import React, {useEffect, useState} from "react";
import citiesData from "./resources/il.json"
import { v4 as uuidv4 } from 'uuid';


/**
 * This component receives three properties, and it handles the City field in the form
 * @param value the value of the field
 * @param onChange function to handle events
 * @param fieldErrors error message to be displayed to user
 * @returns {JSX.Element}
 * @constructor
 */
function GetCity({value, onChange, fieldErrors}){
    const [cities, setCities] = useState([])

    useEffect(() => {
        setCities(citiesData);
    }, []);

    return(
      <>
          <div>
              <label>City:</label>
              <select
                  name="city"
                  value={value}
                  onChange={onChange}
                  className={`form-control ${fieldErrors.city ? "is-invalid" : ""}`}
              >
                  <option value="">Select a city</option>
                  {cities.map((city) => (
                      <option key={uuidv4()} value={city.city}>
                          {city.city}
                      </option>
                  ))}

              </select>
              {
                  fieldErrors.city && (
                      <div className="invalid-feedback">{fieldErrors.city}</div>
                  )
              }
          </div>
      </>
    );
}

export default GetCity