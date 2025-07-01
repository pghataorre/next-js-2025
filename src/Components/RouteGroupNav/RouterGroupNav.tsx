import Link from "next/link";

const RouteGroupNav = () => {
    return (
        <ul>
            <li>
            <Link href="/login">Login</Link>
            </li>
            <li>
            <Link href="/forgottenpassword">Forgotten password</Link>
            </li>
            <li>
            <Link href="/register">Register</Link>
            </li>
        </ul>
    )
}

export default RouteGroupNav;