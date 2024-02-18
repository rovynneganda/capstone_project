import './App.css';
import Nav from './Nav';
import Footer from './Footer';
import Main from './Main';
import Header from './Header';
import Home from './Home';
import Booking from './Booking';
import {BrowserRouter, Route, Routes} from "react-router-dom"
function App() {
  
  return (
  <>
  <BrowserRouter>
  <Routes> 
    <Route path="/booking" element= {<Booking/>} />
    <Route path="/" element= {<Home />} />
  </Routes>

  </BrowserRouter>

  </>
  );
}

export default App;
