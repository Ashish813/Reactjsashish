
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Feedback from './Components/Feedback';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages';
import About from './Pages/about';
import Events from './Pages/events';
// import AnnualReport from './Pages/annual';
import Teams from './Pages/team';
import Blogs from './Pages/blog';
import SignUp from './Pages/signup';
import { useState,useEffect  } from 'react'; 



const App = () => {
  // const [isOpened, setIsOpened] = useState(false);

  // function Toggle() {
  //   setIsOpened(isOpened => !isOpened);
    
  // }
  
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' element={<About/>}   />
        <Route  path='/events' element={<Events/>}   />
        {/* <Route path='/annual' component={AnnualReport} /> */}
        <Route path='/team' element={<Teams/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/sign-up' element={<SignUp/>} />
      </Routes>
     
    </Router>
    
  );
}
export default App;

