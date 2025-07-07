import * as React from 'react';

type PageHeaderProps = {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
};

export function PageHeader({ title, subtitle, children }: PageHeaderProps) {
  return (
    <header className="text-center py-16 md:py-24">
      <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl text-glow">{title}</h1>
      <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">{subtitle}</p>
      <div className="mt-8 w-48 h-px mx-auto bg-gradient-to-r from-transparent via-accent to-transparent" />
      {children}
    </header>
  );
}
