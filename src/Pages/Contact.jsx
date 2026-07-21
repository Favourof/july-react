import { useParams } from "react-router-dom"
import { Button } from "../Components/Button";

export const Contact = () => {
    // const { name, number } = useParams()
    const params = useParams()
    console.log(params);

    return (

        <div>
            <h1>Contact</h1>
            <p>Name: {params.name}</p>
            <p>Contact: {params.number}</p>
            <Button text="Upload" bg="red" pad="20px 30px" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis soluta nam nemo suscipit itaque sequi unde laboriosam animi, quod quia non voluptate officiis maxime quaerat cupiditate. Accusamus fuga id vel?</p>
        </div>
    )
}
