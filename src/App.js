// import logo from './logo.svg';
import './App.css';
import UnauthNavbar from './components/UnauthNavbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import Posts from './pages/Posts';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (<>
    <Router>
      <UnauthNavbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/editprofile" element={<EditProfile/>}/>
          <Route path="/posts" element={<Posts/>}/>
        </Routes>
    </Router>
  </>);
}

export default App;
