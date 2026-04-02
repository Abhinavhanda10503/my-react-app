import { Link } from "react-router-dom";
import "../assets/css/Navbar.css";
function Navbar() {
    return (    
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Users">Users</Link></li>
                    <li><Link to="/users/:id">UsersDetails</Link></li>
                    <li><Link to="/posts">Posts</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar