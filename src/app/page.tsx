import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/page-header";
import { GlassCard } from "@/components/glass-card";
import { Zap, Shield, Ban } from "lucide-react";
import Link from "next/link";
import { ObeliskIcon } from "@/components/icons";

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


export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <PageHeader
        title="Your Business Is Trapped"
        subtitle="You are not failing. Your tools are. Drowning in fragmented apps and hidden costs, you are trapped in a dying SaaS ecosystem. The Nexus is your first strike for sovereignty."
      />

      <section className="py-16">
        <h2 className="text-center font-headline text-3xl md:text-4xl text-glow mb-4">THE DOCTRINE DECLARATION</h2>
        <p className="text-center max-w-2xl mx-auto text-lg text-foreground/80 mb-12">
          The war begins here. ΛΞVON OS declares total war on SaaS bloat—exposing:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <GlassCard key={index} className="flex flex-col items-center text-center p-8">
              <div className="mb-6">{problem.icon}</div>
              <h3 className="font-headline text-2xl mb-2">{problem.title}</h3>
              <p className="text-foreground/70">{problem.description}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="py-24 flex flex-col items-center text-center">
        <div className="relative w-64 h-[40rem] flex items-center justify-center">
            <ObeliskIcon className="h-full w-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-t-lg" />
        </div>
        <h2 className="font-headline text-3xl md:text-4xl text-glow mt-8">The Obelisk of Genesis</h2>
        <p className="mt-4 max-w-2xl text-lg text-foreground/80">
          This monolith represents the collective power accumulated within the OS. A testament to the ultimate endgame for Initiates: True Sovereignty.
        </p>
        <p className="mt-8 text-2xl font-headline text-glow animate-pulse">
            "Silence is not absence. It is presence, perfected."
        </p>
      </section>

      <section className="text-center py-24">
        <div className="glass-card max-w-4xl mx-auto p-8 md:p-12">
          <h2 className="font-headline text-3xl md:text-4xl text-glow">Begin Your Vow. Enter the Nexus.</h2>
          <p className="mt-4 text-lg text-foreground/80 mb-2 max-w-2xl mx-auto">
            This is no signup. It’s your initiation. The path to reclaiming your digital domain begins with a vow. It conducts directly within the ΛΞVON OS application. Download the OS. Let BEEP, your Architect's Apprentice, guide you through this sacred ritual, ensuring a seamless entry into your new realm.
          </p>
          <p className="text-sm text-foreground/60 mb-8">
            There is no going back after this step. Your Initiation begins within ΛΞVON OS.
          </p>
          <Button size="lg" className="font-headline text-lg" asChild>
            <Link href="#">Commence The Rite of Invocation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
