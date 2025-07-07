
"use client"
import * as React from "react"
import { Bar, BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { PageHeader } from "@/components/page-header";
import { GlassCard } from "@/components/glass-card";
import { Gem, Landmark, BrainCircuit, CreditCard, TrendingUp, Target, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const marketData = [
  { market: "SMB Software", TAM: 186.97, SAM: 46.74 },
  { market: "Vertical SaaS", TAM: 157.40, SAM: 39.35 },
  { market: "AI Agents", TAM: 7.84, SAM: 7.84 },
  { market: "Low-Code", TAM: 32.00, SAM: 8.00 },
];

const marketChartConfig = {
  TAM: {
    label: "Total Addressable Market (TAM)",
    color: "hsl(var(--secondary))",
  },
  SAM: {
    label: "Serviceable Addressable Market (SAM)",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig

const financialData = [
    { year: "Year 1", revenue: 1.58 },
    { year: "Year 2", revenue: 8.8 },
    { year: "Year 3", revenue: 37.0 },
    { year: "Year 4", revenue: 117.0 },
    { year: "Year 5", revenue: 290.0 },
];

const financialChartConfig = {
    revenue: {
        label: "Total Revenue ($M)",
        color: "hsl(var(--accent))",
    },
} satisfies ChartConfig

const kpis = [
    {
        icon: <TrendingUp className="h-8 w-8 text-accent" />,
        title: "Generational LTV:CAC",
        description: "Achieving a target LTV:CAC ratio greater than 5:1 by Year 5, indicating a hyper-efficient, self-sustaining growth engine.",
    },
    {
        icon: <Target className="h-8 w-8 text-accent" />,
        title: "Engineered Retention",
        description: "A strategic imperative to drive monthly churn below 2.5%, transforming user adoption into an unbreakable vow of loyalty.",
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-accent" />,
        title: "Funding the Conquest",
        description: "A required $25-40M seed or Series A to finance the initial 24-36 month campaign of market creation and architectural dominance.",
    }
]

const economicPillars = [
    {
        icon: <Gem className="h-8 w-8 text-accent" />,
        title: "ΞCredits & Value Entrapment",
        description: "A proprietary, non-redeemable currency that creates a closed-loop economy, ensuring all value generated remains within the ΛΞVON ecosystem.",
    },
    {
        icon: <Landmark className="h-8 w-8 text-accent" />,
        title: "Multi-Vector Monetization",
        description: "A hybrid model of tiered subscriptions, usage-based billing, marketplace commissions, and embedded financial services that captures value at every layer of the OS.",
    },
    {
        icon: <BrainCircuit className="h-8 w-8 text-accent" />,
        title: "The Psychological Engine",
        description: "Sophisticated engagement mechanics (Psyche-Calibration Engine, Sine-Rhythm Engine) designed to foster deep user commitment and mitigate churn.",
    },
    {
        icon: <CreditCard className="h-8 w-8 text-accent" />,
        title: "The Sovereign's Sigil",
        description: "A physical scepter of command that bridges digital wealth to real-world purchasing power, reinforcing the supreme value of ΞCredits and capturing a significant Transmutation Tithe.",
    }
]

export default function TreasuryPage() {
  return (
    <div className="container mx-auto px-4">
      <PageHeader
        title="The Treasury"
        subtitle="An Invitation to Forge the Post-SaaS Economy. This is not an investment memo. This is a declaration of economic conquest."
      />

      <section className="py-16">
        <h2 className="text-center font-headline text-3xl font-bold md:text-4xl text-glow mb-4">THE CORE THESIS: A CATEGORY OF ONE</h2>
        <p className="text-center max-w-3xl mx-auto text-lg text-foreground/80 mb-12">
          The modern enterprise is drowning in the very tools meant to save it. This is the SaaS Paradox. ΛΞVON OS is the definitive antidote—a radically integrated, AI-native operating system designed not to compete, but to make the entire fragmented SaaS market obsolete. We offer not another tool, but a fundamental paradigm shift: from operational chaos to absolute sovereignty.
        </p>
      </section>

      <section className="py-16">
        <h2 className="text-center font-headline text-3xl font-bold md:text-4xl text-glow mb-12">THE ECONOMIC ARCHITECTURE</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-container">
            {economicPillars.map((pillar) => (
                <GlassCard key={pillar.title} className="p-8">
                    <div className="flex items-start gap-4">
                        <div className="mt-1">{pillar.icon}</div>
                        <div>
                        <h3 className="font-headline text-2xl font-bold mb-2">{pillar.title}</h3>
                        <p className="text-foreground/70">{pillar.description}</p>
                        </div>
                    </div>
                </GlassCard>
            ))}
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-center font-headline text-3xl font-bold md:text-4xl text-glow mb-4">THE MARKET OPPORTUNITY</h2>
        <p className="text-center max-w-3xl mx-auto text-lg text-foreground/80 mb-12">
          We are not entering a market; we are creating one. By solving the systemic pain of SaaS sprawl for a massive and underserved SMB segment, we are tapping into a generational opportunity. The agentic economy is the tailwind; our integrated OS is the vessel.
        </p>
        <GlassCard className="p-6">
            <ChartContainer config={marketChartConfig} className="min-h-[200px] w-full">
                <BarChart data={marketData} accessibilityLayer>
                    <CartesianGrid vertical={false} />
                    <XAxis
                    dataKey="market"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 15)}
                    />
                    <YAxis tickFormatter={(tick) => `$${tick}B`} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Bar dataKey="TAM" fill="var(--color-TAM)" radius={4} />
                    <Bar dataKey="SAM" fill="var(--color-SAM)" radius={4} />
                </BarChart>
            </ChartContainer>
        </GlassCard>
      </section>

      <section className="py-16">
        <h2 className="text-center font-headline text-3xl font-bold md:text-4xl text-glow mb-4">THE PATH TO DOMINANCE</h2>
         <p className="text-center max-w-3xl mx-auto text-lg text-foreground/80 mb-12">
          Our 5-year campaign is predicated on audacious but achievable milestones. The model below is not a forecast; it is a war plan. It outlines a clear trajectory to profitability, driven by exponential revenue growth and disciplined focus on key performance indicators.
        </p>
        <div className="perspective-container">
            <GlassCard className="mb-8 p-6">
                <ChartContainer config={financialChartConfig} className="min-h-[200px] w-full">
                    <LineChart data={financialData} accessibilityLayer>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="year"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                        />
                        <YAxis tickFormatter={(tick) => `$${tick}M`} />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
                        <Line
                            dataKey="revenue"
                            type="natural"
                            stroke="var(--color-revenue)"
                            strokeWidth={2}
                            dot={true}
                        />
                    </LineChart>
                </ChartContainer>
            </GlassCard>
            <GlassCard className="p-8">
                <div className="space-y-8">
                    {kpis.map((kpi) => (
                        <div key={kpi.title} className="flex items-start gap-4">
                            <div className="mt-1">{kpi.icon}</div>
                            <div>
                                <h3 className="font-headline text-xl font-bold mb-1">{kpi.title}</h3>
                                <p className="text-foreground/70">{kpi.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </GlassCard>
        </div>
      </section>

       <section className="text-center py-24">
        <div className="perspective-container">
            <GlassCard className="max-w-4xl mx-auto p-8 md:p-12 animate-glow-primary">
            <h2 className="font-headline text-3xl font-bold md:text-4xl text-glow">Fund the Revolution</h2>
            <p className="mt-4 text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
                ΛΞVON OS is a generational opportunity to define the future of enterprise software. We are seeking partners with the capital and the conviction to forge this new reality. This is an invitation to architects of the future, not speculators.
            </p>
            <Button size="lg" className="font-headline text-lg" disabled>
                Contact the Forge (For Accredited Investors)
            </Button>
            </GlassCard>
        </div>
      </section>

    </div>
  );
}
