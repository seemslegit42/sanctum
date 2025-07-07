
"use client";

import { PageHeader } from "@/components/page-header";
import { GlassCard } from "@/components/glass-card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "The Chancel: Doctrine of an Autonomous Age",
    description: "Explore the Chancel, a sacred space for the radical visions and philosophical discourse fueling the age of autonomous workflows and Agentic Mythware™.",
    openGraph: {
        title: "The Chancel: Doctrine of an Autonomous Age",
        description: "Explore the Chancel, a sacred space for the radical visions and philosophical discourse fueling the age of autonomous workflows and Agentic Mythware™.",
    }
};

const articles = [
  {
    title: "The Myth of Multitasking: A Declaration of War on Digital Friction",
    excerpt: "Dissecting the lie that has crippled a generation's productivity and offering a path to the silence of true automation.",
    category: "Doctrine",
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "abstract purple technology",
    slug: "myth-of-multitasking"
  },
  {
    title: "Sovereignty-as-a-Service™: Beyond Ownership to True Command",
    excerpt: "Ownership is a facade. True power is command. Explore the philosophical underpinnings of the new digital sovereignty.",
    category: "Vision",
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "roman statue digital",
    slug: "sovereignty-as-a-service"
  },
  {
    title: "Agentic Mythware™ vs. Soulless Software",
    excerpt: "Software is a tool. Mythware is an ally. An examination of the chasm between static code and living, intelligent agents.",
    category: "Technology",
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "glowing orb forest",
    slug: "agentic-mythware"
  },
  {
    title: "The Aegis Imperative: Brainless Cybersecurity",
    excerpt: "Security is not a burden; it is an extension of your will. Aegis makes enterprise-grade security an intuitive reflex.",
    category: "Security",
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "shield light abstract",
    slug: "aegis-imperative"
  },
];

export default function ChancelPage() {
  const articlesSection = useScrollAnimation();

  return (
    <div className="container mx-auto px-4">
      <PageHeader
        title="The Chancel"
        subtitle="Where raw thought ignites empire. The old world offers static discourse. The Chancel offers radical visions, dissecting industrial decay and forging new paths for sovereign operators."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 py-16 perspective-container" ref={articlesSection.ref}>
        {articles.map((article, index) => (
          <div
            key={article.title}
            className={cn(articlesSection.isInView ? "animate-fade-in-up" : "opacity-0")}
            style={{ animationDelay: `${200 + index * 150}ms` }}
          >
            <GlassCard className="flex flex-col overflow-hidden p-0">
              <div className="relative aspect-video">
                  <Image 
                    src={article.imageUrl} 
                    alt={`Visually represents the concept of: ${article.title}`} 
                    fill 
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover" 
                    data-ai-hint={article.aiHint} 
                  />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <p className="font-headline text-accent text-sm mb-1">{article.category}</p>
                <h3 className="font-headline text-2xl font-semibold mb-3 flex-grow">{article.title}</h3>
                <p className="text-foreground/70 mb-6">{article.excerpt}</p>
                <Link href={`/docs#${article.slug}`} className="inline-flex items-center text-accent font-bold group mt-auto self-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
                  <span className="transition-all group-hover:text-glow">Read Communique</span>
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </GlassCard>
          </div>
        ))}
      </div>
    </div>
  );
}
