import React from 'react'
import './App.css'
import Chat from './components/Chat'
import SideBar from './components/SideBar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import { useStateValue } from './StateProvider';

const App = () => {
  const [{ user }, dispatch] = useStateValue();
  console.log(user);
  return (
    <div className='app'>      
      { !user ? (
          <Login />
        ):(
          <div className="app_body">
            <Router>          
              <Routes>                    
                <Route path="/" element={<SideBar />} />
                <Route path="/rooms/:roomId" element={
                  <>
                    <SideBar />
                    <Chat />
                  </>
                } 
                />
              </Routes>
            </Router>                  
          </div>  
        )
      }
    </div>
  )
}

export default App