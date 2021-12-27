import React, {useCallback, useMemo, useState} from "react";
import styles from './style.module.scss';
import Gallery from "../Gallery";
import Container from "../Container";
import QuantityInput from "../QuantityInput";
import CartIcon from '../../public/img/icon-cart.svg';
import {useAppContext} from "../../context/AppContext";

const Product = (product) => {
    const {
        images, company, name,
        description, price, originalPrice
    } = product;
    const [quantity, setQuantity] = useState(0);
    const [state, dispatch] = useAppContext();

    const discountRate = useMemo(() => {
        return 100 * ((originalPrice - price) / originalPrice);
    }, [price, originalPrice]);

    const onAddCartClick = useCallback(() => {
        dispatch({type: 'add_cart', value: {
                ...product,
                quantity,
            }});
    }, [product, quantity, state, dispatch]);

    const onQuantityChange = (newValue) => {
        setQuantity(newValue);
    };

    return (
        <div className={styles.product}>
            <Gallery images={images}/>
            <Container>
                <div className={styles.productInfoContainer}>
                    <div className={styles.company}>
                        {company}
                    </div>
                    <h1 className={styles.productName}>
                        {name}
                    </h1>
                    <p className={styles.productDescription}>
                        {description}
                    </p>
                    <div className={styles.priceContainer}>
                        <div className={styles.priceContainer}>
                            <span className={styles.price}>
                                ${price?.toFixed(2)}
                            </span>
                            <span className={styles.discountLabel}>
                                {discountRate.toFixed()}%
                            </span>
                        </div>
                        <span className={styles.originalPrice}>
                            ${originalPrice?.toFixed(2)}
                        </span>
                    </div>
                </div>
                <div className={styles.addCartContainer}>
                    <QuantityInput value={quantity}
                                   onChange={onQuantityChange}
                    />
                    <button className={styles.addCartButton}
                            onClick={onAddCartClick}
                    >
                        <CartIcon className={styles.cartIcon}/> Add cart
                    </button>
                </div>
            </Container>
        </div>
    );
};

export default Product;
