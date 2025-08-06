import {Link} from "react-router-dom"
import logo from "../assets/icons/logo.png"; 
import profile from "../assets/icons/profile.png"

function Header() {
    return (
        <header>
            <Link to="/" className="logo">
                <img src={logo} alt="Fortuna logo" />
                <h2>Fortuna</h2>
            </Link>
            <Link to="/" className="profile-icon">
                <img src={profile} alt="Profile icon"/>
            </Link>
        </header>
    )
}

export default Header;