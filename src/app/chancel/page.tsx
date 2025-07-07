import { PageHeader } from "@/components/page-header";
import { GlassCard } from "@/components/glass-card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const articles = [
  {
    title: "The Myth of Multitasking: A Declaration of War on Digital Friction",
    excerpt: "We dissect the pervasive lie that has crippled productivity for a generation, and offer a path to the silence of true automation.",
    category: "Doctrine",
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "abstract purple technology",
  },
  {
    title: "Sovereignty-as-a-Service™: Beyond Ownership to True Command",
    excerpt: "Ownership is a facade. True power lies in command. Explore the philosophical underpinnings of the new digital sovereignty.",
    category: "Vision",
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "roman statue digital",
  },
  {
    title: "Agentic Mythware™ vs. Soulless Software",
    excerpt: "Software is a tool. Mythware is an ally. An examination of the chasm between static code and living, intelligent agents.",
    category: "Technology",
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "glowing orb forest",
  },
  {
    title: "The Aegis Imperative: Brainless Cybersecurity for the Sovereign Executive",
    excerpt: "Security should not be a burden; it should be an extension of your will. How Aegis makes enterprise-grade security an intuitive reflex.",
    category: "Security",
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "shield light abstract",
  },
];

export default function ChancelPage() {
  return (
    <div className="container mx-auto px-4">
      <PageHeader
        title="The Chancel"
        subtitle="The sacred space for profound discourse and visionary insights into the Age of Autonomous Workflows. Here, we offer radical paths forward for sovereign operators."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 py-16">
        {articles.map((article) => (
          <GlassCard key={article.title} className="flex flex-col overflow-hidden">
            <div className="relative aspect-video">
                <Image src={article.imageUrl} alt={article.title} fill className="object-cover" data-ai-hint={article.aiHint} />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <p className="font-headline text-accent text-sm mb-1">{article.category}</p>
              <h3 className="font-headline text-2xl mb-3 flex-grow">{article.title}</h3>
              <p className="text-foreground/70 mb-6">{article.excerpt}</p>
              <Link href="#" className="flex items-center text-accent font-bold group mt-auto">
                Read Communique
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
