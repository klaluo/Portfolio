"use client";

export default function CaseStudySection({ id, title, styles, children }) {
    return (
        <section className={styles.projectSection} id={id}>
            <div className={styles.sectionHeading}>
                <div className={styles.sectionHeadingLine} aria-hidden='true' />
                <h2 className={styles.sectionHeadingTitle}>{title}</h2>
                <div className={styles.sectionHeadingLine} aria-hidden='true' />
            </div>
            {children}
        </section>
    );
}
