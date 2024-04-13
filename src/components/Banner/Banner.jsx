import './Banner.css'
import banner from '../../../public/banner/banner.jpg'

import { NavLink } from 'react-router-dom'

export default function Banner() {
    return (
        <>
        
            <div className="banner">


                <img src={banner} alt="banner" className='banner-photo' />

                <div className="banner-content">


                    <h1 className="title">Лушие товары для дома</h1>
                    <p className="description">Переходи и смотри в каталог</p>

                    <a href="#cat" class="glow-on-button">Каталог</a>

                </div>

            </div>
        
        </>
    )
}