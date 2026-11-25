import SearchBar from '../SearchBar/SearchBar.jsx'
import { Link } from "react-router-dom";
import './NavBar.css'

function NavBar() {
  return (
    <div className="navbar">
      <h1 id="title">Reddit</h1>
      <SearchBar />

      <Link to="/submit" className="navbar-create">
        + Create
      </Link>
      
    </div>
  )
}
export default NavBar