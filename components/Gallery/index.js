import React, {useState} from "react";
import styles from './style.module.scss';
import PreviousIcon from '/public/img/icon-previous.svg';
import NextIcon from '/public/img/icon-next.svg';
import cn from "classnames";
import Lightbox from "../Lightbox";

const Gallery = ({ images }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    const onLightboxClose = () => {
        setLightboxOpen(false);
    }

    return (
        <div>
            <div className={styles.galleryContainer}>
                <div className={styles.previousButton}
                     onClick={_ => setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : 0)}
                >
                    <PreviousIcon/>
                </div>
                <img className={styles.galleryImage}
                     src={images[selectedIndex].image}
                     alt={''}
                     onClick={_ => setLightboxOpen(true)}
                />
                <div className={styles.nextButton}
                     onClick={_ => setSelectedIndex(selectedIndex < images.length - 1 ? selectedIndex + 1 : images.length - 1)}
                >
                    <NextIcon/>
                </div>
            </div>
            <div className={styles.galleryThumbnailContainer}>
                {images?.map(({thumbnail}, index) => (
                    <div className={cn(styles.galleryThumbnailItem, {
                        [styles.selected]: selectedIndex === index,
                    })}
                         onClick={_ => setSelectedIndex(index)}
                    >
                        <img className={styles.galleryThumbnailImage}
                             src={thumbnail}
                             alt={''}
                        />
                    </div>
                ))}
            </div>
            {lightboxOpen && (
                <Lightbox images={images}
                          defaultSelectedIndex={selectedIndex}
                          onClose={onLightboxClose}
                />
            )}
        </div>
    );
};

export default Gallery;
