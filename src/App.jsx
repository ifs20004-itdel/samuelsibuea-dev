import React from 'react';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import {About, Achievement, Experience, Home, Projects} from './pages';

const App = () => {
    return (
        <main className='bg-slate-300/20'>
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/achievement' element={<Achievement/>}/> 
                    <Route path='/experience' element={<Experience/>}/>
                    <Route path='/projects' element={<Projects/>}/>
                </Routes>
            </Router>
        </main>
    );
}

export default App;
