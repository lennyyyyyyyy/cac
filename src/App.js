// import logo from './logo.svg';
import './App.css';
import UnauthNavbar from './components/UnauthNavbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (<>
    <UnauthNavbar/>
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
    </Router>
  </>);
}

export default App;