'use client'

import { usePost } from "@/hooks/use-posts";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";

export default function PostDetail() {
    const params = useParams<{ id: string }>();
    const id = parseInt(params?.id || "0");
    const { data: post, isLoading } = usePost(id);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                <h2 className="text-2xl font-bold">Post Not Found</h2>
                <Link href="/posts">
                    <Button>Back to News</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col font-body bg-background">
            <main className="flex-1 py-12">
                <article className="container mx-auto px-4 max-w-4xl">
                    <Link href="/posts">
                        <Button variant="ghost" className="mb-8 hover:bg-muted">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to News
                        </Button>
                    </Link>

                    <div className="flex items-center gap-4 mb-6">
                        <Badge
                            className="text-sm px-3 py-1 capitalize"
                            variant={
                                post.category === 'notice'
                                    ? 'destructive'
                                    : post.category === 'announcement'
                                    ? 'default'
                                    : 'secondary'
                            }
                        >
                            {post.category}
                        </Badge>

                        <div className="flex items-center text-muted-foreground text-sm">
                            <Calendar className="w-4 h-4 mr-2" />
                            {post.createdAt
                                ? format(new Date(post.createdAt), 'MMMM d, yyyy')
                                : 'Recent'}
                        </div>
                    </div>

                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-foreground">
                        {post.title}
                    </h1>

                    <div className="w-full h-px bg-border mb-8" />

                    <div className="prose prose-lg prose-blue max-w-none text-muted-foreground leading-loose">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeSanitize]}
                        >
                            {post.content}
                        </ReactMarkdown>
                    </div>
                </article>
            </main>
        </div>
    );
}
