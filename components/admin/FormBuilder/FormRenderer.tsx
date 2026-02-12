import React, { useState } from "react";
import { FormElement } from "@/shared/schema";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Star, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

interface FormRendererProps {
  elements: FormElement[];
  onSubmit?: (data: Record<string, any>) => void;
  isSubmitting?: boolean;
  submitLabel?: string;
  readOnly?: boolean;
}

export function FormRenderer({
  elements,
  onSubmit,
  isSubmitting = false,
  submitLabel = "Submit Form",
  readOnly = false
}: FormRendererProps) {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [uploadProgress, setUploadProgress] = useState<Record<string, boolean>>({});
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const isUploading = Object.values(uploadProgress).some(Boolean);

  const handleChange = (id: string, value: any) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[id];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (readOnly) return;

    const newErrors: Record<string, string> = {};
    elements.forEach((el) => {
      if (el.required && !formData[el.id] && el.type !== 'header' && el.type !== 'paragraph') {
        newErrors[el.id] = "This field is required";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      // Process file uploads
      const processedData = { ...formData };

      for (const element of elements) {
        if (element.type === 'file' && formData[element.id] instanceof File) {
          setUploadProgress((prev) => ({ ...prev, [element.id]: true }));

          try {
            const { uploadFile } = await import('@/lib/supabase');
            const fileUrl = await uploadFile(formData[element.id] as File);
            processedData[element.id] = fileUrl;
          } catch (uploadError) {
            setErrors((prev) => ({
              ...prev,
              [element.id]: uploadError instanceof Error ? uploadError.message : "File upload failed"
            }));
            setUploadProgress((prev) => ({ ...prev, [element.id]: false }));
            return;
          } finally {
            setUploadProgress((prev) => ({ ...prev, [element.id]: false }));
          }
        }
      }

      onSubmit?.(processedData);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Form submission failed';
      console.error('Form submission error:', error);
      setSubmissionError(errorMessage);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submissionError && (
        <div className="bg-destructive/10 border border-destructive/30 text-destructive px-4 py-3 rounded-md text-sm">
          {submissionError}
        </div>
      )}
      {elements.map((element) => (
        <div key={element.id} className="space-y-2">
          {element.type === "header" && (
            <h2 className="text-2xl font-bold text-foreground mt-4 mb-2">{element.label}</h2>
          )}

          {element.type === "paragraph" && (
            <p className="text-muted-foreground mb-4">{element.label}</p>
          )}

          {element.type !== "header" && element.type !== "paragraph" && (
            <div className="space-y-1.5">
              <label
                htmlFor={element.id}
                className="text-sm font-medium text-foreground block"
              >
                {element.label}
                {element.required && <span className="text-destructive ml-1">*</span>}
              </label>

              {element.type === "text" && (
                <Input
                  id={element.id}
                  disabled={readOnly}
                  placeholder={element.placeholder}
                  value={formData[element.id] || ""}
                  onChange={(e) => handleChange(element.id, e.target.value)}
                  className={errors[element.id] ? "border-destructive focus-visible:ring-destructive" : ""}
                />
              )}

              {element.type === "email" && (
                <Input
                  id={element.id}
                  type="email"
                  disabled={readOnly}
                  placeholder={element.placeholder || "email@example.com"}
                  value={formData[element.id] || ""}
                  onChange={(e) => handleChange(element.id, e.target.value)}
                  className={errors[element.id] ? "border-destructive focus-visible:ring-destructive" : ""}
                />
              )}

              {element.type === "number" && (
                <Input
                  id={element.id}
                  type="number"
                  disabled={readOnly}
                  placeholder={element.placeholder}
                  value={formData[element.id] || ""}
                  onChange={(e) => handleChange(element.id, e.target.value)}
                  className={errors[element.id] ? "border-destructive focus-visible:ring-destructive" : ""}
                />
              )}

              {element.type === "textarea" && (
                <Textarea
                  id={element.id}
                  disabled={readOnly}
                  placeholder={element.placeholder}
                  value={formData[element.id] || ""}
                  onChange={(e) => handleChange(element.id, e.target.value)}
                  className={errors[element.id] ? "border-destructive focus-visible:ring-destructive" : ""}
                />
              )}

              {element.type === "checkbox" && (
                <div className="flex items-center space-x-2 py-2">
                  <Checkbox
                    id={element.id}
                    disabled={readOnly}
                    checked={formData[element.id] || false}
                    onCheckedChange={(checked) => handleChange(element.id, checked)}
                  />
                  <Label htmlFor={element.id} className="text-sm font-normal">
                    {element.label}
                  </Label>
                </div>
              )}

              {element.type === "radio" && (
                <RadioGroup
                  disabled={readOnly}
                  value={formData[element.id] || ""}
                  onValueChange={(val) => handleChange(element.id, val)}
                  className="space-y-2 py-2"
                >
                  {element.options?.map((option, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={`${element.id}-${idx}`} />
                      <Label htmlFor={`${element.id}-${idx}`} className="text-sm font-normal">{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              )}

              {element.type === "select" && (
                <Select
                  disabled={readOnly}
                  value={formData[element.id] || ""}
                  onValueChange={(val) => handleChange(element.id, val)}
                >
                  <SelectTrigger className={errors[element.id] ? "border-destructive focus:ring-destructive" : ""}>
                    <SelectValue placeholder={element.placeholder || "Select an option..."} />
                  </SelectTrigger>
                  <SelectContent>
                    {element.options?.map((option, idx) => (
                      <SelectItem key={idx} value={option}>{option}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}

              {element.type === "slider" && (
                <div className="space-y-4 py-4">
                  <Slider
                    disabled={readOnly}
                    min={element.min || 0}
                    max={element.max || 100}
                    step={element.step || 1}
                    value={[formData[element.id] || element.min || 0]}
                    onValueChange={(vals) => handleChange(element.id, vals[0])}
                  />
                  <div className="text-xs text-muted-foreground text-center font-medium">
                    Value: {formData[element.id] || element.min || 0}
                  </div>
                </div>
              )}

              {element.type === "rating" && (
                <div className="flex gap-2 py-2">
                  {[...Array(element.max || 5)].map((_, i) => {
                    const val = i + 1;
                    const active = (formData[element.id] || 0) >= val;
                    return (
                      <button
                        key={i}
                        type="button"
                        disabled={readOnly}
                        onClick={() => handleChange(element.id, val)}
                        className={cn(
                          "transition-colors",
                          active ? "text-yellow-400" : "text-muted-foreground/30",
                          !readOnly && "hover:text-yellow-400"
                        )}
                      >
                        <Star className={cn("w-6 h-6", active && "fill-current")} />
                      </button>
                    );
                  })}
                </div>
              )}

              {element.type === "date" && (
                <Input
                  id={element.id}
                  type="date"
                  disabled={readOnly}
                  value={formData[element.id] || ""}
                  onChange={(e) => handleChange(element.id, e.target.value)}
                  className={errors[element.id] ? "border-destructive focus-visible:ring-destructive" : ""}
                />
              )}

              {element.type === "file" && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 py-1">
                    <Input
                      id={element.id}
                      type="file"
                      accept={element.accept}
                      disabled={readOnly || uploadProgress[element.id]}
                      onChange={(e) => handleChange(element.id, e.target.files?.[0])}
                      className={cn(
                        "cursor-pointer",
                        errors[element.id] && "border-destructive focus-visible:ring-destructive"
                      )}
                    />
                  </div>
                  {formData[element.id] instanceof File && (
                    <p className="text-xs text-muted-foreground">
                      Selected: {(formData[element.id] as File).name}
                    </p>
                  )}
                  {uploadProgress[element.id] && (
                    <p className="text-xs text-primary flex items-center gap-2">
                      <span className="w-3 h-3 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                      Uploading file...
                    </p>
                  )}
                </div>
              )}

              {errors[element.id] && (
                <p className="text-xs font-medium text-destructive">{errors[element.id]}</p>
              )}
            </div>
          )}
        </div>
      ))}

      {!readOnly && onSubmit && (
        <div className="pt-4">
          <Button
            type="submit"
            disabled={isSubmitting || isUploading}
            className="w-full h-12 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Submitting...
              </span>
            ) : (
              submitLabel
            )}
          </Button>
        </div>
      )}
    </form>
  );
}
