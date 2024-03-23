
import './App.css';
import Login from './components/Login';
import MenuManagement from './components/MenuManagement';
import Navbar from './components/Navbar';
 import Signup from './components/Signup';

import {  Routes,Route } from 'react-router-dom';





const  App =()=> {
  return (
    <div className="App" style={{color:"inherit"}}>
    
    {/* <Navbar/>
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/s' element={<Signup/>}/>
    <Route path='/h' element={<Home/>}/>

    </Routes> */}
    
    
      <Navbar/>
      

     <Routes>
    
    
    
     <Route path='/' element={<Login/>}/>
    <Route path='/s' element={<Signup/>}/> 
    <Route path='/d' element={<MenuManagement/>}/>
    


    </Routes>
    {/* <Dashboard/> */}
    {/* <Feedback/> */}
    
    
    </div>
  );
}
export default App;