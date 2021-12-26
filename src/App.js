import './App.css';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import AddUser from './components/users/AddUser';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Notfound from './components/pages/Notfound';
import EditUser from './components/users/EditUser';
import User from './components/users/User';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/user/add" element={<AddUser/>} />
          <Route path="/user/edit/:id" element={<EditUser/>} />
          <Route path="/user/:id" element={<User/>} />
          <Route path="*" element={<Notfound/>} />
        </Routes>
      </Router>      
    </div>
  );
}

export default App;
