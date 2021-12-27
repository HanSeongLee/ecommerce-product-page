import React, {useCallback} from "react";
import styles from './style.module.scss';
import DeleteIcon from '/public/img/icon-delete.svg';
import {useAppContext} from "../../context/AppContext";

const Cart = () => {
    const [state, dispatch] = useAppContext();
    const total = state?.cart?.total;
    const cartItems = state?.cart?.items;
    const cartItemsKeys = Object.keys(state?.cart?.items);

    const onRemoveCartClick = useCallback((id) => {
        dispatch({type: 'remove_cart', value: id});
    }, [dispatch]);

    return (
        <div className={styles.cart}>
            <div className={styles.cartHeader}>
                Cart
            </div>
            <div className={styles.cartBody}>
                {total === 0 && (
                    <div className={styles.emptyContainer}>
                        Your cart is empty.
                    </div>
                )}
                {total > 0 && cartItemsKeys?.map((id) => (
                    <div className={styles.cartItem}>
                        <img className={styles.productThumbnail}
                             src={cartItems[id].images[0].thumbnail}
                             alt={''}
                        />
                        <div className={styles.productInfoContainer}>
                            <div className={styles.productName}>
                                {cartItems[id].name}
                            </div>
                            <span className={styles.productQuantity}>
                            ${cartItems[id].price.toFixed(2)} x {cartItems[id].quantity}
                        </span>
                            &nbsp;
                            <span className={styles.productPrice}>
                            ${(cartItems[id].price * cartItems[id].quantity).toFixed(2)}
                        </span>
                        </div>
                        <div className={styles.deleteButton}
                             onClick={_ => onRemoveCartClick(id)}
                        >
                            <DeleteIcon/>
                        </div>
                    </div>
                ))}
                {total > 0 && (
                    <button className={styles.checkoutButton}>
                        Checkout
                    </button>
                )}
            </div>
        </div>
    );
};

export default Cart;
