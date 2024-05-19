import { Link } from "react-router-dom";
function Nav() {
    return (
        <div className="side-nav">
            <Link to="/" className="logo">K</Link>
            <Link to="/" className="links">home</Link>
            <Link to="/About" className="links">about</Link>
            <Link to="/MyProjects" className="links">My Work</Link>
            {/* <a href="/guestbook" className="links">guestbook</a> */}
            <Link to="/guestbook" className="links"></Link>
        </div>
    )
}
export default Nav;