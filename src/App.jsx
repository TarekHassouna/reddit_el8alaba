import './App.css'
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar.jsx'
import CreatePost from "./pages/CreatePost/CreatePost.jsx";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import Feed from "./components/Feed/Feed.jsx";

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/submit" element={<CreatePost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App