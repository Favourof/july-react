import { Link } from "react-router-dom"


export const Navbar = () => {
    return (
        <div>
            <ul style={{ display: "flex", width: "60%", margin: "20px auto", border: "2px solid black", borderRadius: "20px", padding: "10px", listStyleType: "none", justifyContent: "space-between", cursor: "pointer" }}>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/contact/favour/090646453"}>Contact</Link></li>
                <li><Link to={"/add/product"}>Add product</Link></li>
                <li><Link to={"/dashboard"}> Dashboard</Link></li>
            </ul>
        </div>
    )
}
