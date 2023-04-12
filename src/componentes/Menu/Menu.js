import React from 'react'
import styles from './Menu.module.css'
import { MenuLink } from '../MenuLink/MenuLink';

export const Menu = () => {

    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to={'/'}>
                    Início
                </MenuLink >
                <MenuLink to={'/sobremim'}>
                    Sobre Mim
                </MenuLink>
            </nav>
        </header>
    )
}
