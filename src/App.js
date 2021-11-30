import './App.css';
// import Contact from './Components/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Contact from './Components/Contact/Contact.jsx';
// import Home from './Components/Home/Home.jsx';

function App() {

  return (
      <Router>
        <div className="App" >
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Contact/>}/>
          {/* <Home/> */}
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
        </div>
      </Router>
  );
}

export default App;
