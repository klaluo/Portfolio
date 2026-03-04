"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./Carousel.module.css";

export default function Carousel({ images, ariaLabel, className }) {
    const safeImages = useMemo(() => (Array.isArray(images) ? images : []), [images]);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        // Force reInit after mount so Embla measures correctly
        // even if parent layout wasn't ready on first render
        const timer = setTimeout(() => {
            emblaApi.reInit();
        }, 100);

        setScrollSnaps(emblaApi.scrollSnapList());
        onSelect();
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", () => {
            setScrollSnaps(emblaApi.scrollSnapList());
            onSelect();
        });

        return () => {
            clearTimeout(timer);
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi, onSelect]);

    const scrollTo   = useCallback((index) => emblaApi?.scrollTo(index), [emblaApi]);
    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    if (!safeImages.length) return null;

    return (
        <div
            className={[styles.carousel, className].filter(Boolean).join(" ")}
            role="region"
            aria-roledescription="carousel"
            aria-label={ariaLabel}
        >
            <div className={styles.viewport} ref={emblaRef}>
                <div className={styles.track}>
                    {safeImages.map((img, idx) => (
                        <div className={styles.slide} key={`${img.src}-${idx}`}>
                            <div className={styles.slideInner}>
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className={styles.image}
                                    loading={idx === 0 ? "eager" : "lazy"}
                                    decoding="async"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.controls}>
                <button
                    type="button"
                    className={styles.navButton}
                    onClick={scrollPrev}
                    disabled={!canScrollPrev}
                    aria-label="Previous slide"
                >
                    Prev
                </button>

                <div className={styles.dots} role="tablist" aria-label="Choose slide">
                    {scrollSnaps.map((_, idx) => (
                        <button
                            key={idx}
                            type="button"
                            className={
                                idx === selectedIndex
                                    ? `${styles.dot} ${styles.dotSelected}`
                                    : styles.dot
                            }
                            onClick={() => scrollTo(idx)}
                            aria-label={`Go to slide ${idx + 1}`}
                            aria-current={idx === selectedIndex ? "true" : undefined}
                        />
                    ))}
                </div>

                <button
                    type="button"
                    className={styles.navButton}
                    onClick={scrollNext}
                    disabled={!canScrollNext}
                    aria-label="Next slide"
                >
                    Next
                </button>
            </div>
        </div>
    );
}