
import './Card.css'

import { NavLink } from "react-router-dom";







export default function Card({ id, name, price, photo }) {

    return (
        <>

        



            <NavLink to={`/catalog/${id}`}><div className="card" >

                <div className="card-box">
                    <div className="card-image">
                        <img src={photo} alt="product" />

                    </div>

                    <div className="card-info">
                        <div className="card-title">{name}</div>
                        <div className="card-price">{price} ₽</div>
                    </div>

                    <a href="" class="glow-on-btn">В корзину</a>
                </div>

            </div></NavLink>


        </>
    )
}