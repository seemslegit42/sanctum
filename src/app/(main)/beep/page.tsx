
import type { Metadata } from 'next';
import BeepContent from './beep-content';

export const metadata: Metadata = {
    title: "BEEP: The Triune Voice of Intent",
    description: "Interface with BEEP, the command core of ΛΞVON OS. Translate your intent into action through the Triune Voice.",
    openGraph: {
        title: "BEEP: The Triune Voice of Intent",
        description: "Interface with BEEP, the command core of ΛΞVON OS. Translate your intent into action through the Triune Voice.",
    }
};

export default function BeepPage() {
    return <BeepContent />;
}
