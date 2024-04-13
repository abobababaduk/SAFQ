import './Header.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import ModalContent from '../ModalContent/ModalContent'
import Modal from 'react-modal'


export default function Header() {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const openModal = () => {
        setModalIsOpen(true)
        document.body.style.overflow = 'hidden'
    }

    const closeModal = () => {
        setModalIsOpen(false)
        document.body.style.overflow = 'auto'
    }

    return (
        <>

            <header className="header">

                <div className="header-cont">
                    <NavLink to="/">
                        <div className="logo">

                            <a href="#">SAFQ</a>

                        </div>
                    </NavLink>

                    <ul className="nav">

                        <NavLink to="/"><a href="#" className='glow-on-txt'>Главная</a></NavLink>
                        <a href="#cat" className='glow-on-txt'>Каталог</a>
                        <a href="#new" className='glow-on-txt'>Популярные товары</a>


                    </ul>

                    <div className="nav-basket">

                        <button onClick={openModal} href="{basket}" class="glow-on-txt nav-bs">Корзина</button>

                    
                        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                            <ModalContent closeModal={closeModal} />
                        </Modal>

                    </div>


                </div>

            </header>

        </>
    )
}