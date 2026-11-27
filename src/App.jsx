import './App.css'
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar.jsx'
import CreatePost from "./pages/CreatePost/CreatePost.jsx";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import Feed from "./components/Feed/Feed.jsx";
import ViewProfile from './pages/ViewProfile/viewProfile.jsx';
import Posts from "./pages/ViewProfile/ProfileOptions/Posts.jsx"
import Comments from './pages/ViewProfile/ProfileOptions/Comments.jsx';
import Saved from './pages/ViewProfile/ProfileOptions/Saved.jsx';
import History from './pages/ViewProfile/ProfileOptions/History.jsx';
import Hidden from './pages/ViewProfile/ProfileOptions/Hidden.jsx';
import Upvoted from'./pages/ViewProfile/ProfileOptions/Upvoted.jsx';
import Downvoted from './pages/ViewProfile/ProfileOptions/Downvoted.jsx';

function App() {

  const username="KareemAdel4805"

  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/submit" element={<CreatePost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path={`/user/${username}`} element={<ViewProfile />}/>
        <Route path={`/user/${username}/Posts`} element={<Posts />}/>
        <Route path={`/user/${username}/comments`} element={<Comments />}/>
        <Route path={`/user/${username}/saved`} element={<Saved />}/>
        <Route path={`/user/${username}/history`} element={<History />}/>
        <Route path={`/user/${username}/hidden`} element={<Hidden />}/>
        <Route path={`/user/${username}/upvoted`} element={<Upvoted />}/>
        <Route path={`/user/${username}/downvoted`} element={<Downvoted />}/>
      </Routes>
    </div>
  )
}

export default App