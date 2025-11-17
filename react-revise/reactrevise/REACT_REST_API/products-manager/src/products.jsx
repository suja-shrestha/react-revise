import { useState, useEffect } from "react";

function Products() {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState(""); // stores the product name
    const [price, setPrice] = useState("");// stores the product price
    const [category, setCategory] = useState("");// stores the product category
    const [stock, setStock] = useState("");// stores the product stock
    const [description, setDescription] = useState("");// stores the product description
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(response => response.json())
            .then(data => setProducts(data))
            .then(err => { console.log(err) });
    }, []);
    const handleAddProduct = (e) => {
        e.preventDefault(); // prevent page reload

        const newProduct = {
            name,
            description,
            price: Number(price),
            category,
            stock: Number(stock)
        };

        fetch("http://localhost:5000/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => setProducts([...products, data])) // add new product to list
            .catch(err => console.log(err));

        // reset input fields
        setName("");
        setDescription("");
        setPrice("");
        setCategory("");
        setStock("");
    };


    const handleAddProducts = (e) => { }
    return (

        <div>
            <form onSubmit={handleAddProducts}>
                <input type="text" placeholder="Product Name" value={name} onChange={e => setName(e.target.value)} required />
                <input type="number" placeholder="Product Price" value={price} onChange={e => setPrice(e.target.value)} required />
                <input type="text" placeholder="Products Description" value={description} onChange={e => setDescription(e.target.value)} required />
                <input type="number" placeholder="Products Stock" value={stock} onChange={e => setStock(e.target.value)} required />
                <input type="text" placeholder="Products Category" value={category} onChange={e => setCategory(e.target.value)} required />
                <button type="submit"> Add Products</button>
            </form>
            <h1>Products</h1>
            {products.map(p => (
                <p key={p.id}>
                    {p.name} - ${p.price}
                    {p.stock} - {p.description}
                    {p.category} 
                </p>
            ))}
        </div>

    )
}
export default Products;