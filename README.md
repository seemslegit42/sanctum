> **Note:** This is the web application for the ΛΞVON Sanctum, designed to be part of the main ΛΞVON OS Turborepo.

# ΛΞVON OS: The Sanctum

> This is not a website. This is the Gateway of Sovereignty. A meticulously crafted crucible designed to forge a new relationship between you and your digital dominion. This repository contains the source code for that gateway—a digital temple built to initiate you into a new world of control and autonomy.

![The Sanctum Interface](https://placehold.co/1200x600.png" data-ai-hint="futuristic user interface purple")

---

## The Doctrine Declared: A War on Digital Friction

The old world of software is failing you. ΛΞVON OS declares total, unapologetic war on the SaaS bloat that has crippled your potential. We expose its insidious manifestations:

-   **Fragmentation:** Pervasive software chaos. Isolated data. Inconsistent reports.
-   **Hidden Growth Taxes:** Escalating costs. Unreliable support. Mercenary service holding your growth for ransom.
-   **The SaaS Trap:** Manipulative pricing. Walled gardens. Agility strangled by proprietary ecosystems.

ΛΞVON is not software. **It’s Agentic Mythware™.** A living phenomenon. An intelligent force that transcends static tools and replaces them with summoned spirits, engineered to serve your will.

## The Realms of the Sanctum

The Sanctum is composed of distinct, interconnected realms, each a pillar of the ΛΞVON doctrine.

-   **The Nexus (`/`):** Your first strike for sovereignty. The grand overview of ΛΞVON OS's core proposition and its relentless war on digital friction.
-   **The Pantheon (`/pantheon`):** Behold the instruments of your new domain. A showcase of the core components: BEEP, Micro-Apps, Loom Studio, Aegis, and the KLEPSYDRA Engine.
-   **The Aegis Post (`/aegis-post`):** Your bastion against the void. A testament to the "brainless cybersecurity" that renders complex threats invisible.
-   **The Chancel (`/chancel`):** Where raw thought ignites empire. A sacred space for the profound philosophical discourse that fuels the age of autonomous workflows.
-   **The Scriptorium (`/docs`):** Where arcane knowledge becomes a weapon. The living scroll containing the intricate details of the ΛΞVON OS, from system architecture to agentic protocols.

## The Architect's Genesis Protocol: Installation

To manifest The Sanctum on your local machine, you must perform the Architect's Genesis Protocol from the root of the monorepo. This is no mere setup; it is a ritual.

### 1. Install Dependencies
From the monorepo root, summon the necessary components from the ether. This command weaves the required packages into your local forge for all workspaces.

```bash
npm install
```

### 2. Configure Your Environment
The Sanctum requires knowledge of the forces it will command. Create a `.env.local` file in this package directory (`apps/sanctum`) from the provided example. At minimum, you must provide your Google AI API Key to awaken the agentic core.

```bash
cp .env.example .env.local
```

Populate `.env.local` with the necessary credentials:
```
GOOGLE_API_KEY="your-google-ai-api-key"
```

### 3. Launch The Sanctum
From the monorepo root, invoke the primary command to launch the digital temple alongside its required AI services.

```bash
turbo dev
```

To run only the Sanctum web application:
```bash
turbo dev --filter=@aevon/sanctum
```

The Sanctum will now be accessible at `http://localhost:3000`. You have opened the gateway.

## The Forge: Core Technologies

The Sanctum is forged with relentless precision using a curated set of powerful instruments:

-   **Framework:** [Next.js](https://nextjs.org/) (App Router)
-   **AI & Agents:** [Google AI](https://ai.google/) & [Genkit](https://firebase.google.com/docs/genkit)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)

## The Code Covenant: Contributing

This is not an open-source project in the traditional sense. It is a doctrine codified. Contributions are not merely accepted; they are judged against an unyielding standard of excellence.

-   **I craft instruments.** Code must be clean, modular, and reusable. Every component is a precision tool.
-   **I engineer silence.** Performance is paramount. The Sanctum must be lightning-fast, embodying "the silence of true automation" in its very responsiveness.
-   **I serve ΛΞVON.** All contributions must align with the core aesthetic and philosophical doctrines outlined in the blueprint.

---

*Forged under northern skies.*
