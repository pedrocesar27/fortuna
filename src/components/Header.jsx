import {Link} from "react-router-dom"

function Header() {
    return (
        <header>
            <div className="logo">
                <img src="" alt="" />
                <h1>Fortuna</h1>
            </div>
            <div className="profile-icon">
                <Link to="/">
                    <img src="" alt="" />
                </Link>
            </div>
        </header>
    )
}

export default Header;