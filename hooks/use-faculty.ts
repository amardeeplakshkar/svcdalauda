import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, buildUrl } from "@/shared/routes";
import { type InsertFaculty } from "@/shared/schema"
import { useToast } from "@/hooks/use-toast";

export function useFacultyList() {
  return useQuery({
    queryKey: [api.faculty.list.path],
    queryFn: async () => {
      const res = await fetch(api.faculty.list.path);
      if (!res.ok) throw new Error("Failed to fetch faculty list");
      return api.faculty.list.responses[200].parse(await res.json());
    },
  });
}

export function useFaculty(id: number) {
  return useQuery({
    queryKey: [api.faculty.get.path, id],
    queryFn: async () => {
      const url = buildUrl(api.faculty.get.path, { id });
      const res = await fetch(url);
      if (res.status === 404) return null;
      if (!res.ok) throw new Error("Failed to fetch faculty member");
      return api.faculty.get.responses[200].parse(await res.json());
    },
    enabled: !isNaN(id),
  });
}

export function useCreateFaculty() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertFaculty) => {
      const res = await fetch(api.faculty.create.path, {
        method: api.faculty.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.faculty.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to create faculty member");
      }
      return api.faculty.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.faculty.list.path] });
      toast({ title: "Success", description: "Faculty member added successfully" });
    },
    onError: (error) => {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    },
  });
}

export function useUpdateFaculty() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async ({ id, ...data }: { id: number } & Partial<InsertFaculty>) => {
      const url = buildUrl(api.faculty.update.path, { id });
      const res = await fetch(url, {
        method: api.faculty.update.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        if (res.status === 404) throw new Error("Faculty not found");
        throw new Error("Failed to update faculty member");
      }
      return api.faculty.update.responses[200].parse(await res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.faculty.list.path] });
      toast({ title: "Success", description: "Faculty member updated" });
    },
    onError: (error) => {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    },
  });
}

export function useDeleteFaculty() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (id: number) => {
      const url = buildUrl(api.faculty.delete.path, { id });
      const res = await fetch(url, { method: api.faculty.delete.method });

      if (!res.ok) {
        if (res.status === 404) throw new Error("Faculty not found");
        throw new Error("Failed to delete faculty member");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.faculty.list.path] });
      toast({ title: "Success", description: "Faculty member removed" });
    },
    onError: (error) => {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    },
  });
}
