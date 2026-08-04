import { useEffect, useState } from "react"


export const Dashboard = () => {
    const [timer, setTimer] = useState(0)
    const [product, setProduct] = useState(null)


    const handleProduct = async () => {
        try {
            const response = await fetch("http://localhost:4000/products")
            const data = await response.json()
            console.log("data", data);

            if (data) {
                setProduct(data.product)
            }
        } catch (error) {
            console.log(error);

        }
    }


    useEffect(() => {
        handleProduct()
    }, [timer])

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={() => setTimer(timer + 1)}>Refetch</button>
            <p>{timer}</p>

            <div>
                {product && <div>
                    {product.map((pro) => (
                        <ul key={pro._id} style={{ border: "thin solid black", margin: "10px", padding: "10px", listStyleType: "none", width: "300px", display: "inline-block" }} key={pro.id}>
                            <li style={{ fontSize: "25px", fontWeight: "bolder" }}>{pro.title}</li>
                            <li><img style={{ width: "40%" }} src={pro.image} alt={pro.title.slice(10)} /></li>
                            <li>{pro.description}</li>
                            <li>{pro.price}</li>
                        </ul>
                    ))}
                </div>}
            </div>
        </div>
    )
}
