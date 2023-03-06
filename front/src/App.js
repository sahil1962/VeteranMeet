import "./App.css"
import Auth from "./pages/Auth/Auth";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
import EventArrange from "./pages/Profile/EventArrange";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUp from "./pages/Auth/signup";
import Login from "./pages/Auth/login";


function App() {
  return (
    <div className="App">
        <div className="blur" style={{top: '-18%', right: '0'}}></div>
        <div className="blur" style={{bottom: '0%', right: '0'}}></div>
        <div className="blur" style={{top: '36%', left: '-10rem'}}></div>
        <BrowserRouter>
        <Routes>

          <Route path = "/" exact element = {<Auth/>}/>
          <Route path = "/home" exact element = {<Home/>}/>
          <Route path = "/login" exact element = {<Login/>}/>
          <Route path = "/signup" exact element = {<SignUp/>}/>
          <Route path = "/profile" exact element = {<Profile/>}/>
          <Route path = "/EventArrange" exact element = {<EventArrange/>}/>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
