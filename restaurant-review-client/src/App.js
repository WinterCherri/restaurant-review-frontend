  import logo from './logo.svg';
  import './App.css';
  import Dashboard from './RestaurantContainer/Dashboard/Dashboard';
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import Reviews from './RestaurantContainer/Reviews/Reviews';
import AdminSettings from './RestaurantContainer/AdminSettings/AdminSettings';
import Sidebar from './components/SidebarData';
import Navbar from './components/Navbar';
import { useState } from 'react';
  function App() {
    const [loggedIn,setLoggedIn]=useState(false);
    return (
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Dashboard />}>
          </Route>
          <Route path="/reviews" element={<Reviews />}>
          </Route>
          <Route path='/adminsettings' element={<AdminSettings />}>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }

  export default App;
