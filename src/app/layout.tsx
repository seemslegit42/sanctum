
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.aevon.io'),
  title: {
    default: "ΛΞVON Sanctum: The Operating System for Business Sovereignty",
    template: "%s | ΛΞVON Sanctum",
  },
  description: "ΛΞVON OS is a radically integrated, AI-native operating system designed to make fragmented SaaS obsolete. Reclaim your digital sovereignty.",
  openGraph: {
    title: "ΛΞVON Sanctum: The Operating System for Business Sovereignty",
    description: "ΛΞVON OS is a radically integrated, AI-native operating system designed to make fragmented SaaS obsolete. Reclaim your digital sovereignty.",
    url: "https://www.aevon.io",
    siteName: "ΛΞVON Sanctum",
    images: [
      {
        url: 'https://www.aevon.io/og-image.png', // Update with your actual OG image URL
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "ΛΞVON Sanctum: The Operating System for Business Sovereignty",
    description: "ΛΞVON OS is a radically integrated, AI-native operating system designed to make fragmented SaaS obsolete. Reclaim your digital sovereignty.",
    // siteId: 'yourTwitterSiteId', // Add your Twitter site ID
    // creator: '@yourTwitterHandle', // Add your Twitter handle
    // creatorId: 'yourTwitterCreatorId', // Add your Twitter creator ID
    images: ['https://www.aevon.io/og-image.png'], // Update with your actual OG image URL
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ΛΞVON",
  "url": "https://www.aevon.io",
  "logo": "https://www.aevon.io/logo.png", // Update with your actual logo URL
  "description": "ΛΞVON builds agentic mythware to replace outdated SaaS, offering a unified OS for business sovereignty.",
  "sameAs": [
    // "https://twitter.com/yourTwitterHandle", // Add your social media links
    // "https://www.linkedin.com/company/yourLinkedInHandle"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600;700&family=Lexend:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <div className="relative min-h-screen w-full overflow-x-hidden">
            <div className="absolute top-0 left-0 -z-10 h-full w-full bg-background">
                <div className="absolute inset-0 -z-10 h-full w-full bg-aurora [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <div className="relative z-0 flex min-h-screen flex-col">
                <Navigation />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
