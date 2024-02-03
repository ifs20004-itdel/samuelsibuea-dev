import React from 'react';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import {About, Education, Experience, Home, Projects} from './pages';

const App = () => {
    return (
        <main className='bg-slate-300/20 '>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/education' element={<Education/>}/> 
                    <Route path='/experience' element={<Experience/>}/>
                    <Route path='/projects' element={<Projects/>}/>
                </Routes>
            </Router>
        </main>
    );
}

export default App;
