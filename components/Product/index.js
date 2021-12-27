import React, {useMemo} from "react";
import styles from './style.module.scss';
import Gallery from "../Gallery";
import Container from "../Container";
import QuantityInput from "../QuantityInput";
import CartIcon from '../../public/img/icon-cart.svg';

const Product = ({
                     images, company, name, description,
                     price, originalPrice
                 }) => {

    const discountRate = useMemo(() => {
        return 100 * ((originalPrice - price) / originalPrice);
    }, [price, originalPrice]);

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
