import * as React from 'react';
import { cn } from '@/lib/utils';

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div className={cn('glass-card p-6 md:p-8', className)}>
      {children}
    </div>
  );
}
