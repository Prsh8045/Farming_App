import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Rent from "./components/rent"
import Footer from "./components/footer";
import Register from "./components/register";
import Login from "./components/login";
import About from "./components/about";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"
import "jquery/src/jquery"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

function App() {
  return <>
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="Rent" element={<Rent/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="about" element={<About/>}/>
    </Routes>
    <Footer/>
  </Router>
 
  
  </>;
}

export default App;
