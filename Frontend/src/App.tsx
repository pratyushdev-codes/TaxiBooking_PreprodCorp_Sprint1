import { DarkThemeToggle, Navbar } from "flowbite-react";
import Topbar from "./Components/Topbar.jsx"
import BookTaxi from "./Pages/BookTaxi.jsx"
import {Outlet, Navigate, Route, Routes, BrowserRouter,useLocation} from 'react-router-dom'
import BookingConfirmation from './Pages/BookingConfirmation.jsx'
import RideCompleted from './Pages/RideCompleted.jsx'
import Ride from './Pages/Ride.jsx'
import LoginPage from './Pages/LoginPage.jsx'
import SignUpPage from './Pages/SignUpPage.jsx'
function App() {
  return (
    <BrowserRouter>
   <div >
    <Topbar/>
<Routes>

  <Route path='/' element={<BookTaxi/>}/>
  <Route path='/login' element={<LoginPage/>}/>
  <Route path='/signup' element={<SignUpPage/>}/>
  <Route path ='/bookingconfrimation' element={<BookingConfirmation/>}/>
  <Route path ='/ridecompleted' element={<RideCompleted/>}/>
  <Route path ='/ride' element={<Ride/>}/>
</Routes>

   </div>
   </BrowserRouter>
 
  );
}

export default App;
//