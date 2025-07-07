"use client"
import Link from "next/link";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar"
import { ScrollArea } from "@/components/ui/scroll-area";
import { Book, Code, Shield, Atom, Workflow, BrainCircuit, Rocket, Microscope, Users, CircleDollarSign } from "lucide-react";
import { PageHeader } from "@/components/page-header";

const docSections = [
    { title: "Architect's Genesis Protocol", icon: <Code/>, subItems: ["Environment Setup", "Database Seeding", "Running Services", "App Launch"] },
    { title: "The Core Doctrine", icon: <Book/>, subItems: ["Agentic Mythware™", "Sovereignty-as-a-Service™", "The Silence of True Automation", "Ancient Roman Glass Aesthetic"] },
    { title: "Nexus Architecture", icon: <Workflow/>, subItems: ["System Overview", "Microservices", "Tech Stack"] },
    { title: "The Agentic Pantheon", icon: <BrainCircuit/>, subItems: ["BEEP's Triune Voice", "Swarm Orchestration", "Tool Registry", "Agent Profiles"] },
    { title: "The Loom of Fates", icon: <Users/>, subItems: ["Loom Studio", "KLEPSYDRA Engine", "ΞCredits", "Folly Instruments", "Obelisk Marketplace"] },
    { title: "The Aegis Protocols", icon: <Shield/>, subItems: ["Threat Detection", "Agent Governance", "Data Integrity", "Zero-Trust Architecture"] },
    { title: "The Micro-App Canvas", icon: <Atom/>, subItems: ["SDK", "Canvas UX Laws", "Mobile UX Guidelines", "Verdigris Interface Protocol™"] },
    { title: "Operational Scrolls", icon: <Rocket/>, subItems: ["Deployment Runbook", "Monitoring", "Debugging", "Testing"] },
];

export default function DocsPage() {
    return (
        <SidebarProvider>
            <Sidebar>
                <SidebarHeader>
                    <h2 className="font-headline text-2xl text-glow p-2">Scriptorium</h2>
                </SidebarHeader>
                <ScrollArea className="flex-1">
                    <SidebarContent>
                        <SidebarMenu>
                            {docSections.map((section) => (
                                <SidebarMenuItem key={section.title}>
                                    <SidebarMenuButton>
                                        {section.icon}
                                        <span>{section.title}</span>
                                    </SidebarMenuButton>
                                    <SidebarMenuSub>
                                        {section.subItems?.map(sub => (
                                            <SidebarMenuSubItem key={sub}>
                                                <SidebarMenuSubButton asChild>
                                                    <Link href="#">{sub}</Link>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        ))}
                                    </SidebarMenuSub>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarContent>
                </ScrollArea>
            </Sidebar>
            <SidebarInset>
                <div className="container mx-auto px-4 py-8">
                    <div className="flex justify-start mb-8">
                        <SidebarTrigger />
                    </div>
                    <PageHeader 
                        title="The Living Scroll" 
                        subtitle="The intricate details of ΛΞVON OS, meticulously chronicled. This is the source of truth for every technical and philosophical aspect of the system."
                    />
                    <div className="prose prose-invert max-w-none text-foreground/80 mx-auto mt-16 prose-headings:font-headline prose-headings:text-glow prose-headings:text-foreground prose-a:text-accent prose-strong:text-foreground">
                        <h2 id="genesis-protocol">Architect's Genesis Protocol</h2>
                        <p>
                            Welcome, Architect. Your initiation begins. The Genesis Protocol is no mere setup guide; it is a ritual. Attune your environment to the resonant frequencies of the Nexus. Seed the primordial data, awaken the core microservices, and launch the application that becomes an extension of your will. Follow these steps with precision. A stable foundation is paramount.
                        </p>
                        <pre><code className="font-code">{`# 1. Configure Environment
cp .env.example .env

# 2. Seed the Database
npx prisma db seed

# 3. Run AI & Core Services
npm run services:dev

# 4. Launch the Sanctum
npm run dev
`}</code></pre>

                        <h2 id="core-doctrine" className="mt-12">The Core Doctrine</h2>
                        <p>
                           To wield ΛΞVON OS is to understand its soul. The Core Doctrine collects the foundational philosophies that separate our Agentic Mythware™ from mundane software. Learn of Sovereignty-as-a-Service™, a paradigm that elevates you from user to commander. Appreciate The Silence of True Automation, where complexity is handled with unseen precision. Master the principles of the Ancient Roman Glass aesthetic, the visual language of our digital temple. This is the heart of ΛΞVON.
                        </p>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
