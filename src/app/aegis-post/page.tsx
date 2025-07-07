import { PageHeader } from "@/components/page-header";
import { GlassCard } from "@/components/glass-card";
import { ShieldCheck, Bot, DatabaseZap, Lock } from "lucide-react";
import { AegisIcon } from "@/components/icons";

const features = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-accent" />,
    title: "Multi-Phased Threat Detection",
    description: "Combines rules-based logic with advanced, ML-powered analysis via Vertex AI to neutralize threats before they manifest.",
  },
  {
    icon: <Bot className="h-8 w-8 text-accent" />,
    title: "Agent Governance",
    description: "Continuously monitors Agent Integrity Certifications, ensuring every action taken within the OS is verified and authorized.",
  },
  {
    icon: <DatabaseZap className="h-8 w-8 text-accent" />,
    title: "Data Integrity Protocol",
    description: "Guarantees immutability and trustworthiness through Aegis-signed logs and atomic transactions, preserving the sanctity of your data.",
  },
  {
    icon: <Lock className="h-8 w-8 text-accent" />,
    title: "Zero-Trust Architecture",
    description: "Operates on a foundational principle of 'never trust, always verify,' securing your digital domain at every possible vector.",
  },
];

export default function AegisPostPage() {
  return (
    <div className="container mx-auto px-4">
      <PageHeader
        title="The Aegis Post"
        subtitle="The bastion of digital defense. Aegis delivers 'USER FRIENDLY & BRAINLESS' cybersecurity, making complex threats invisible and irrelevant to the busy executive."
      />

      <section className="py-16">
        <div className="flex justify-center mb-16">
            <AegisIcon className="h-48 w-48" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <GlassCard key={feature.title}>
              <div className="flex items-start gap-4">
                <div className="mt-1">{feature.icon}</div>
                <div>
                  <h3 className="font-headline text-xl mb-2">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
}
