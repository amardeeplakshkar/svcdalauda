import { FormElement } from "@/shared/schema";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Trash2, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropertiesPanelProps {
  element: FormElement | null;
  onUpdate: (id: string, updates: Partial<FormElement>) => void;
  onDelete: (id: string) => void;
}

export function PropertiesPanel({ element, onUpdate, onDelete }: PropertiesPanelProps) {
  if (!element) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-6 text-center text-muted-foreground">
        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
          <SettingsIcon className="w-8 h-8 opacity-20" />
        </div>
        <p>Select an element on the canvas to edit its properties.</p>
      </div>
    );
  }

  const handleOptionAdd = () => {
    const currentOptions = element.options || [];
    onUpdate(element.id, { options: [...currentOptions, `Option ${currentOptions.length + 1}`] });
  };

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...(element.options || [])];
    newOptions[index] = value;
    onUpdate(element.id, { options: newOptions });
  };

  const handleOptionDelete = (index: number) => {
    const newOptions = [...(element.options || [])];
    newOptions.splice(index, 1);
    onUpdate(element.id, { options: newOptions });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h3 className="font-display font-bold text-lg">Properties</h3>
        <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{element.type} Field</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="label">Label</Label>
          <Input 
            id="label" 
            value={element.label} 
            onChange={(e) => onUpdate(element.id, { label: e.target.value })}
            className="bg-white"
          />
        </div>

        {(element.type === "text" || element.type === "textarea" || element.type === "number" || element.type === "email") && (
          <div className="space-y-2">
            <Label htmlFor="placeholder">Placeholder</Label>
            <Input 
              id="placeholder" 
              value={element.placeholder || ""} 
              onChange={(e) => onUpdate(element.id, { placeholder: e.target.value })}
              className="bg-white"
            />
          </div>
        )}

        {element.type !== "header" && element.type !== "paragraph" && (
          <div className="flex items-center justify-between rounded-lg border p-3 bg-white">
            <Label htmlFor="required" className="cursor-pointer">Required Field</Label>
            <Switch 
              id="required" 
              checked={element.required || false}
              onCheckedChange={(checked) => onUpdate(element.id, { required: checked })}
            />
          </div>
        )}

        {(element.type === "slider" || element.type === "rating") && (
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="min">Min Value</Label>
              <Input 
                id="min" 
                type="number"
                value={element.min || 0} 
                onChange={(e) => onUpdate(element.id, { min: Number(e.target.value) })}
                className="bg-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="max">Max Value</Label>
              <Input 
                id="max" 
                type="number"
                value={element.max || 10} 
                onChange={(e) => onUpdate(element.id, { max: Number(e.target.value) })}
                className="bg-white"
              />
            </div>
          </div>
        )}

        {(element.type === "select" || element.type === "radio") && (
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <Label>Options</Label>
              <Button size="sm" variant="outline" onClick={handleOptionAdd} className="h-7 text-xs">
                <Plus className="w-3 h-3 mr-1" /> Add
              </Button>
            </div>
            <div className="space-y-2 max-h-[200px] overflow-y-auto pr-2">
              {element.options?.map((option, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Input 
                    value={option}
                    onChange={(e) => handleOptionChange(idx, e.target.value)}
                    className="h-8 text-sm bg-white"
                  />
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="h-8 w-8 text-muted-foreground hover:text-destructive"
                    onClick={() => handleOptionDelete(idx)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ))}
              {(!element.options || element.options.length === 0) && (
                <p className="text-xs text-muted-foreground italic text-center py-2">No options added yet.</p>
              )}
            </div>
          </div>
        )}

        {element.type === "file" && (
          <div className="space-y-2">
            <Label htmlFor="accept">Accepted File Types</Label>
            <Input 
              id="accept" 
              placeholder="e.g. image/*,.pdf,.doc" 
              value={element.accept || ""} 
              onChange={(e) => onUpdate(element.id, { accept: e.target.value })}
              className="bg-white"
            />
            <p className="text-[10px] text-muted-foreground">
              Comma-separated list of extensions or MIME types.
            </p>
          </div>
        )}
      </div>

      <Separator />

      <Button 
        variant="destructive" 
        className="w-full" 
        onClick={() => onDelete(element.id)}
      >
        <Trash2 className="w-4 h-4 mr-2" /> Delete Element
      </Button>
    </div>
  );
}

function SettingsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.39a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
