import { cn } from "@/lib/utils";
import React from "react";

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

const SigilWrapper = ({ className, children, ...props }: React.HTMLAttributes<SVGElement>) => (
    <IconWrapper viewBox="0 0 64 64" className={cn("text-accent", className)} {...props}>
        <defs>
            <linearGradient id="sigilGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
            <filter id="sigilGlow">
                <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="hsl(var(--accent))" floodOpacity="0.7" />
            </filter>
        </defs>
        <g filter="url(#sigilGlow)">
            {children}
        </g>
    </IconWrapper>
)

export const BeepIcon = (props: React.HTMLAttributes<SVGElement>) => (
    <SigilWrapper {...props}><path fill="url(#sigilGradient)" stroke="hsl(var(--foreground))" d="M32 2 L38 10 L32 18 L26 10 Z M32 46 L38 54 L32 62 L26 54 Z M18 32 L10 38 L2 32 L10 26 Z M54 32 L46 38 L38 32 L46 26 Z M32,22 C26.477,22 22,26.477 22,32 C22,37.523 26.477,42 32,42 C37.523,42 42,37.523 42,32 C42,26.477 37.523,22 32,22 Z" /></SigilWrapper>
);

export const LoomIcon = (props: React.HTMLAttributes<SVGElement>) => (
    <SigilWrapper {...props}><path fill="url(#sigilGradient)" stroke="hsl(var(--foreground))" d="M12 12 L52 12 L52 52 L12 52 Z M12 12 L32 32 L12 52 Z M52 12 L32 32 L52 52 Z"  fillRule="evenodd"/></SigilWrapper>
);

export const AegisIcon = (props: React.HTMLAttributes<SVGElement>) => (
    <SigilWrapper {...props}><path fill="url(#sigilGradient)" stroke="hsl(var(--foreground))" d="M32 2 C14 2 2 14 2 32 C2 50 14 62 32 62 C50 62 62 50 62 32 C62 14 50 2 32 2 Z M32 12 L40 20 L32 28 L24 20 Z M32 36 L40 44 L32 52 L24 44 Z" fillRule="evenodd" /></SigilWrapper>
);

export const KlepsydraIcon = (props: React.HTMLAttributes<SVGElement>) => (
    <SigilWrapper {...props}><path fill="url(#sigilGradient)" stroke="hsl(var(--foreground))" d="M12 2 L52 2 L32 32 Z M12 62 L52 62 L32 32 Z" /></SigilWrapper>
);

export const MicroAppsIcon = (props: React.HTMLAttributes<SVGElement>) => (
    <SigilWrapper {...props}><path fill="url(#sigilGradient)" stroke="hsl(var(--foreground))" d="M16,16 L32,2 L48,16 L48,48 L32,62 L16,48 Z M32,32 m -6,0 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0" /></SigilWrapper>
);

export const PantheonIcon = (props: React.HTMLAttributes<SVGElement>) => (
    <SigilWrapper {...props}><path fill="url(#sigilGradient)" stroke="hsl(var(--foreground))" d="M2,32 L32,2 L62,32 L32,62 Z" /></SigilWrapper>
);
