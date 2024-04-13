import './Footer.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Footer() {


    return (
        <>
            <footer>
                <div class="container">

                    <div class="footer">

                        <div class="footer-logo">

                            <NavLink to="/">


                                <a href="/">SAFQ</a>


                            </NavLink>

                            
                        </div>

                        <div class="footer-a">
                            <NavLink to="/"><a href="#" >Главная</a></NavLink>
                            <a href="#cat">Каталог</a>
                            <a href="#new">Популярные товары</a>
                        </div>

                        <div class="footer-info">
                            <p>ИП Бабадук</p>
                            <p>ИНН 165915518655</p>
                            <p>ОГРНИП 321169000154221</p>
                            <p>Казань, Бари Галеева 3А</p>
                        </div>

                        <div class="footer-info-time">
                            <p>Режим работы:</p>
                            <p>вт - пт 10:00-19:00</p>
                            <p>сб 10:00-16:00</p>
                            <p> вс, пн - выходные дни</p>
                            <a href="tel:88005553535">+7 (880) 555-35-35</a>
                        </div>

                    </div>

                </div>
            </footer>

        </>
    )
}
