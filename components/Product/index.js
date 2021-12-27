import React from "react";
import styles from './style.module.scss';
import Gallery from "../Gallery";
import Container from "../Container";
import QuantityInput from "../QuantityInput";
import CartIcon from '../../public/img/icon-cart.svg';

const Product = () => {
    return (
        <div className={styles.product}>
            <Gallery/>
            <Container>
                <div className={styles.productInfoContainer}>
                    <div className={styles.company}>
                        Sneaker Company
                    </div>
                    <h1 className={styles.productName}>
                        Fall Limited Edition Sneakers
                    </h1>
                    <p className={styles.productDescription}>
                        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber
                        outer
                        sole, they’ll withstand everything the weather can offer.
                    </p>
                    <div className={styles.priceContainer}>
                        <div className={styles.priceContainer}>
                            <span className={styles.price}>
                                $125.00
                            </span>
                            <span className={styles.discountLabel}>
                                50%
                            </span>
                        </div>
                        <span className={styles.originalPrice}>
                            $250.00
                        </span>
                    </div>
                </div>
                <div className={styles.addCartContainer}>
                    <QuantityInput/>
                    <button className={styles.addCartButton}>
                        <CartIcon className={styles.cartIcon}/> Add cart
                    </button>
                </div>
            </Container>
        </div>
    );
};

export default Product;
