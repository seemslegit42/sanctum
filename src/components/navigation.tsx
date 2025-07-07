
"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Microphone } from "lucide-react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { cn } from "@/lib/utils";
import { OrbIcon } from "@/components/icons";
import { Button } from "./ui/button";

const navLinks = [
  { href: "/", label: "The Nexus" },
  { href: "/pantheon", label: "The Pantheon" },
  { href: "/aegis-post", label: "The Aegis Post" },
  { href: "/chancel", label: "The Chancel" },
  { href: "/docs", label: "The Scriptorium" },
  { href: "/treasury", label: "The Treasury" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);
  const [vuiMessage, setVuiMessage] = React.useState("Say a command to navigate.");
  const pathname = usePathname();
  const router = useRouter();

  // --- Voice Navigation Logic ---
  const commands = [
    // Page navigation commands
    ...navLinks.flatMap(link => ([
      { command: `go to ${link.label.toLowerCase()}`, callback: () => router.push(link.href) },
      { command: `navigate to ${link.label.toLowerCase()}`, callback: () => router.push(link.href) },
      { command: `show me ${link.label.toLowerCase()}`, callback: () => router.push(link.href) },
      { command: `${link.label.toLowerCase()}`, callback: () => router.push(link.href) },
    ])),
    // Menu control commands
    { command: 'close menu', callback: () => setIsOpen(false) },
    { command: 'close', callback: () => setIsOpen(false) },
    { command: 'exit', callback: () => setIsOpen(false) },
  ];

  const {
    transcript,
    listening,
    resetTranscript,
    finalTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition({ commands });

  // Provide feedback for unrecognized commands
  React.useEffect(() => {
    if (finalTranscript) {
      // Check if any command was successfully executed by the library
      const wasCommandRecognized = commands.some(c => finalTranscript.toLowerCase().includes(c.command as string));

      if (!wasCommandRecognized) {
        setVuiMessage(`Command not recognized: "${finalTranscript}"`);
        const timer = setTimeout(() => {
            if (listening) setVuiMessage("Listening...");
            else setVuiMessage("Say a command to navigate.");
        }, 3000);
        return () => clearTimeout(timer);
      }
      resetTranscript();
    }
  }, [finalTranscript, resetTranscript, commands, listening]);


  // --- Standard Component Logic ---
  React.useEffect(() => { setIsMounted(true); }, []);

  React.useEffect(() => {
    // When route changes, close menu and stop listening
    setIsOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setVuiMessage("Say a command to navigate.");
    } else {
      document.body.style.overflow = 'auto';
      SpeechRecognition.stopListening();
      resetTranscript();
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen, resetTranscript]);


  const toggleListening = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      resetTranscript();
      setVuiMessage("Listening...");
      SpeechRecognition.startListening({ continuous: false });
    }
  };

  // Update message when listening state changes
  React.useEffect(() => {
    if(!listening && vuiMessage === "Listening...") {
      setVuiMessage("Say a command to navigate.");
    }
  },[listening, vuiMessage])


  if (!isMounted) {
    return <div className="fixed bottom-6 right-6 z-50 h-16 w-16" />;
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110 active:scale-90"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      >
        <OrbIcon className="absolute inset-0 h-full w-full" />
        <div className="relative h-8 w-8">
          <Menu className={cn("absolute h-8 w-8 transition-all duration-300", isOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100')} />
          <X className={cn("absolute h-8 w-8 transition-all duration-300", isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50')} />
        </div>
      </button>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/50 backdrop-blur-xl transition-opacity duration-500",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      >
        <div className="flex h-full w-full items-center justify-center" onClick={e => e.stopPropagation()}>
          <nav>
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <li
                  key={link.href}
                  className="transition-all duration-300"
                  style={{
                    transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                    opacity: isOpen ? 1 : 0,
                    transitionDelay: isOpen ? `${i * 100}ms` : '0ms'
                  }}
                >
                  <Link href={link.href} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
                    <span className={cn(
                      "font-headline text-4xl md:text-5xl text-foreground/70 transition-all duration-300 hover:text-foreground hover:text-glow hover:-translate-y-1 focus-visible:text-glow focus-visible:-translate-y-1",
                      pathname === link.href && "text-foreground text-glow"
                    )}>
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Voice User Interface */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-full max-w-md text-center">
            {browserSupportsSpeechRecognition ? (
              <>
                <Button
                  onClick={toggleListening}
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "rounded-full h-20 w-20 bg-secondary/20 hover:bg-secondary/40 text-accent transition-all duration-300",
                    listening && "animate-mic-pulse text-glow"
                  )}
                  aria-label={listening ? "Stop listening for voice commands" : "Activate voice navigation"}
                >
                  <Microphone className="h-8 w-8" />
                </Button>
                <div
                  role="status"
                  aria-live="polite"
                  className="mt-4 h-12 text-lg text-foreground/80 transition-opacity"
                >
                  <p>{transcript || vuiMessage}</p>
                </div>
              </>
            ) : (
              <p className="text-foreground/60">Voice navigation is not supported by your browser.</p>
            )}
          </div>

        </div>
      </div>
    </>
  );
}
