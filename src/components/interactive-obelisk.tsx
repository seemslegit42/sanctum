"use client";

import * as React from 'react';
import { ObeliskIcon } from '@/components/icons';

export function InteractiveObelisk() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [style, setStyle] = React.useState<React.CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = (y / height - 0.5) * -10;
    const rotateY = (x / width - 0.5) * 10;

    setStyle({
      transform: `perspective(2000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
      transition: 'transform 0.1s ease-out'
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(2000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)',
      transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)'
    });
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-64 h-[40rem] flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div style={style}>
        <ObeliskIcon className="h-full w-full" style={{ transformStyle: 'preserve-3d' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-t-lg pointer-events-none" />
    </div>
  );
}
