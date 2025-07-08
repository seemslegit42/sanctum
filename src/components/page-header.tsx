
"use client";

import * as React from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

type PageHeaderProps = {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
};

export function PageHeader({ title, subtitle, children }: PageHeaderProps) {
  const { ref, isInView } = useScrollAnimation();

  return (
    <header ref={ref} className="text-center py-16 md:py-24 overflow-hidden">
      <h1 className={cn("font-headline text-4xl font-bold md:text-6xl lg:text-7xl text-glow", isInView ? 'animate-fade-in-up' : 'opacity-0')}>
        {title}
      </h1>
      <p className={cn("mt-4 max-w-3xl mx-auto text-lg text-foreground/90", isInView ? 'animate-fade-in-up' : 'opacity-0')} style={{ animationDelay: '200ms' }}>
        {subtitle}
      </p>
      <div 
        className={cn("mt-8 w-48 h-px mx-auto bg-gradient-to-r from-transparent via-accent to-transparent", isInView ? 'animate-fade-in-up' : 'opacity-0')}
        style={{ animationDelay: '400ms' }}
      />
      {children}
    </header>
  );
}
