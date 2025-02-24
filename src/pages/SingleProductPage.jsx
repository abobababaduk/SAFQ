import { useParams } from "react-router-dom"
import { products } from "../data"

export default function SingleProductPage() {

    const { id } = useParams()

    const product = products.find(product => product.id === parseInt(id))

    if (!product) {
        return <h2>Данные товар не был найден!</h2>
    }

    return (
        <>

            <div className="one-product">

                <div className="one-product-img">
                    <img src={product.photo} alt="product" />
                </div>


                <div className="one-product-info">
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <h2>Цена: {product.price} ₽</h2>

                    <div className="one-product-info-button">


                    </div>

                </div>

            </div>

        </>
    )
}