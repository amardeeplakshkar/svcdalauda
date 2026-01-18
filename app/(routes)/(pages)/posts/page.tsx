'use client'

import { usePostList } from "@/hooks/use-posts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2 } from "lucide-react";
import { PostCard } from "@/components/admin/Faculty/PostCard";

export default function BlogList() {
  const { data: posts, isLoading } = usePostList();

  const blogs = posts?.filter(p => p.category === 'blog') || [];
  const announcements = posts?.filter(p => p.category === 'announcement') || [];
  const notices = posts?.filter(p => p.category === 'notice') || [];

  return (
    <div className="min-h-screen flex flex-col font-body">      
      <div className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">Campus News & Updates</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            Stay informed about the latest happenings, academic notices, and insightful articles.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 -mt-8">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="bg-card border shadow-lg h-auto p-1 rounded-xl mb-12 flex-wrap">
            <TabsTrigger value="all" className="rounded-lg py-3 px-6 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">All Updates</TabsTrigger>
            <TabsTrigger value="blogs" className="rounded-lg py-3 px-6 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Blogs</TabsTrigger>
            <TabsTrigger value="announcements" className="rounded-lg py-3 px-6 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Announcements</TabsTrigger>
            <TabsTrigger value="notices" className="rounded-lg py-3 px-6 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Notices</TabsTrigger>
          </TabsList>

          {isLoading ? (
             <div className="flex justify-center py-20">
               <Loader2 className="h-10 w-10 animate-spin text-primary" />
             </div>
          ) : (
            <>
              <TabsContent value="all" className="mt-0">
                <div className="grid md:grid-cols-3 gap-8">
                  {posts?.map(post => <PostCard key={post.id} post={post} />)}
                </div>
              </TabsContent>
              <TabsContent value="blogs" className="mt-0">
                <div className="grid md:grid-cols-3 gap-8">
                  {blogs.map(post => <PostCard key={post.id} post={post} />)}
                </div>
              </TabsContent>
              <TabsContent value="announcements" className="mt-0">
                <div className="grid md:grid-cols-3 gap-8">
                  {announcements.map(post => <PostCard key={post.id} post={post} />)}
                </div>
              </TabsContent>
              <TabsContent value="notices" className="mt-0">
                <div className="grid md:grid-cols-3 gap-8">
                  {notices.map(post => <PostCard key={post.id} post={post} />)}
                </div>
              </TabsContent>
            </>
          )}
        </Tabs>
      </div>
    </div>
  );
}
