import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { GlassCard } from "@/components/glass-card";
import { ArrowRight } from "lucide-react";
import { BeepIcon, LoomIcon, AegisIcon, KlepsydraIcon, MicroAppsIcon, PantheonIcon } from "@/components/icons";

const components = [
  {
    icon: <BeepIcon className="h-16 w-16" />,
    name: "BEEP",
    description: "The conversational command core; your loyal priesthood. BEEP translates your intent into action, orchestrating the full power of the OS through natural language.",
  },
  {
    icon: <MicroAppsIcon className="h-16 w-16" />,
    name: "Micro-Apps",
    description: "The atomic units of utility; summoned spirits. These are not static applications but on-demand tools manifested to perform specific tasks with precision.",
  },
  {
    icon: <LoomIcon className="h-16 w-16" />,
    name: "Loom Studio",
    description: "The Architect's Sanctum; the forge. A powerful interface for designing, observing, and debugging the complex workflows that power your autonomous agents.",
  },
  {
    icon: <AegisIcon className="h-16 w-16" />,
    name: "Aegis",
    description: "The always-on bodyguard. A vigilant security layer providing brainless, enterprise-grade protection for your entire digital domain.",
  },
  {
    icon: <KlepsydraIcon className="h-16 w-16" />,
    name: "KLEPSYDRA Engine",
    description: "The gamified economic heart; the abacus of fates. It governs the flow of resources and rewards, transforming work into a compelling, strategic endeavor.",
  },
];

export default function PantheonPage() {
  return (
    <div className="container mx-auto px-4">
      <PageHeader
        title="The Pantheon"
        subtitle="Behold the instruments of sovereignty. Here, the core components of the Digital Temple are unveiled. Each is a powerful ally in your quest for digital autonomy."
      />
      <div className="flex justify-center mb-16">
        <PantheonIcon className="h-48 w-48"/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16">
        {components.map((component) => (
          <GlassCard key={component.name} className="flex flex-col">
            <div className="flex justify-center mb-4">
                {component.icon}
            </div>
            <h3 className="font-headline text-2xl text-center mb-2 text-glow">{component.name}</h3>
            <p className="text-foreground/70 text-center flex-grow">{component.description}</p>
            <Link href="/docs" className="flex items-center justify-center text-accent font-bold group mt-6">
                Consult the Scriptorium
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
