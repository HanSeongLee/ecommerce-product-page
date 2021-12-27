import React from "react";
import styles from './style.module.scss';
import MinusIcon from '../../public/img/icon-minus.svg';
import PlusIcon from '../../public/img/icon-plus.svg';

const QuantityInput = ({ value, onChange }) => {
    return (
        <div className={styles.quantityInputContainer}>
            <div className={styles.button}
                 onClick={_ => onChange(Number(value) > 0 ? Number(value) - 1 : 0)}
            >
                <MinusIcon />
            </div>
            <input className={styles.quantityInput}
                   type={'number'}
                   min={0}
                   value={value}
                   onChange={(e) => onChange(Number(e.target.value))}
            />
            <div className={styles.button}
                 onClick={_ => onChange(Number(value) + 1)}
            >
                <PlusIcon />
            </div>
        </div>
    );
};

export default QuantityInput;
