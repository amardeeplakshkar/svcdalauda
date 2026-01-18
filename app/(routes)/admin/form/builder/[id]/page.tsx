'use client'

import { useEffect, useState } from "react";
import { useForm, useUpdateForm } from "@/hooks/use-forms";
import { 
  DndContext, 
  DragOverlay, 
  useSensor, 
  useSensors, 
  PointerSensor, 
  DragStartEvent, 
  DragEndEvent, 
  DragOverEvent,
  defaultDropAnimationSideEffects 
} from "@dnd-kit/core";
import { 
  SortableContext, 
  verticalListSortingStrategy, 
  arrayMove 
} from "@dnd-kit/sortable";
import { SidebarItem, SidebarItemType } from "@/components/admin/FormBuilder/SidebarItem";
import { CanvasItem } from "@/components/admin/FormBuilder/CanvasItem";
import { PropertiesPanel } from "@/components/admin/FormBuilder/PropertiesPanel";
import { FormRenderer } from "@/components/admin/FormBuilder/FormRenderer";
import { FormElement } from "@/shared/schema";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Loader2, ArrowLeft, Eye, Share2, Save, Check } from "lucide-react";
import { nanoid } from "nanoid";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Builder() {
  const params = useParams<{ id: string }>();
  const formId = Number(params.id);

  
  const { data: form, isLoading } = useForm(formId);
  const updateMutation = useUpdateForm();
  const { toast } = useToast();

  const [elements, setElements] = useState<FormElement[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activeDragItem, setActiveDragItem] = useState<SidebarItemType | null>(null);
  const [formName, setFormName] = useState("");

  // Initialize elements when form loads
  useEffect(() => {
    if (form) {
      setElements(form.content as FormElement[]);
      setFormName(form.name);
    }
  }, [form]);

  // Save changes
  const handleSave = () => {
    updateMutation.mutate({
      id: formId,
      name: formName,
      content: elements,
    });
  };

  // Drag & Drop Sensors
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const activeData = active.data.current;
    
    if (activeData?.isSidebar) {
      setActiveDragItem(activeData.type);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveDragItem(null);

    if (!over) return;

    // Handle reordering within canvas
    if (active.id !== over.id && !active.data.current?.isSidebar) {
      const oldIndex = elements.findIndex((el) => el.id === active.id);
      const newIndex = elements.findIndex((el) => el.id === over.id);
      setElements(arrayMove(elements, oldIndex, newIndex));
    }

    // Handle dropping from sidebar
    if (active.data.current?.isSidebar) {
      const type = active.data.current.type as SidebarItemType;
      const newElement: FormElement = {
        id: nanoid(),
        type,
        label: type === "header" ? "Form Header" : type === "paragraph" ? "Description text" : "New Field",
        required: false,
        options: (type === "select" || type === "radio") ? ["Option 1", "Option 2"] : undefined,
        min: (type === "slider" || type === "rating") ? 0 : undefined,
        max: (type === "slider" || type === "rating") ? 10 : undefined,
        step: type === "slider" ? 1 : undefined,
      };

      // Insert at correct position if dropped over an item, otherwise append
      if (over.id === "canvas-droppable") {
        setElements([...elements, newElement]);
      } else {
        const overIndex = elements.findIndex((el) => el.id === over.id);
        const newElements = [...elements];
        newElements.splice(overIndex + 1, 0, newElement);
        setElements(newElements);
      }
      setSelectedId(newElement.id);
    }
  };

  const updateElement = (id: string, updates: Partial<FormElement>) => {
    setElements(elements.map((el) => (el.id === id ? { ...el, ...updates } : el)));
  };

  const deleteElement = (id: string) => {
    setElements(elements.filter((el) => el.id !== id));
    if (selectedId === id) setSelectedId(null);
  };

  const addElement = (type: SidebarItemType) => {
    const newElement: FormElement = {
      id: nanoid(),
      type,
      label: type === "header" ? "Form Header" : type === "paragraph" ? "Description text" : "New Field",
      required: false,
      options: (type === "select" || type === "radio") ? ["Option 1", "Option 2"] : undefined,
      min: (type === "slider" || type === "rating") ? 0 : undefined,
      max: (type === "slider" || type === "rating") ? 10 : undefined,
      step: type === "slider" ? 1 : undefined,
    };
    setElements([...elements, newElement]);
    setSelectedId(newElement.id);
    toast({
      title: "Element added",
      description: `Added ${type} to the end of the form.`,
      duration: 2000,
    });
  };

  const handleShare = () => {
    const url = `${window.location.origin}/forms/${formId}`;
    navigator.clipboard.writeText(url);
    toast({ title: "Link copied!", description: "Share URL copied to clipboard." });
  };

  if (isLoading) return <div className="h-screen flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>;
  if (!form) return <div className="h-screen flex items-center justify-center text-destructive">Form not found</div>;

  const selectedElement = elements.find(el => el.id === selectedId) || null;

  return (
    <DndContext 
      sensors={sensors} 
      onDragStart={handleDragStart} 
      onDragEnd={handleDragEnd}
    >
      <div className="h-screen flex flex-col bg-background overflow-hidden">
        {/* Top Bar */}
        <header className="h-16 border-b bg-white flex items-center justify-between px-6 z-20">
          <div className="flex items-center gap-4">
            <Link href="/admin" className="p-2 hover:bg-muted rounded-full transition-colors text-muted-foreground">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <input 
              value={formName}
              onChange={(e) => setFormName(e.target.value)}
              className="text-lg font-bold font-display bg-transparent border-none focus:outline-none focus:ring-0 placeholder:text-muted-foreground hover:bg-muted/50 px-2 rounded-md transition-colors"
              placeholder="Untitled Form"
            />
          </div>
          <div className="flex items-center gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Eye className="w-4 h-4 mr-2" /> Preview
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-6 text-center border-b pb-4">{formName}</h2>
                  <FormRenderer elements={elements} onSubmit={() => {}} readOnly />
                </div>
              </DialogContent>
            </Dialog>

            <Button variant="outline" size="sm" onClick={handleShare}>
              <Share2 className="w-4 h-4 mr-2" /> Share
            </Button>
            
            <Button size="sm" onClick={handleSave} disabled={updateMutation.isPending}>
              {updateMutation.isPending ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
              Save
            </Button>
          </div>
        </header>

        {/* Builder Area */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Sidebar - Draggables */}
          <aside className="w-64 border-r bg-muted/30 p-4 flex flex-col gap-4 overflow-y-auto">
            <div className="font-semibold text-sm text-muted-foreground uppercase tracking-wider px-1">Structure</div>
            <SidebarItem type="header" label="Header" onClick={addElement} />
            <SidebarItem type="paragraph" label="Paragraph" onClick={addElement} />
            
            <div className="font-semibold text-sm text-muted-foreground uppercase tracking-wider px-1 mt-2">Text Inputs</div>
            <SidebarItem type="text" label="Short Text" onClick={addElement} />
            <SidebarItem type="textarea" label="Long Text" onClick={addElement} />
            <SidebarItem type="email" label="Email" onClick={addElement} />
            
            <div className="font-semibold text-sm text-muted-foreground uppercase tracking-wider px-1 mt-2">Selection</div>
            <SidebarItem type="checkbox" label="Checkboxes" onClick={addElement} />
            <SidebarItem type="radio" label="Radio Buttons" onClick={addElement} />
            <SidebarItem type="select" label="Dropdown" onClick={addElement} />
            
            <div className="font-semibold text-sm text-muted-foreground uppercase tracking-wider px-1 mt-2">Advanced</div>
            <SidebarItem type="number" label="Number" onClick={addElement} />
            <SidebarItem type="slider" label="Slider" onClick={addElement} />
            <SidebarItem type="rating" label="Rating / NPS" onClick={addElement} />
            <SidebarItem type="date" label="Date" onClick={addElement} />
            <SidebarItem type="file" label="File Upload" onClick={addElement} />
          </aside>

          {/* Main Canvas */}
          <main className="flex-1 bg-muted/20 p-8 overflow-y-auto" onClick={() => setSelectedId(null)}>
            <div className="max-w-2xl mx-auto min-h-[500px] bg-transparent flex flex-col gap-4 pb-20">
              <SortableContext items={elements.map(e => e.id)} strategy={verticalListSortingStrategy}>
                {elements.map((element) => (
                  <CanvasItem 
                    key={element.id} 
                    element={element} 
                    isSelected={selectedId === element.id}
                    onSelect={(id) => {
                      // Stop propagation is handled in component
                      setSelectedId(id);
                    }}
                    onDelete={deleteElement}
                  />
                ))}
              </SortableContext>
              
              {elements.length === 0 && (
                <div className="h-64 border-2 border-dashed border-border rounded-xl flex flex-col items-center justify-center text-muted-foreground bg-white/50">
                  <p>Drag elements here from the sidebar</p>
                </div>
              )}
              
              {/* Invisible droppable area to catch drops at the bottom */}
              <div 
                id="canvas-droppable" 
                className={cn(
                  "h-32 transition-colors rounded-xl border-2 border-transparent",
                  activeDragItem && "border-primary/20 bg-primary/5 border-dashed"
                )} 
              />
            </div>
          </main>

          {/* Right Sidebar - Properties */}
          <aside className="w-80 border-l bg-white p-6 overflow-y-auto shadow-sm z-10">
            <PropertiesPanel 
              element={selectedElement} 
              onUpdate={updateElement}
              onDelete={deleteElement}
            />
          </aside>
        </div>
      </div>

      <DragOverlay dropAnimation={{ sideEffects: defaultDropAnimationSideEffects({ styles: { active: { opacity: '0.5' } } }) }}>
        {activeDragItem ? (
           <div className="flex items-center gap-3 p-3 rounded-xl border border-primary bg-white shadow-xl w-64 ring-2 ring-primary opacity-90 cursor-grabbing">
             <div className="p-2 bg-primary/10 rounded-lg text-primary">
               <div className="w-4 h-4 bg-primary/20 rounded" />
             </div>
             <span className="text-sm font-medium">{activeDragItem}</span>
           </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}
