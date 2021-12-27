import React from "react";
import styles from './style.module.scss';

const Avatar = () => {
    return (
        <div className={styles.avatarContainer}>
            <img className={styles.avatarImage}
                 src={'/img/image-avatar.png'}
                 alt={''}
            />
        </div>
    );
};

export default Avatar;
