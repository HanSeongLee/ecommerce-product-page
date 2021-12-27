import React, {useState} from "react";
import styles from './style.module.scss';
import MenuIcon from '../../public/img/icon-menu.svg';
import Logo from '../../public/logo.svg';
import CartIcon from '../../public/img/icon-cart.svg';
import Avatar from "../Avatar";
import Container from "../Container";
import CloseIcon from '/public/img/icon-close.svg';
import cn from 'classnames';
import Cart from "../Cart";
import Link from 'next/link';

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [openCart, setOpenCart] = useState(false);

    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.headerContainer}>
                    <div className={styles.wrapper}>
                        <div>
                            <MenuIcon className={styles.menuIcon}
                                      onClick={_ => setOpenMenu(true)}
                            />
                        </div>
                        <Link href={'/'}>
                            <a>
                                <Logo className={styles.logo}/>
                            </a>
                        </Link>
                        <div className={cn(styles.menuBackground, {
                            [styles.open]: openMenu,
                        })}>
                            <div className={styles.menuOverlay}>
                                <CloseIcon className={styles.closeIcon}
                                           onClick={_ => setOpenMenu(false)}
                                />
                                <ul className={styles.menu}>
                                    <li className={styles.menuItem}>
                                        Collections
                                    </li>
                                    <li className={styles.menuItem}>
                                        Men
                                    </li>
                                    <li className={styles.menuItem}>
                                        Women
                                    </li>
                                    <li className={styles.menuItem}>
                                        About
                                    </li>
                                    <li className={styles.menuItem}>
                                        Contact
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.wrapper}>
                        <div className={cn(styles.cartButton, {
                            [styles.open]: openCart,
                        })}
                             onClick={_ => setOpenCart(!openCart)}
                        >
                            <CartIcon className={styles.cartIcon}/>
                            <span className={styles.quantityLabel}>3</span>
                        </div>
                        <Avatar/>
                    </div>
                </div>
            </Container>
            <div className={cn(styles.cartContainer, {
                [styles.open]: openCart,
            })}>
                <Cart/>
            </div>
        </header>
    );
};

export default Header;
