import redditLogo from "../../assets/reddit-logo.svg";
import "./SearchBar.css";


function SearchBar() {
    return(
    <div className="search">
  <img src={redditLogo} alt="Reddit Logo" className="search-icon" />
  <input type="text" placeholder="Search Reddit"/>
</div>)
}
export default SearchBar