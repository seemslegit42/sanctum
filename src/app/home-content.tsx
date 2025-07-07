
"use client";

import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/page-header";
import { GlassCard } from "@/components/glass-card";
import { Zap, Shield, Ban } from "lucide-react";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const InteractiveObelisk = dynamic(() => import('@/components/interactive-obelisk').then(mod => mod.InteractiveObelisk), {
  ssr: false,
  loading: () => <div className="relative w-64 h-[40rem]" />
});


const problems = [
  {
    icon: <Zap className="h-8 w-8 text-accent" />,
    title: "Fragmentation.",
    description: "Pervasive fragmentation leads to isolated data, inconsistent reports, and operational chaos.",
  },
  {
    icon: <Shield className="h-8 w-8 text-accent" />,
    title: "Hidden Growth Taxes.",
    description: "Suffer from escalating costs, unreliable support, and features held for ransom in higher tiers.",
  },
  {
    icon: <Ban className="h-8 w-8 text-accent" />,
    title: "The SaaS Trap.",
    description: "Proprietary ecosystems restrict agility, locking you into a walled garden that stifles innovation.",
  },
];


export default function HomeContent() {
  const declarationSection = useScrollAnimation();
  const obeliskSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();


  return (
    <div className="container mx-auto px-4">
      <PageHeader
        title="Your Business Is Trapped"
        subtitle="You are not failing. Your tools are. Drowning in fragmented apps and hidden costs, you are trapped in a dying SaaS ecosystem. The Nexus is your first strike for sovereignty."
      />

      <section className="py-16" ref={declarationSection.ref}>
        <div className={cn(declarationSection.isInView ? "animate-fade-in-up" : "opacity-0")}>
          <h2 className="text-center font-headline text-3xl font-semibold md:text-4xl text-glow mb-4">THE DOCTRINE DECLARATION</h2>
          <p className="text-center max-w-2xl mx-auto text-lg text-foreground/80 mb-12" style={{ animationDelay: '200ms' }}>
            The war begins here. ΛΞVON OS declares total war on SaaS bloat—exposing:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-container">
          {problems.map((problem, index) => (
             <div
              key={index}
              className={cn(declarationSection.isInView ? 'animate-fade-in-up' : 'opacity-0')}
              style={{ animationDelay: `${200 + index * 150}ms` }}
            >
              <GlassCard className="flex flex-col items-center text-center p-8 h-full">
                <div className="mb-6">{problem.icon}</div>
                <h3 className="font-headline text-2xl font-bold mb-2">{problem.title}</h3>
                <p className="text-foreground/70">{problem.description}</p>
              </GlassCard>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 flex flex-col items-center text-center" ref={obeliskSection.ref}>
        <div className={cn(obeliskSection.isInView ? "animate-fade-in-up" : "opacity-0")}>
            <InteractiveObelisk />
        </div>
        <div className={cn(obeliskSection.isInView ? "animate-fade-in-up" : "opacity-0")} style={{ animationDelay: '200ms' }}>
            <h2 className="font-headline text-3xl font-semibold md:text-4xl text-glow mt-8">The Obelisk of Genesis</h2>
            <p className="mt-4 max-w-2xl text-lg text-foreground/80">
            This monolith represents the collective power accumulated within the OS. A testament to the ultimate endgame for Initiates: True Sovereignty.
            </p>
            <p className="mt-8 text-2xl font-headline text-glow animate-pulse">
                "Silence is not absence. It is presence, perfected."
            </p>
        </div>
      </section>

      <section className="text-center py-24" ref={ctaSection.ref}>
        <div className={cn(ctaSection.isInView ? "animate-fade-in-up" : "opacity-0")}>
          <GlassCard className="max-w-4xl mx-auto p-8 md:p-12 animate-glow-primary">
            <h2 className="font-headline text-3xl font-semibold md:text-4xl text-glow">Begin Your Vow. Enter the Nexus.</h2>
            <p className="mt-4 text-lg text-foreground/80 mb-2 max-w-2xl mx-auto">
              This is no signup. It’s your initiation. The path to reclaiming your digital domain begins with a vow. It conducts directly within the ΛΞVON OS application. Download the OS. Let BEEP, your Architect's Apprentice, guide you through this sacred ritual, ensuring a seamless entry into your new realm.
            </p>
            <p className="text-sm text-foreground/60 mb-8">
              There is no going back after this step. Your Initiation begins within ΛΞVON OS.
            </p>
            <Button size="lg" className="font-headline text-lg" asChild>
              <Link href="/docs#genesis-protocol">Commence The Rite of Invocation</Link>
            </Button>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
