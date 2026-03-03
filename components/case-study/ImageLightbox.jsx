"use client";

export default function ImageLightbox({ styles, imageSrc, onClose }) {
    if (!imageSrc) return null;
    return (
        <div
            className={styles.lightboxOverlay}
            onClick={onClose}
            role='dialog'
            aria-modal='true'
            aria-label='View image full size'
        >
            <button
                type='button'
                className={styles.lightboxClose}
                onClick={onClose}
                aria-label='Close'
            >
                ×
            </button>
            <img
                src={imageSrc}
                alt='Persona detail'
                className={styles.lightboxImage}
                onClick={(e) => e.stopPropagation()}
            />
        </div>
    );
}

