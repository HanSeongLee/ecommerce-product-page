import React, {useState} from "react";
import styles from './style.module.scss';
import CloseIcon from "../../public/img/icon-close.svg";
import PreviousIcon from "../../public/img/icon-previous.svg";
import NextIcon from "../../public/img/icon-next.svg";
import cn from "classnames";

const Lightbox = ({ images, onClose, defaultSelectedIndex }) => {
    const [selectedIndex, setSelectedIndex] = useState(defaultSelectedIndex);

    return (
        <div className={styles.lightbox}>
            <div className={styles.lightboxImageContainer}>
                <div className={styles.closeButton}
                     onClick={onClose}
                >
                    <CloseIcon/>
                </div>
                <div className={styles.previousButton}
                     onClick={_ => setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : 0)}
                >
                    <PreviousIcon/>
                </div>
                <img className={styles.lightboxImage}
                     src={images[selectedIndex].image}
                     alt={''}
                />
                <div className={styles.nextButton}
                     onClick={_ => setSelectedIndex(selectedIndex < images.length - 1 ? selectedIndex + 1 : images.length - 1)}
                >
                    <NextIcon/>
                </div>
            </div>
            <div className={styles.lightboxThumbnailContainer}>
                {images?.map(({thumbnail}, index) => (
                    <div className={cn(styles.lightboxThumbnailItem, {
                        [styles.selected]: selectedIndex === index,
                    })}
                         onClick={_ => setSelectedIndex(index)}
                    >
                        <img className={styles.lightboxThumbnailImage}
                             src={images[index].thumbnail}
                             alt={''}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Lightbox;
