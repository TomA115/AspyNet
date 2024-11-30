import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/contactPage';
import BlogPage from './Pages/blogPage';


const App: React.FC = () =>{
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<HomePage/>}/>
        <Route path = "/contact" element={<ContactPage/>}/>
        <Route path = "/blog" element={<BlogPage/>}/>
      </Routes>

    </Router>
  );
}

export default App;
