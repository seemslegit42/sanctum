import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
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
  );
}
