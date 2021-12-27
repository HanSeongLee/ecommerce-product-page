import React from "react";
import styles from './style.module.scss';
import DeleteIcon from '/public/img/icon-delete.svg';

const Cart = () => {
    return (
        <div className={styles.cart}>
            <div className={styles.cartHeader}>
                Cart
            </div>
            <div className={styles.cartBody}>
                {/*Your cart is empty.*/}
                <div className={styles.cartItem}>
                    <img className={styles.productThumbnail}
                         src={'/img/image-product-1.jpg'}
                         alt={''}
                    />
                    <div className={styles.productInfoContainer}>
                        <div className={styles.productName}>
                            Fall Limited Edition Sneakers
                        </div>
                        <span className={styles.productQuantity}>
                            $125.00 x 3
                        </span>
                        &nbsp;
                        <span className={styles.productPrice}>
                            $375.00
                        </span>
                    </div>
                    <div className={styles.deleteButton}>
                        <DeleteIcon />
                    </div>
                </div>
                <button className={styles.checkoutButton}>
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;
