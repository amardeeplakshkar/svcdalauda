import { Badge } from "@/components/ui/badge";
import { Post } from "@/shared/schema";
import { format } from "date-fns";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import Link from "next/link";

export function PostCard({ post }: { post: Post }) {
  return (
    <div className="flex flex-col bg-card rounded-2xl border p-6 shadow-sm hover:shadow-md transition-shadow h-full">
      <div className="flex items-center gap-2 mb-4">
        <Badge variant={
          post.category === 'notice' ? 'destructive' :
          post.category === 'announcement' ? 'default' : 'secondary'
        }>
          {post.category}
        </Badge>
        <div className="flex items-center gap-1.5 text-muted-foreground text-xs ml-auto">
          <Calendar className="w-3.5 h-3.5" />
          {post.createdAt ? format(new Date(post.createdAt), 'MMM d, yyyy') : 'Recently'}
        </div>
      </div>

      <h3 className="font-display text-2xl font-bold mb-3 line-clamp-2 hover:text-primary transition-colors">
        <Link href={`/posts/${post.id}`}>{post.title}</Link>
      </h3>
      
      <p className="text-muted-foreground line-clamp-3 mb-6 flex-1 text-sm leading-relaxed">
        {post.content.replace(/<[^>]*>?/gm, '')}
      </p>

      <Link href={`/posts/${post.id}`} className="inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors group">
        Read More
        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
