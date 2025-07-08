import { cn } from "@/lib/utils";
import * as React from "react";

const IconWrapper = ({ className, children, ...props }: React.HTMLAttributes<SVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn("text-foreground", className)}
        {...props}
    >
        {children}
    </svg>
);

export const OrbIcon = (props: React.HTMLAttributes<SVGElement>) => (
    <IconWrapper {...props}>
        <defs>
            <radialGradient id="orbGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
                <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
            </radialGradient>
            <filter id="orbGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <circle cx="12" cy="12" r="10" fill="url(#orbGradient)" filter="url(#orbGlow)" />
    </IconWrapper>
);

export const ObeliskIcon = (props: React.HTMLAttributes<SVGElement>) => (
    <IconWrapper viewBox="0 0 100 280" {...props}>
        <defs>
            <linearGradient id="obeliskGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#111" />
                <stop offset="50%" stopColor="#333" />
                <stop offset="100%" stopColor="#111" />
            </linearGradient>
            <filter id="obeliskGlow">
                <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="hsl(var(--primary))" floodOpacity="0.5" />
            </filter>
        </defs>
        <path d="M40,0 L60,0 L90,270 L10,270 Z" fill="url(#obeliskGradient)" filter="url(#obeliskGlow)" />
        <path d="M40,0 L60,0 L50,10 Z" fill="hsl(var(--accent))" />
    </IconWrapper>
);

export const CanadianMapleLeafIcon = (props: React.HTMLAttributes<SVGElement>) => (
    <IconWrapper viewBox="0 0 20 20" {...props}>
        <path fill="currentColor" d="M16.9,8.2l-6-2.7c-0.1,0-0.1-0.1-0.2-0.1H10h-0.2c-0.1,0-0.1,0-0.2,0.1l-6,2.7c-0.4,0.2-0.6,0.6-0.5,1 c0.2,0.4,0.6,0.6,1,0.5L8.5,8.4V11l-3.8,1.9c-0.4,0.2-0.6,0.6-0.5,1c0.2,0.4,0.6,0.6,1,0.5L9,12.3v2.4l-2.6,1.3 c-0.4,0.2-0.6,0.6-0.5,1c0.2,0.4,0.6,0.6,1,0.5l2.1-1.1V18h1v-1.9l2.1,1.1c0.4,0.2,0.8,0,1-0.5c0.2-0.4,0-0.8-0.5-1L11,14.7 V12.3l4.3,2.1c0.4,0.2,0.8,0,1-0.5c0.2-0.4,0-0.8-0.5-1L11.5,11V8.4l4.3,1.3c0.4,0.2,0.8,0,1-0.5C17.5,8.8,17.3,8.4,16.9,8.2z" />
    </IconWrapper>
);
