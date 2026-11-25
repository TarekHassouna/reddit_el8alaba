import SearchBar from '../SearchBar/SearchBar.jsx'
import './NavBar.css'
function NavBar() {
  return (
    <div className="navbar">
      <h1 id="title">Reddit</h1>
      <SearchBar />
    </div>
  )
}
export default NavBar