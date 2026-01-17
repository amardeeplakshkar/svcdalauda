"use client"

import { useForm, useFormSubmissions } from "@/hooks/use-forms";
import { Loader2, ArrowLeft, Download, Table as TableIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormElement } from "@/shared/schema";
import { format } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function Submissions() {
  const params = useParams<{ id: string }>();
  const formId = Number(params.id);

  const { data: form, isLoading: isFormLoading } = useForm(formId);
  const { data: submissions, isLoading: isSubmissionsLoading } = useFormSubmissions(formId);

  if (isFormLoading || isSubmissionsLoading) {
    return <div className="h-screen flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>;
  }

  if (!form) return <div>Form not found</div>;

  // Filter only input fields for columns (exclude headers/paragraphs)
  const columns = (form.content as FormElement[]).filter(el =>
    el.type !== 'header' && el.type !== 'paragraph'
  );

  const handleExport = () => {
    if (!submissions) return;

    // Simple CSV export
    const headers = ["Submitted At", ...columns.map(c => c.label)];
    const rows = submissions.map(sub => {
      const date = sub.submittedAt ? format(new Date(sub.submittedAt), "yyyy-MM-dd HH:mm:ss") : "";
      const values = columns.map(col => {
        const val = (sub.data as Record<string, any>)[col.id];
        return val ? `"${String(val).replace(/"/g, '""')}"` : "";
      });
      return [date, ...values].join(",");
    });

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${form.name}_submissions.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-white/50 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/admin" className="p-2 hover:bg-muted rounded-full transition-colors text-muted-foreground">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="font-display font-bold text-lg">{form.name}</h1>
              <p className="text-xs text-muted-foreground">Submissions</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleExport} disabled={!submissions?.length}>
              <Download className="w-4 h-4 mr-2" /> Export CSV
            </Button>
            <Link href={`/admin/form/builder/${formId}`}>
              <Button size="sm">Edit Form</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-card rounded-xl border shadow-sm overflow-hidden">
          <div className="p-6 border-b flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TableIcon className="w-5 h-5 text-primary" />
              <h2 className="font-semibold text-lg">Responses ({submissions?.length || 0})</h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[180px]">Submitted At</TableHead>
                  {columns.map((col) => (
                    <TableHead key={col.id} className="min-w-[150px]">{col.label}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {submissions && submissions.length > 0 ? (
                  submissions.map((submission) => (
                    <TableRow key={submission.id}>
                      <TableCell className="text-muted-foreground font-mono text-xs">
                        {submission.submittedAt ? format(new Date(submission.submittedAt), "MMM d, yyyy HH:mm") : "-"}
                      </TableCell>
                      {columns.map((col) => (
                        <TableCell key={col.id}>
                          {String((submission.data as Record<string, any>)[col.id] || "-")}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={columns.length + 1} className="h-32 text-center text-muted-foreground">
                      No submissions yet.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
    </div>
  );
}
