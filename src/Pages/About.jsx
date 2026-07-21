import { Button } from "../Components/Button"


export const About = () => {
    const handleAlert = () => {
        alert("Hello from About")
    }
    return (
        <div>
            <h1>About</h1>
            <Button click={handleAlert} text="Download" bg="orange" pad="10px 20px" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eum aperiam, dolorum magnam alias perferendis ut fugiat repellat voluptas possimus porro adipisci quasi ipsam. Commodi alias repellat laborum modi voluptate.</p>
        </div>
    )
}
