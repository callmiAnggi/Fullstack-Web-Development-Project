import React from 'react'
import AboutPage from '../Pages/AboutPage';
import App from '../App';
import SecondPage from '../Pages/SecondPage';
import {AnimatePresence} from 'framer-motion';
import AddStudent from '../Pages/AddStudent';
import EditStudent from '../Pages/EditStudent';
import {
    createBrowserRouter,
    RouterProvider,
    Routes,
    Route,
    useLocation,
  } from "react-router-dom";

function AnimatedRoute() {
    const located = useLocation();
    return (
    <AnimatePresence>
        <Routes location={located} key={located.pathname}>
            <Route exact path='/' element={<App/>} />
            <Route exact path='/About' element={<AboutPage/>}/>
            <Route exact path='/Add' element={<AddStudent/>}/>
            <Route exact path='/data' element={<SecondPage/>}/>
            <Route exact path='/edituser/:id' element={<EditStudent/>}/>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoute;