import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, buildUrl } from "@/shared/routes";
import {type InsertPost } from "@/shared/schema";
import { useToast } from "@/hooks/use-toast";

export function usePostList(category?: "blog" | "announcement" | "notice") {
  return useQuery({
    queryKey: [api.posts.list.path, category],
    queryFn: async () => {
      const url = new URL(api.posts.list.path, window.location.origin);
      if (category) {
        url.searchParams.set("category", category);
      }
      const res = await fetch(url.toString());
      if (!res.ok) throw new Error("Failed to fetch posts");
      return api.posts.list.responses[200].parse(await res.json());
    },
  });
}

export function usePost(id: number) {
  return useQuery({
    queryKey: [api.posts.get.path, id],
    queryFn: async () => {
      const url = buildUrl(api.posts.get.path, { id });
      const res = await fetch(url);
      if (res.status === 404) return null;
      if (!res.ok) throw new Error("Failed to fetch post");
      return api.posts.get.responses[200].parse(await res.json());
    },
    enabled: !isNaN(id),
  });
}

export function useCreatePost() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertPost) => {
      const res = await fetch(api.posts.create.path, {
        method: api.posts.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        if (res.status === 400) {
          const error = api.posts.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to create post");
      }
      return api.posts.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.posts.list.path] });
      toast({ title: "Success", description: "Post published successfully" });
    },
    onError: (error) => {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    },
  });
}

export function useUpdatePost() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async ({ id, ...data }: { id: number } & Partial<InsertPost>) => {
      const url = buildUrl(api.posts.update.path, { id });
      const res = await fetch(url, {
        method: api.posts.update.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        if (res.status === 404) throw new Error("Post not found");
        throw new Error("Failed to update post");
      }
      return api.posts.update.responses[200].parse(await res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.posts.list.path] });
      toast({ title: "Success", description: "Post updated" });
    },
    onError: (error) => {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    },
  });
}

export function useDeletePost() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (id: number) => {
      const url = buildUrl(api.posts.delete.path, { id });
      const res = await fetch(url, { method: api.posts.delete.method });
      
      if (!res.ok) {
        if (res.status === 404) throw new Error("Post not found");
        throw new Error("Failed to delete post");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.posts.list.path] });
      toast({ title: "Success", description: "Post deleted" });
    },
    onError: (error) => {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    },
  });
}
