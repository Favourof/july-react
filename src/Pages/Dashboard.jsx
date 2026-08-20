import { useEffect, useState } from "react"
import { publicInstance } from "../service/axios"


export const Dashboard = () => {
    const [timer, setTimer] = useState(0)
    const [product, setProduct] = useState([])
    const [errorMessage, setErrorMessage] = useState("")


    const handleProduct = async () => {
        try {
            const response = await publicInstance.get("/products")
            const data = response.data
            console.log(data);

            setProduct(Array.isArray(data) ? data : data.product ?? [])
            setErrorMessage("")
        } catch (error) {
            console.error("Unable to load products", error)
            setErrorMessage(error.response?.data?.message ?? error.message ?? "Unable to load products")

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
            {errorMessage && <p role="alert">{errorMessage}</p>}

            <div>
                {product && <div>
                    {product.map((pro) => (
                        <ul key={pro._id ?? pro.id} style={{ border: "thin solid black", margin: "10px", padding: "10px", listStyleType: "none", width: "300px", display: "inline-block" }}>
                            <li style={{ fontSize: "25px", fontWeight: "bolder" }}>{pro.title}</li>
                            <li><img style={{ width: "40%" }} src={pro.image} alt={pro.title} /></li>
                            <li>{pro.description}</li>
                            <li>{pro.price}</li>
                        </ul>
                    ))}
                </div>}
            </div>
        </div>
    )
}
