import { Link, Outlet } from "react-router-dom";
export default function Home() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/list">List</Link>
                    </li>
                    <li>
                        <Link to="/people">People</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}