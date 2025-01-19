
import { Link, Outlet } from "react-router";

const About = () => {
    return (
        <>
        <h1>This is the About Page.</h1>
        <Link to = "profile"><button >
            Profile Tab
        </button></Link>
        
        <Outlet />
        </>
    )
}

export default About;