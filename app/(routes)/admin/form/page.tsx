'use client'

import { Plus, FileText, Calendar, ChevronRight, BarChart3, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { useCreateForm, useForms } from "@/hooks/use-forms";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { data: forms, isLoading } = useForms();
  const createMutation = useCreateForm();
  const router = useRouter()

  const handleCreate = async () => {
    const newForm = await createMutation.mutateAsync({
      name: "Untitled Form",
      content: [],
      isPublished: false,
    });
    router.push(`/admin/form/builder/${newForm.id}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/50 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="font-display font-bold text-xl tracking-tight">Manage Forms</h1>
          </div>
          <Button onClick={handleCreate} disabled={createMutation.isPending}>
            {createMutation.isPending ? (
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
            ) : (
              <Plus className="w-4 h-4 mr-2" />
            )}
            New Form
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-display font-bold text-foreground">Your Forms</h2>
          <p className="text-muted-foreground mt-2">Manage your forms and view submissions.</p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-48 rounded-2xl bg-muted/50 animate-pulse" />
            ))}
          </div>
        ) : forms && forms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {forms.map((form) => (
              <div 
                key={form.id} 
                className="group relative bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="p-6 flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary/10 text-primary rounded-xl">
                      <FileText className="w-6 h-6" />
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      form.isPublished 
                        ? "bg-green-100 text-green-700" 
                        : "bg-yellow-100 text-yellow-700"
                    }`}>
                      {form.isPublished ? "Published" : "Draft"}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {form.name}
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground mt-4">
                    <Calendar className="w-4 h-4 mr-1.5" />
                    {form.createdAt ? format(new Date(form.createdAt), "MMM d, yyyy") : "Unknown"}
                  </div>
                </div>
                
                <div className="border-t border-border bg-muted/30 p-4 flex items-center justify-between">
                  <Link href={`/admin/form/forms/${form.id}/submissions`} className="text-sm font-medium text-muted-foreground hover:text-foreground flex items-center transition-colors">
                    <BarChart3 className="w-4 h-4 mr-1.5" />
                    View Submissions
                  </Link>
                  <Link href={`/admin/form/builder/${form.id}`} className="text-sm font-semibold text-primary flex items-center hover:underline">
                    Edit Form <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-card rounded-3xl border border-dashed border-border text-center">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-6">
              <FileText className="w-10 h-10 text-muted-foreground/50" />
            </div>
            <h3 className="text-2xl font-bold font-display mb-2">No forms yet</h3>
            <p className="text-muted-foreground max-w-sm mb-8">
              Create your first form to start collecting responses from your users.
            </p>
            <Button size="lg" onClick={handleCreate} disabled={createMutation.isPending}>
              {createMutation.isPending ? "Creating..." : "Create New Form"}
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}
