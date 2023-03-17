import { Link } from "react-router-dom";
export default function Home() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/list">List</Link>
                </li>
            </ul>
        </nav>
    )
}