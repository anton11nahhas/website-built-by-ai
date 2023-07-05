import React, {useEffect, useState} from "react";
import citiesData from "./resources/il.json"
import { v4 as uuidv4 } from 'uuid';


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