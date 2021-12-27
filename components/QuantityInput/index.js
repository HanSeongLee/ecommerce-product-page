import React, {useState} from "react";
import styles from './style.module.scss';
import MinusIcon from '../../public/img/icon-minus.svg';
import PlusIcon from '../../public/img/icon-plus.svg';

const QuantityInput = () => {
    const [quantity, setQuantity] = useState(0);

    return (
        <div className={styles.quantityInputContainer}>
            <div className={styles.button}
                 onClick={_ => setQuantity(quantity > 0 ? quantity - 1 : 0)}
            >
                <MinusIcon />
            </div>
            <input className={styles.quantityInput}
                   type={'number'}
                   min={0}
                   value={quantity}
            />
            <div className={styles.button}
                 onClick={_ => setQuantity(quantity + 1)}
            >
                <PlusIcon />
            </div>
        </div>
    );
};

export default QuantityInput;
