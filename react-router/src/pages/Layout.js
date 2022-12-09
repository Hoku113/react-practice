import {Outlet, Link} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        {/* top page */}
                        <Link to="/">Home</Link> 
                    </li>
                    <li>
                        {/* blogs page if you clicked "Blogs" link */}
                        <Link to="/blogs">Blogs</Link>                        
                    </li>
                    <li>
                        {/* contact page if you clicked "Contact" link */}
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <Outlet/>
        </>
    )
}

export default Layout;