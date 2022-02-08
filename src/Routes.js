import React from 'react'
import { BrowserRouter, Routes as WebRoutes, Route } from "react-router-dom";

import Navbar from './layout/Navbar'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Technology from './pages/Technology'
import Crew from './pages/Crew'

const Routes = () => (
    <BrowserRouter>
        <WebRoutes>
            <Route path="/" element={<Navbar />}>
                <Route index element={<Home />} />
                <Route path="destination" element={<Destination />} />
                <Route path="technology" element={<Technology />} />
                <Route path="crew" element={<Crew />} />

                {/* Using path="*"" means "match anything", so this route
                        acts like a catch-all for URLs that we don't have explicit
                        routes for. */}
                {/* <Route path="*" element={<NoMatch />} /> */}
            </Route>
        </WebRoutes>
    </BrowserRouter>
)

export default Routes