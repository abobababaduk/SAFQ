

import "./ModalContent.css"
import { useState } from 'react';
export default function ModalContent({ closeModal }) {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Title 1', price: 28, photo: 'https://i.imgur.com/dfBZTJu.jpg'},
        { id: 5, name: 'Title 5', price: 25, photo: 'https://i.imgur.com/WntR6Zq.jpg' },
        { id: 8, name: 'Title 8', price: 50, photo: 'https://i.imgur.com/Y8kLh83.jpg' },
    ]);

    const removeItem = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        setCartItems(updatedCartItems);
    };
    return (
        <>










            <div class="wrap cf">
                <h1 class="projTitle"><span>твоя-</span>Корзина</h1>
                <div class="heading cf">
                    <h1>Мои товары</h1>
                    <a href="#cat" class="continue">К покупкам</a>
                </div>
                <div class="cart">

                    <ul class="cartWrap">
                        {cartItems.map((item, index) => (


                            <li class="items odd" key={item.id}>

                                <div class="infoWrap">
                                    <div class="cartSection">
                                        <img src={item.photo} alt="фото" class="itemImg" />
                                        <p class="itemNumber">id: {item.id}</p>
                                        <h3>{item.name}</h3>

                                        <p> <input type="text" class="qty" placeholder="1" /> x {item.price} ₽</p>

                                        <p class="stockStatus"> В наличии</p>
                                    </div>


                                    <div class="prodTotal cartSection">
                                        <p>{item.price} ₽</p>
                                    </div>
                                    <div class="cartSection removeWrap">
                                        <button onClick={() => removeItem(index)} class="remove">Удалить</button>
                                    </div>
                                </div>
                            </li>
                        ))}



                    </ul>
                </div>

                <div class="promoCode"><label for="promo">Введите промокод</label><input type="text" name="promo"/>
                    <a href="#" class="btn"></a></div>

                <div class="subtotal cf">
                    <ul>
                    <li class="totalRow"><span class="label">Налог (*13%)</span><span class="value">13.39 ₽</span></li>
                        <li class="totalRow final"><span class="label">ИТОГО</span><span class="value">116.39 ₽</span></li>
                        <li class="totalRow"><a href="#" class="btn continue">Оформить</a></li>
                    </ul>
                </div>
            </div>



























            {/* 
            <div className="ReactModal__Content">
                <div class="wrap cf">
                <h1 class="projTitle"><span>твоя-</span>Корзина</h1>
                    <div class="heading cf">
                        <h1>Товары</h1>
                       
                    </div>
                    <div class="cart">

                        <ul class="cartWrap">
                        {cartItems.map((item, index) => (
                                
                          
                        <li class="items odd" key={item.id}>

                        <div class="infoWrap">
                            <div class="cartSection">
                                <img src="http://lorempixel.com/output/technics-q-c-300-300-4.jpg" alt="" class="itemImg" />
                                <p class="itemNumber">#QUE-007544-002</p>
                                <h3>{item.name}</h3>

                                <p> <input type="text" class="qty" placeholder="1" /> x {item.price} ₽</p>

                                <p class="stockStatus"> В наличии</p>
                            </div>


                            <div class="prodTotal cartSection">
                                <p>50 ₽</p>
                            </div>
                            <div class="cartSection removeWrap">
                                <button onClick={() => removeItem(index)} class="remove">Удалить</button>
                            </div>
                        </div>
                        </li>
                            ))}
                           
                          

                        </ul>
                    </div>

                    
                    <div class="subtotal cf">
                        <ul>
                        <li class="totalRow"><span class="label">Налог (*13%)</span><span class="value">22.41 ₽</span></li>
                        <li class="totalRow final"><span class="label">ИТОГО</span><span class="value">172.41 ₽</span></li>
                        <li class="totalRow"><a href="#" class="btn continue">Оформить</a></li>
                        </ul>
                    </div>
                </div>
                

            </div> */}



































           

        </>
    )
}