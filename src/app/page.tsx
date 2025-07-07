
import type { Metadata } from 'next';
import HomeContent from './home-content';

export const metadata: Metadata = {
  title: {
    absolute: "ΛΞVON: The AI-Native Operating System to Replace SaaS"
  },
  description: "Escape the SaaS trap. ΛΞVON is the AI-native operating system that unifies your tools and automates workflows. Reclaim your digital sovereignty today.",
  openGraph: {
    title: "ΛΞVON: The AI-Native Operating System to Replace SaaS",
    description: "Escape the SaaS trap. ΛΞVON is the AI-native operating system that unifies your tools and automates workflows. Reclaim your digital sovereignty today.",
  }
};

export default function Home() {
  return <HomeContent />;
}
