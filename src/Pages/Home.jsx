import { useNavigate } from "react-router-dom"
import { Button } from "../Components/Button"


export const Home = () => {
    const navigate = useNavigate()
    const contact = {
        name: 'ayo',
        number: "089089089"
    }

    const ShowContact = () => {
        navigate(`/contact/${contact.name}/${contact.number}`)
    }

    return (
        <div>

            <h1>Home</h1>
            <Button click={() => alert("you click on me")} hover={() => console.log('hello')
            } text={"save"} bg="yellow" color="white" />
            <button onClick={ShowContact}>Show contact</button>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quo excepturi beatae esse unde eveniet quis sapiente nesciunt facilis quae sint quas voluptates, impedit ullam sequi nemo atque veniam. Tenetur!</p>
        </div>
    )
}
