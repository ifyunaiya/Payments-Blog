const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <h1>The Payment Blog</h1>

                <div className="links">
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <a href="/" className="nav-link">Home</a>
                        </li>

                        <li className="nav-item">
                            <a href="/about" className="nav-link">About</a>
                        </li>

                        {/* <li className="nav-item">
                            <a href="/create" className="nav-link">New Blog</a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;
