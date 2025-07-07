"use client";

import { useState, useEffect } from "react";
import { CanadianMapleLeafIcon } from '@/components/icons';

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full py-8 text-center text-sm text-foreground/60">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-2 mb-2">
            <CanadianMapleLeafIcon className="h-5 w-5" />
            <p>Forged in Edmonton, Alberta, Canada.</p>
        </div>
        <p className="text-xs max-w-md mx-auto">
          All physical forging (The Sovereign's Sigil) and core fintech integrations (Interac) will be Canadian, fostering domestic expertise.
        </p>
        {year && <p className="mt-6 font-headline">© {year} ΛΞVON. Sovereignty is Here.</p>}
      </div>
    </footer>
  );
}
