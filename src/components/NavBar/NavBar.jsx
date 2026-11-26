import SearchBar from '../SearchBar/SearchBar.jsx'
import { Link } from "react-router-dom";
import './NavBar.css'
import ProfileMenu from './ProfileMenu.jsx';

function NavBar() {
  return (
    <div className="navbar">
      <h1 id="title">Reddit</h1>
      <SearchBar />

      <div className="navbar-buttons">
        <Link to="/login" className="navbar-create">
          Log in / Sign up
        </Link>
        <Link to="/submit" className="navbar-create">
          + Create
        </Link>
        <ProfileMenu />

      </div>
    </div>
  )
}
export default NavBar