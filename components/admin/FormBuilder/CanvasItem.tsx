import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { cn } from "@/lib/utils";
import { Trash2, GripVertical, Settings2, Calendar, CircleDot, Mail, SlidersHorizontal, Star, Upload } from "lucide-react";
import { FormElement } from "@/shared/schema";

interface CanvasItemProps {
  element: FormElement;
  isSelected: boolean;
  onSelect: (id: string) => void;
  onDelete: (id: string) => void;
}

export function CanvasItem({ element, isSelected, onSelect, onDelete }: CanvasItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: element.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
      <div 
        ref={setNodeRef}
        style={style}
        className={cn(
          "group relative p-6 rounded-2xl border bg-white transition-all duration-200",
          isSelected ? "border-primary ring-2 ring-primary/20 shadow-lg z-10" : "border-transparent hover:border-border shadow-sm",
          isDragging && "opacity-50 shadow-xl scale-105 z-50",
        )}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(element.id);
        }}
      >
        <div className="absolute right-4 top-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          className="p-1.5 hover:bg-destructive/10 text-muted-foreground hover:text-destructive rounded-md transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(element.id);
          }}
        >
          <Trash2 className="w-4 h-4" />
        </button>
        <div {...listeners} {...attributes} className="cursor-move p-1.5 hover:bg-muted rounded-md text-muted-foreground">
          <GripVertical className="w-4 h-4" />
        </div>
      </div>

      <div className="pointer-events-none">
        {element.type === "header" && (
          <h2 className="text-2xl font-bold text-foreground">{element.label || "Header"}</h2>
        )}
        
        {element.type === "paragraph" && (
          <p className="text-muted-foreground">{element.label || "Paragraph text goes here..."}</p>
        )}

        {(element.type === "text" || element.type === "number" || element.type === "email") && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              {element.type === "email" && <Mail className="w-3 h-3" />}
              {element.label}
              {element.required && <span className="text-destructive ml-1">*</span>}
            </label>
            <div className="h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-muted-foreground opacity-50">
              {element.placeholder || `Enter ${element.type === 'email' ? 'email' : 'text'}...`}
            </div>
          </div>
        )}

        {element.type === "textarea" && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              {element.label}
              {element.required && <span className="text-destructive ml-1">*</span>}
            </label>
            <div className="h-24 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-muted-foreground opacity-50">
              {element.placeholder || "Enter long text..."}
            </div>
          </div>
        )}

        {element.type === "checkbox" && (
          <div className="flex items-center space-x-2">
            <div className="h-4 w-4 rounded border border-primary opacity-50" />
            <label className="text-sm font-medium text-foreground leading-none">
              {element.label}
              {element.required && <span className="text-destructive ml-1">*</span>}
            </label>
          </div>
        )}

        {element.type === "radio" && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              {element.label}
              {element.required && <span className="text-destructive ml-1">*</span>}
            </label>
            <div className="space-y-2">
              {(element.options || ["Option 1", "Option 2"]).map((opt, i) => (
                <div key={i} className="flex items-center space-x-2 opacity-50">
                  <CircleDot className="w-4 h-4 text-primary" />
                  <span className="text-sm">{opt}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {element.type === "select" && (
          <div className="space-y-2">
             <label className="text-sm font-medium text-foreground">
              {element.label}
              {element.required && <span className="text-destructive ml-1">*</span>}
            </label>
            <div className="h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-muted-foreground opacity-50 flex items-center justify-between">
              <span>{element.placeholder || "Select an option..."}</span>
              <span className="text-xs">▼</span>
            </div>
          </div>
        )}

        {element.type === "slider" && (
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              <SlidersHorizontal className="w-3 h-3" />
              {element.label}
            </label>
            <div className="h-1.5 w-full bg-primary/10 rounded-full relative">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-primary rounded-full" />
            </div>
            <div className="flex justify-between text-[10px] text-muted-foreground">
              <span>{element.min || 0}</span>
              <span>{element.max || 100}</span>
            </div>
          </div>
        )}

        {element.type === "rating" && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              {element.label}
            </label>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400/30" />
              ))}
            </div>
          </div>
        )}

        {element.type === "date" && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              <Calendar className="w-3 h-3" />
              {element.label}
            </label>
            <div className="h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-muted-foreground opacity-50 flex items-center justify-between">
              <span>Select date...</span>
              <Calendar className="w-4 h-4 opacity-50" />
            </div>
          </div>
        )}

        {element.type === "file" && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              <Upload className="w-3 h-3" />
              {element.label}
            </label>
            <div className="border-2 border-dashed border-primary/20 rounded-lg p-4 flex flex-col items-center gap-2 bg-primary/5">
              <Upload className="w-6 h-6 text-primary/40" />
              <span className="text-xs text-muted-foreground">Click or drag to upload</span>
            </div>
          </div>
        )}
      </div>

      {isSelected && (
        <div className="absolute -left-3 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground p-1 rounded-r-md shadow-sm">
          <Settings2 className="w-3 h-3" />
        </div>
      )}
    </div>
  );
}
