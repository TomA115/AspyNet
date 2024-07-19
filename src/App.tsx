import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ContactPage from './contactPage';


const App: React.FC = () =>{
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<HomePage/>}/>
        <Route path = "/contact" element={<ContactPage/>}/>
      </Routes>

    </Router>
  );
}

export default App;
