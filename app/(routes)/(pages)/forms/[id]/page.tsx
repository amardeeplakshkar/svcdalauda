"use client"

import { useForm, useSubmitForm } from "@/hooks/use-forms";
import { FormRenderer } from "@/components/admin/FormBuilder/FormRenderer";
import { Loader2, CheckCircle2 } from "lucide-react";
import { FormElement } from "@/shared/schema";
import { useParams } from "next/navigation";

export default function PublicForm() {
  const params = useParams<{ id: string }>();
  const formId = Number(params.id);
  const { data: form, isLoading, error } = useForm(formId);
  const submitMutation = useSubmitForm();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !form) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30">
        <div className="text-center p-8 max-w-md">
          <h1 className="text-2xl font-bold text-foreground mb-2">Form not found</h1>
          <p className="text-muted-foreground">This form may have been deleted or the link is incorrect.</p>
        </div>
      </div>
    );
  }

  if (submitMutation.isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center border animate-in fade-in zoom-in duration-300">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Submission Received!</h1>
          <p className="text-muted-foreground mb-6">Thank you for filling out <strong>{form.name}</strong>. Your response has been recorded.</p>
          <button
            onClick={() => window.location.replace('/')}
            className="text-primary hover:underline text-sm font-medium"
          >
            Go To Homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-border/50 overflow-hidden">
          <div className="bg-primary/5 p-8 border-b border-border/50">
            <h1 className="text-3xl font-display font-bold text-foreground mb-2">{form.name}</h1>
            {form.description && <p className="text-muted-foreground">{form.description}</p>}
          </div>

          <div className="p-8">
            <FormRenderer
              elements={form.content as FormElement[]}
              onSubmit={(data) => submitMutation.mutate({ id: formId, data })}
              isSubmitting={submitMutation.isPending}
            />
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          Powered by <span className="font-bold text-foreground">SVGC, Dalauda</span>
        </div>
      </div>
    </div>
  );
}
