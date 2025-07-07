import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "ΛΞVON Sanctum",
  description: "The Gateway of Sovereignty. Forged by ΛΞVON.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&family=Lexend:wght@400;500;700&display=swap" rel="stylesheet" />
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
