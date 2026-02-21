import Link from "next/link";

/**
 * Two-column project showcase card: content (company, title, tags, CTA) + image/placeholder.
 * Alternating cards can show image on left (imageOnLeft) or right.
 * @param {string} [companyName] - Optional company/client name (small text above title)
 * @param {string} title - Project title
 * @param {string[]} [tags] - Pill-style tags
 * @param {string} href - Link for "View Work" and card
 * @param {boolean} [imageOnLeft] - When true, image/placeholder is on the left, content on the right
 * @param {string} [imageSrc] - Optional image URL; if omitted, a placeholder is shown
 * @param {string} [imageAlt] - Alt text when imageSrc is provided
 */
export default function ProjectShowcaseCard({
    companyName,
    title,
    tags = [],
    href,
    imageOnLeft = false,
    imageSrc,
    imageAlt = "",
}) {
    return (
        <Link
            href={href}
            className={`showcaseCard ${imageOnLeft ? "showcaseCardReverse" : ""}`}
        >
            <div className="showcaseCardLeft">
                {companyName && (
                    <span className="showcaseCompany">{companyName}</span>
                )}
                <h3 className="showcaseTitle">{title}</h3>
                {tags.length > 0 && (
                    <div className="showcaseTags">
                        {tags.map((tag, i) => (
                            <span key={i} className="showcaseTag">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
                <span className="showcaseButton">View Work</span>
            </div>
            <div className="showcaseCardRight">
                {imageSrc ? (
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="showcaseImage"
                    />
                ) : (
                    <div className="showcasePlaceholder" aria-hidden="true">
                        Image placeholder
                    </div>
                )}
            </div>
        </Link>
    );
}
