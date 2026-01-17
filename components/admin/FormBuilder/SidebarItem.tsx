import { useDraggable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";
import { 
  GripVertical, 
  Type, 
  AlignLeft, 
  Hash, 
  CheckSquare, 
  List, 
  Mail, 
  CircleDot, 
  SlidersHorizontal, 
  Star, 
  Calendar, 
  Upload 
} from "lucide-react";

export type SidebarItemType = 
  | "header" 
  | "paragraph" 
  | "text" 
  | "textarea" 
  | "email"
  | "number" 
  | "checkbox" 
  | "radio"
  | "select"
  | "slider"
  | "rating"
  | "date"
  | "file";

interface SidebarItemProps {
  type: SidebarItemType;
  label: string;
  onClick?: (type: SidebarItemType) => void;
}

const icons = {
  header: Type,
  paragraph: AlignLeft,
  text: Type,
  textarea: AlignLeft,
  email: Mail,
  number: Hash,
  checkbox: CheckSquare,
  radio: CircleDot,
  select: List,
  slider: SlidersHorizontal,
  rating: Star,
  date: Calendar,
  file: Upload,
};

export function SidebarItem({ type, label, onClick }: SidebarItemProps) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `sidebar-${type}`,
    data: {
      type,
      isSidebar: true,
    },
  });

  const Icon = icons[type] || Type;

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      onClick={() => onClick?.(type)}
      className={cn(
        "flex items-center gap-3 p-3 rounded-xl border border-border bg-white cursor-pointer transition-all hover:border-primary/50 hover:shadow-md hover:-translate-y-0.5 active:shadow-sm active:translate-y-0",
        isDragging && "opacity-50 ring-2 ring-primary"
      )}
    >
      <div className="p-2 bg-primary/10 rounded-lg text-primary">
        <Icon className="w-4 h-4" />
      </div>
      <span className="text-sm font-medium text-foreground">{label}</span>
      <GripVertical className="w-4 h-4 ml-auto text-muted-foreground/50" />
    </div>
  );
}
