import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, buildUrl} from "@/shared/routes";
import {type Form, type Submission, type CreateFormRequest } from '@/shared/schema'
import { useToast } from "@/hooks/use-toast";

export function useForms() {
  return useQuery({
    queryKey: [api.forms.list.path],
    queryFn: async () => {
      const res = await fetch(api.forms.list.path);
      if (!res.ok) throw new Error("Failed to fetch forms");
      return api.forms.list.responses[200].parse(await res.json());
    },
  });
}

export function useForm(id: number) {
  return useQuery({
    queryKey: [api.forms.get.path, id],
    queryFn: async () => {
      const url = buildUrl(api.forms.get.path, { id });
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch form");
      return api.forms.get.responses[200].parse(await res.json());
    },
    enabled: !!id,
  });
}

export function useCreateForm() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: CreateFormRequest) => {
      const res = await fetch(api.forms.create.path, {
        method: api.forms.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to create form");
      return api.forms.create.responses[201].parse(await res.json());
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [api.forms.list.path] });
      toast({ title: "Form Created", description: `"${data.name}" is ready to build.` });
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to create form.", variant: "destructive" });
    },
  });
}

export function useUpdateForm() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async ({ id, ...data }: { id: number } & Partial<CreateFormRequest>) => {
      const url = buildUrl(api.forms.update.path, { id });
      const res = await fetch(url, {
        method: api.forms.update.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to update form");
      return api.forms.update.responses[200].parse(await res.json());
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [api.forms.list.path] });
      queryClient.invalidateQueries({ queryKey: [api.forms.get.path, data.id] });
      toast({ title: "Saved", description: "Form changes saved successfully." });
    },
  });
}

export function useSubmitForm() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async ({ id, data }: { id: number; data: Record<string, any> }) => {
      const url = buildUrl(api.forms.submit.path, { id });
      const res = await fetch(url, {
        method: api.forms.submit.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });
      if (!res.ok) throw new Error("Failed to submit form");
      return api.forms.submit.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({ title: "Success!", description: "Your submission has been received." });
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to submit form. Please try again.", variant: "destructive" });
    },
  });
}

export function useFormSubmissions(id: number) {
  return useQuery({
    queryKey: [api.forms.getSubmissions.path, id],
    queryFn: async () => {
      const url = buildUrl(api.forms.getSubmissions.path, { id });
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch submissions");
      return api.forms.getSubmissions.responses[200].parse(await res.json());
    },
    enabled: !!id,
  });
}
