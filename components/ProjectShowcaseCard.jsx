import Link from "next/link";

/**
 * Two-column project showcase card: content (company, title, tags, tool icons, CTA) + image.
 * Alternating cards can show image on left (imageOnLeft) or right.
 * @param {string} [companyName] - Optional company/client name (small text above title)
 * @param {string} title - Project title or headline
 * @param {string[]} [tags] - Pill-style tags (roles, etc.)
 * @param {Array<{ src: string, alt: string }>} [toolIcons] - Tool/software icons (e.g. Figma, Jira)
 * @param {string} href - Link for "View Work" and card
 * @param {boolean} [imageOnLeft] - When true, image is on the left, content on the right
 * @param {string} [imageSrc] - Optional image URL; if omitted, a placeholder is shown
 * @param {string} [imageAlt] - Alt text when imageSrc is provided
 * @param {string} [tagVariant] - 'filled' (default) or 'outline' for bordered pills
 */
export default function ProjectShowcaseCard({
    companyName,
    title,
    tags = [],
    toolIcons = [],
    href,
    imageOnLeft = false,
    imageSrc,
    imageAlt = "",
    tagVariant = "filled",
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
                            <span
                                key={i}
                                className={`showcaseTag ${tagVariant === "outline" ? "showcaseTagOutline" : ""}`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
                {toolIcons.length > 0 && (
                    <div className="showcaseToolIcons">
                        {toolIcons.map((icon, i) => (
                            <img
                                key={i}
                                src={icon.src}
                                alt={icon.alt}
                                className="showcaseToolIcon"
                            />
                        ))}
                    </div>
                )}
                <span className="showcaseButton">View Work</span>
            </div>
            <div className="showcaseCardRight">
                <div className="showcaseImageFrame">
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
            </div>
        </Link>
    );
}
