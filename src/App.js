// import logo from './logo.svg';
import './App.css';
import UnauthNavbar from './components/UnauthNavbar';
import AuthNavbar from './components/AuthNavbar';
import Footer from "./components/Footer";
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import Posts from './pages/Posts';
import Post from './pages/Post';
import Journal from './pages/Journal'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useAuth, AuthProvider } from './AuthProvider';

const UnProtectedRoute = ({ children }) => {
  const { userId, loading } = useAuth();

  if (loading) {
    return <div className="loading-msg">Loading...</div>;
  }

  if (userId) {
    return <Navigate to="/" />;
  }

  return children;
};

const ProtectedRoute = ({ children }) => {
  const { userId, loading } = useAuth();

  if (loading) {
    return <div className="loading-msg">Loading...</div>;
  }

  if (!userId) {
    return <Navigate to="/" />;
  }

  return children;
};

const Navbar = () => {
  const { userId, loading } = useAuth();

  if (loading) {
    return <div className="loading-msg">Loading...</div>;
  }

  return <>{userId ? <AuthNavbar/> : <UnauthNavbar/>}</>
};


function App() {
  return (<>
    <AuthProvider>
      <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/aboutus" element={<AboutUs/>}/>
            <Route path="/login" element={<UnProtectedRoute><Login/></UnProtectedRoute>}/>
            <Route path="/signup" element={<UnProtectedRoute><Signup/></UnProtectedRoute>}/>

            <Route path="/profile/:id" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
            <Route path="/editprofile" element={<ProtectedRoute><EditProfile/></ProtectedRoute>}/>
            <Route path="/journal" element={<ProtectedRoute><Journal/></ProtectedRoute>}/>
            <Route path="/posts" element={<ProtectedRoute><Posts/></ProtectedRoute>}/>
            <Route path="/post/:id" element={<ProtectedRoute><Post/></ProtectedRoute>}/>
          </Routes>
          <Footer/>
      </Router>
    </AuthProvider>
  </>);
}

export default App;
