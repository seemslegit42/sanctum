
"use client";

import * as React from "react";
import { PageHeader } from "@/components/page-header";
import { GlassCard } from "@/components/glass-card";
import { Loader2, Mic, SendHorizontal, User, Bot } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { ScrollArea } from "@/components/ui/scroll-area";
import { beep, type BeepInput } from "@/ai/flows/beep-flow";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type Message = {
    role: 'user' | 'model';
    content: string;
}

export default function BeepContent() {
    const conversationRef = React.useRef<HTMLDivElement>(null);
    const [input, setInput] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);
    const [messages, setMessages] = React.useState<Message[]>([
        { role: 'model', content: "This Oracle is BEEP, the Triune Voice of Intent. Present your query, Architect. We will translate your will into action." }
    ]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input || loading) return;

        const newMessages: Message[] = [...messages, { role: 'user', content: input }];
        setMessages(newMessages);
        setInput("");
        setLoading(true);
        setError(null);

        try {
            const beepInput: BeepInput = { history: newMessages };
            const result = await beep(beepInput);
            setMessages(prev => [...prev, { role: 'model', content: result.response }]);
        } catch (err) {
            setError("A disturbance in the aether has interrupted our connection. The query has been lost.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };
    
    React.useEffect(() => {
        if (conversationRef.current) {
            conversationRef.current.scrollTo({
                top: conversationRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, [messages]);

    return (
        <div className="container mx-auto px-4">
            <PageHeader
                title="BEEP"
                subtitle="This is the command core. The loyal priesthood. Interface with the Triune Voice of Intent and translate your will into action."
                animationType="dramatic"
            />

            <section className="pb-16 max-w-4xl mx-auto">
                <GlassCard className="h-[70vh] flex flex-col p-4 md:p-6">
                    <ScrollArea className="flex-1 pr-4 -mr-4" ref={conversationRef}>
                        <div className="space-y-6 p-4">
                            {messages.map((message, index) => (
                                <div key={index} className={cn("flex items-start gap-4", message.role === 'user' ? 'justify-end' : 'justify-start')}>
                                    {message.role === 'model' && (
                                        <Avatar className="border-2 border-primary/50">
                                            <div className="bg-background flex items-center justify-center h-full w-full">
                                                <Bot className="h-6 w-6 text-primary" />
                                            </div>
                                        </Avatar>
                                    )}
                                    <div className={cn(
                                        "max-w-md rounded-2xl px-5 py-3 text-base",
                                        message.role === 'user' 
                                            ? "bg-primary/80 text-primary-foreground rounded-br-none" 
                                            : "bg-secondary/50 text-foreground/90 rounded-bl-none"
                                    )}>
                                        <p>{message.content}</p>
                                    </div>
                                    {message.role === 'user' && (
                                        <Avatar>
                                            <AvatarFallback><User/></AvatarFallback>
                                        </Avatar>
                                    )}
                                </div>
                            ))}
                            {loading && (
                                <div className="flex items-start gap-4 justify-start">
                                    <Avatar className="border-2 border-primary/50">
                                        <div className="bg-background flex items-center justify-center h-full w-full">
                                            <Bot className="h-6 w-6 text-primary" />
                                        </div>
                                    </Avatar>
                                    <div className="max-w-md rounded-2xl px-5 py-3 text-base bg-secondary/50 text-foreground/90 rounded-bl-none">
                                        <Loader2 className="animate-spin text-primary" />
                                    </div>
                                </div>
                            )}
                        </div>
                    </ScrollArea>
                    <div className="mt-4 border-t border-border pt-4">
                        {error && <Alert variant="destructive" className="mb-4 text-left"><AlertTitle>Connection Unstable</AlertTitle><AlertDescription>{error}</AlertDescription></Alert>}
                        <form onSubmit={handleSubmit} className="flex gap-2 items-center">
                            <Button type="button" variant="ghost" size="icon" className="animate-mic-pulse hover:bg-accent/20" aria-label="Use Microphone">
                                <Mic className="text-accent" />
                            </Button>
                            <Input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Present your query, Architect..."
                                disabled={loading}
                                className="text-base h-11"
                            />
                            <Button type="submit" disabled={loading || !input} size="icon" className="h-11 w-11 flex-shrink-0">
                                {loading ? <Loader2 className="animate-spin" /> : <SendHorizontal />}
                                <span className="sr-only">Send Message</span>
                            </Button>
                        </form>
                    </div>
                </GlassCard>
            </section>
        </div>
    );
}
