"use client";

import { useState } from "react";
import styles from "./Carousel.module.css";

export default function Carousel({ images, ariaLabel, className }) {
    const safeImages = Array.isArray(images) ? images : [];
    const [activeIndex, setActiveIndex] = useState(0);

    if (!safeImages.length) return null;

    const current = safeImages[activeIndex];
    const canPrev = activeIndex > 0;
    const canNext = activeIndex < safeImages.length - 1;

    const goPrev = () => setActiveIndex((i) => Math.max(0, i - 1));
    const goNext = () => setActiveIndex((i) => Math.min(safeImages.length - 1, i + 1));
    const goTo = (index) => setActiveIndex(index);

    return (
        <div
            className={[styles.carousel, className].filter(Boolean).join(" ")}
            role="region"
            aria-roledescription="carousel"
            aria-label={ariaLabel}
        >
            <div className={styles.viewport}>
                <div className={styles.frame}>
                    <img
                        src={current.src}
                        alt={current.alt}
                        className={styles.image}
                        loading="eager"
                        decoding="async"
                    />
                </div>
            </div>
            <div className={styles.controls}>
                <button
                    type="button"
                    className={styles.navButton}
                    onClick={goPrev}
                    disabled={!canPrev}
                    aria-label="Previous slide"
                >
                    Prev
                </button>
                <div className={styles.dots} role="tablist" aria-label="Choose slide">
                    {safeImages.map((_, idx) => (
                        <button
                            key={idx}
                            type="button"
                            className={
                                idx === activeIndex
                                    ? `${styles.dot} ${styles.dotSelected}`
                                    : styles.dot
                            }
                            onClick={() => goTo(idx)}
                            aria-label={`Go to slide ${idx + 1}`}
                            aria-current={idx === activeIndex ? "true" : undefined}
                        />
                    ))}
                </div>
                <button
                    type="button"
                    className={styles.navButton}
                    onClick={goNext}
                    disabled={!canNext}
                    aria-label="Next slide"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
