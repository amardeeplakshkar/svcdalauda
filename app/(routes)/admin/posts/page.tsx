'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { usePostList, useCreatePost, useUpdatePost, useDeletePost } from "@/hooks/use-posts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertPostSchema, type InsertPost, type Post } from "@/shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Plus, Pencil, Trash2, Search, Loader2, Link } from "lucide-react";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { AdminLayout } from "@/components/admin/Faculty/AdminLayout";
import { useRouter } from "next/navigation";

export default function ManagePosts() {
  const { data: posts, isLoading } = usePostList();
  const deleteMutation = useDeletePost();
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const router = useRouter()
  const filteredPosts = posts?.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this post?")) {
      deleteMutation.mutate(id);
    }
  };

  const openEdit = (p: Post) => {
    setEditingPost(p);
    setIsOpen(true);
  };

  const openPost = (p: Post) => {
    router.push(`/posts/${p.id}`)
  };

  const openCreate = () => {
    setEditingPost(null);
    setIsOpen(true);
  };

  return (
    <AdminLayout>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="font-display text-3xl font-bold">Manage Content</h1>
          <p className="text-muted-foreground">Blogs, announcements, and notices.</p>
        </div>
        <Button onClick={openCreate} className="shadow-lg shadow-primary/20">
          <Plus className="w-4 h-4 mr-2" /> Create Post
        </Button>
      </div>

      <div className="bg-card border rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 border-b bg-muted/20">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search posts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 bg-background"
            />
          </div>
        </div>

        {isLoading ? (
          <div className="p-20 flex justify-center">
            <Loader2 className="animate-spin text-primary" />
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[400px]">Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPosts?.map((p) => (
                <TableRow key={p.id}>
                  <TableCell className="font-medium truncate max-w-[400px]">{p.title}</TableCell>
                  <TableCell>
                    <Badge variant={
                      p.category === 'notice' ? 'destructive' :
                        p.category === 'announcement' ? 'default' : 'secondary'
                    }>
                      {p.category}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {p.createdAt ? new Date(p.createdAt).toLocaleDateString() : '-'}
                  </TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button variant="ghost" size="icon" onClick={() => openPost(p)}>
                      <Link className="w-4 h-4 text-emerald-600" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => openEdit(p)}>
                      <Pencil className="w-4 h-4 text-blue-600" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(p.id)}>
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {filteredPosts?.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                    No posts found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        )}
      </div>

      <PostDialog
        open={isOpen}
        onOpenChange={setIsOpen}
        post={editingPost}
      />
    </AdminLayout>
  );
}

function PostDialog({
  open,
  onOpenChange,
  post
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  post: Post | null;
}) {
  const createMutation = useCreatePost();
  const updateMutation = useUpdatePost();

  const form = useForm<InsertPost>({
    resolver: zodResolver(insertPostSchema),
    defaultValues: {
      title: "", content: "", category: "blog"
    }
  });

  useEffect(() => {
    if (open) {
      if (post) {
        form.reset(post);
      } else {
        form.reset({ title: "", content: "", category: "blog" });
      }
    }
  }, [open, post, form]);

  const onSubmit = async (data: InsertPost) => {
    if (post) {
      await updateMutation.mutateAsync({ id: post.id, ...data });
    } else {
      await createMutation.mutateAsync(data);
    }
    onOpenChange(false);
  };

  const isPending = createMutation.isPending || updateMutation.isPending;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{post ? "Edit Post" : "Create New Post"}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-[1fr_200px] gap-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl><Input {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="blog">Blog</SelectItem>
                        <SelectItem value="announcement">Announcement</SelectItem>
                        <SelectItem value="notice">Notice</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content (HTML supported)</FormLabel>
                  <FormControl>
                    <Textarea {...field} className="min-h-[200px] font-mono text-sm" placeholder="<p>Write your content here...</p>" />
                  </FormControl>
                  <p className="text-xs text-muted-foreground">
                    Tip: You can use basic HTML tags for formatting.
                  </p>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end gap-2 pt-4">
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
              <Button type="submit" disabled={isPending}>
                {isPending ? "Saving..." : (post ? "Update" : "Publish")}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
