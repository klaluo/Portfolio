"use client";
import Link from "next/link";
import { ShimmerButton } from "@/registry/magicui/shimmer-button";

export default function Button({
    children,
    onClick,
    className = "",
    href,
    additionalClasses = "",
    theme = "default",
    icon,
    target,
    ...props
}) {
    const base = `inline-flex items-center gap-2 rounded-md transition-all duration-150 focus:outline-none`;
    const classes = `${base} ${additionalClasses} ${className}`.trim();

    if (href) {
        return (
            <Link
                href={href}
                className={classes}
                target={target}
                onClick={onClick}
                {...props}
            >
                {icon && <span className='flex items-center'>{icon}</span>}
                {children}
            </Link>
        );
    }

    return (
        <button type='button' onClick={onClick} className={classes} {...props}>
            {icon && <span className='flex items-center'>{icon}</span>}
            {children}
        </button>
    );
}

export function ShimmerButtonDemo() {
    return (
        <ShimmerButton className='shadow-2xl'>
            <span className='text-center text-sm leading-none font-medium tracking-tight whitespace-pre-wrap text-white lg:text-lg dark:from-white dark:to-slate-900/10'>
                Shimmer Button
            </span>
        </ShimmerButton>
    );
}
