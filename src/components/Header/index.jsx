import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import styles from './styles.module.css';

export const Header = () => {

    return(<>
        <header className={styles.navbar}>
            <Link className={styles.navbarLogo} to="/">
                <h2>facuSando</h2>
            </Link>
            <ul>
                <li>
                    <NavLink to="/">
                        <img src="icon/home.svg"/>
                        <span>Inicio</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/aboutme'>
                        <img src="icon/information.svg"/>
                        <span>Sobre mi</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects">
                        <img src="icon/portfolio.svg"/>
                        <span>Proyectos</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact">
                        <img src="icon/mail2.svg"/>
                        <span>Contacto</span>
                    </NavLink>
                </li>
            </ul>
        </header>
    </>)
}
