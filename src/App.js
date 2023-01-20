// 20/12/2022

import React from 'react'
import Home from './Home';
import { Route , Routes } from 'react-router-dom'
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Error from './pages/Error';

export const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/about' element={ <About/> } />
        <Route path='/service' element={ <Services/> } />
        <Route path='/contact' element={ <Contact/> } />
        <Route path='*' element={ <Error/> } />
      </Routes>
    </React.Fragment>
  )
}

export default App;