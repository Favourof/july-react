import { useForm } from "react-hook-form"
import "./AddProduct.css"

export const AddProduct = () => {
    const { handleSubmit, register, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log("The input data", data);

    }
    console.log("The error", errors);

    return (
        <main className="add-product">
            <form className="product-form-panel product-form" onSubmit={handleSubmit(onSubmit)} >
                <div className="form-field form-field-full">
                    <label htmlFor="title">Title</label>
                    <input {...register("title", { required: "title is required", minLength: { value: 3, message: "Title must not be less than 3 character" } })} id="title" name="title" type="text" placeholder="Product title" />
                    {errors.title && <p style={{ color: "red" }}>{errors.title.message}</p>}
                </div>

                <div className="form-field form-field-full">
                    <label htmlFor="description">Description</label>
                    <textarea {...register("description", { required: "Description is required" })} id="description" name="description" rows="5" placeholder="Describe your product" />
                    {errors.description && <p style={{ color: "red" }}>{errors.description.message}</p>}
                </div>

                <div className="form-field">
                    <label htmlFor="price">Price</label>
                    <input {...register("price", { required: "price is required" })} id="price" name="price" type="number" placeholder="0.00" />
                    {errors.price && <p style={{ color: "red" }}>{errors.price.message}</p>}
                </div>

                <div className="form-field">
                    <label htmlFor="category">Category</label>
                    <select {...register("category", { required: "category is required" })} id="category" name="category" defaultValue="">
                        <option value="" disabled>Select category</option>
                        <option value="electronics">Electronics</option>
                        <option value="fashion">Fashion</option>
                        <option value="home">Home</option>
                        <option value="beauty">Beauty</option>
                        <option value="other">Other</option>
                    </select>
                    {errors.category && <p style={{ color: "red" }}>{errors.category.message}</p>}
                </div>

                <div className="form-field">
                    <label htmlFor="currency">Currency</label>
                    <select {...register("currency", { required: "currency is required" })} id="currency" name="currency" defaultValue="">
                        <option value="" disabled>Select currency</option>
                        <option value="NGN">NGN</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                    </select>
                    {errors.currency && <p style={{ color: "red" }}>{errors.currency.message}</p>}
                </div>

                <div className="form-field">
                    <label htmlFor="image">Image</label>
                    <input {...register("image", { required: "image is required" })} id="image" name="image" type="url" placeholder="Image URL" />
                    {errors.image && <p style={{ color: "red" }}>{errors.image.message}</p>}
                </div>
                <button>Submit</button>
            </form>
        </main>
    )
}
