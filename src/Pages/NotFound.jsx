import { Link } from "react-router-dom"

export const NotFound = () => {
    return (
        <div>
            <h1>404 ERROR</h1>
            <p>Page not Found</p>
            <Link to={"/"}>Go back home Page</Link>
        </div>
    )
}
