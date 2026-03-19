import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from './../Pages/Home';
import About from './../Pages/About';
import Tour from './../Pages/Tour';
import TourDetails from './../Pages/TourDetails';
import Login from './../Pages/Login';
import Register from './../Pages/Register';
import SearchResultList from './../Pages/SearchResultList';
import NotFound from './../Pages/NotFound';
import AdminDashboard from './../Pages/AdminDashboard';

const Routers = () => {
  return (
    
    <Routes>
      <Route path='/' element={<Navigate to='/home' />}/>
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/tour' element={<Tour/>} />
      <Route path='/tour/:id' element={<TourDetails/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/tour/search' element={<SearchResultList/>} />
      {/* Admin Route - Accessible at /admin */}
      <Route path='/admin' element={<AdminDashboard/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  );
};

export default Routers;
