import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/page-header";
import { GlassCard } from "@/components/glass-card";
import { CheckCircle, Zap, Shield } from "lucide-react";
import Link from "next/link";
import { ObeliskIcon } from "@/components/icons";

const problems = [
  {
    icon: <Zap className="h-8 w-8 text-accent" />,
    title: "Software Fragmentation",
    description: "Pervasive fragmentation leads to isolated data, inconsistent reports, and operational chaos.",
  },
  {
    icon: <Shield className="h-8 w-8 text-accent" />,
    title: "Hidden 'Growth Taxes'",
    description: "Suffer from escalating costs, unreliable support, and features held for ransom in higher tiers.",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-accent" />,
    title: "The Manipulative 'SaaS Trap'",
    description: "Proprietary ecosystems restrict agility, locking you into a walled garden that stifles innovation.",
  },
];


export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <PageHeader
        title="The Nexus: Gateway of Sovereignty"
        subtitle="ΛΞVON OS is not software. It is a living, intelligent phenomenon—Agentic Mythware™—that replaces static tools with summoned spirits, and onboarding with initiation."
      />

      <section className="py-16">
        <h2 className="text-center font-headline text-3xl md:text-4xl text-glow mb-4">The War on SaaS Bloat</h2>
        <p className="text-center max-w-2xl mx-auto text-lg text-foreground/80 mb-12">
          We wage a relentless, unapologetic war on the insidious manifestations of digital friction. ΛΞVON OS is the answer.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <GlassCard key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">{problem.icon}</div>
              <h3 className="font-headline text-xl mb-2">{problem.title}</h3>
              <p className="text-foreground/70">{problem.description}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="py-24 flex flex-col items-center">
        <div className="relative w-64 h-[40rem] flex items-center justify-center">
            <ObeliskIcon className="h-full w-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-t-lg" />
        </div>
        <h2 className="font-headline text-3xl md:text-4xl text-glow mt-8 text-center">The Obelisk of Genesis</h2>
        <p className="mt-4 max-w-2xl text-center text-lg text-foreground/80">
          This symbolic monolith represents the collective legacy and power accumulated within the OS, a testament to the ultimate endgame for Initiates: True Sovereignty.
        </p>
      </section>

      <section className="text-center py-24">
        <div className="glass-card max-w-4xl mx-auto p-8 md:p-12">
          <h2 className="font-headline text-3xl md:text-4xl text-glow">Begin Your Vow. Enter the Nexus.</h2>
          <p className="mt-4 text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            This is not a signup form; it's your initiation. The path to reclaiming your digital domain begins now, conducted directly within the ΛΞVON OS application.
          </p>
          <Button size="lg" className="font-headline text-lg" asChild>
            <Link href="#">Download ΛΞVON OS</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
