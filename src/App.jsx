import './App.css'
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar.jsx'
import CreatePost from "./pages/CreatePost/CreatePost.jsx";



function App() {


  return (
    <div>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<h2>Feed (req 7)</h2>} />
        <Route path="/submit" element={<CreatePost />} />
      </Routes>

    </div>
  )
}

export default App
