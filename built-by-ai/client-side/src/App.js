import React, {StrictMode, useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import NavBar from './pages/NavBar'
import Registry from './pages/Registry'
import Summary from './pages/Summary'
import ErrorPage from './pages/ErrorPage'
export const UserContext = React.createContext();

/**
 * this is the app component, uses browser routers to handle the 4 routes we have, '/' route which is the navigation
 * bar and its index is the market, /cart shows the cart, /checkout shows the pay form and '*' if the route
 * doesn't match any of the above routes. in the app we also have two states, one of them handled by context, and it
 * represents the current number of items in the cart. the other one is a lifted up state that represents the total
 * price for payment and is sent to the checkout page.
 * @returns {JSX.Element}
 * @constructor
 */
const App = () => {

    return (
        <StrictMode>
            <BrowserRouter>

                    <Routes>
                        <Route path = "/" element={<NavBar />}>
                            <Route index element={<Registry />} />
                            <Route path = "/Summary" element={<Summary/>} />
                            <Route path ={"*"} element={<ErrorPage/>} />
                        </Route>

                    </Routes>

            </BrowserRouter>
        </StrictMode>
    );
};

export default App;
