import { Button } from "./Button"
import "./Card.css"
function Card() {
    // const pstyle = {
    //     fontSize: "20px",
    //     backgroundColor: "green",
    //     color: "red"
    // }
    return (
        <div>
            <div id="parent">
                <h1 style={{ fontSize: "100px" }}>The Title</h1>
                <p className="child">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, accusantium! Velit voluptates placeat tempore repellat quod! Nostrum perspiciatis molestiae aut atque quos. Cum, quibusdam saepe. Non, quidem. Veniam, at atque!</p>
                <Button />
            </div>

        </div>
    )
}

export default Card