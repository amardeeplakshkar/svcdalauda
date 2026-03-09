'use client'

import { useState, useRef, useCallback } from "react"
import { AdminLayout } from "@/components/admin/Faculty/AdminLayout"
import {
  useGallery,
  useUploadGalleryImage,
  useUpdateGalleryImage,
  useDeleteGalleryImage,
  useReorderGallery,
  type GalleryImage,
  type GalleryCategory,
} from "@/hooks/use-gallery"
import { GALLERY_CATEGORIES } from "@/shared/schema"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Upload,
  Pencil,
  Trash2,
  GripVertical,
  ImagePlus,
  Loader2,
  X,
  Check,
} from "lucide-react"
import { toast } from "sonner"

// ─── Types ────────────────────────────────────────────────────────────────────

interface UploadForm {
  title: string
  description: string
  altText: string
  category: GalleryCategory
  displayOrder: number
}

const DEFAULT_FORM: UploadForm = {
  title: "",
  description: "",
  altText: "",
  category: "all",
  displayOrder: 0,
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function AdminGalleryPage() {
  const { data: images = [], isLoading } = useGallery()
  const uploadMutation = useUploadGalleryImage()
  const deleteMutation = useDeleteGalleryImage()
  const reorderMutation = useReorderGallery()

  const [filterCategory, setFilterCategory] = useState<GalleryCategory | "all">("all")
  const [uploadOpen, setUploadOpen] = useState(false)
  const [editImage, setEditImage] = useState<GalleryImage | null>(null)
  const [dragOver, setDragOver] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [form, setForm] = useState<UploadForm>(DEFAULT_FORM)
  const [draggedId, setDraggedId] = useState<number | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const filtered = filterCategory === "all"
    ? images
    : images.filter(img => img.category === filterCategory)

  // ─── File selection ──────────────────────────────────────────────────────

  const handleFileSelect = useCallback((file: File) => {
    setSelectedFile(file)
    const url = URL.createObjectURL(file)
    setPreviewUrl(url)
    // Auto-fill alt text from filename
    if (!form.altText) {
      setForm(f => ({ ...f, altText: file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ") }))
    }
  }, [form.altText])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith("image/")) handleFileSelect(file)
  }, [handleFileSelect])

  // ─── Upload ───────────────────────────────────────────────────────────────

  const handleUpload = async () => {
    if (!selectedFile) return
    if (!form.title || !form.altText) {
      toast.error("Title and alt text are required")
      return
    }

    try {
      await uploadMutation.mutateAsync({
        file: selectedFile,
        ...form,
        displayOrder: images.length, // append to end
        onProgress: setUploadProgress,
      })
      toast.success("Image uploaded successfully")
      setUploadOpen(false)
      setSelectedFile(null)
      setPreviewUrl(null)
      setForm(DEFAULT_FORM)
      setUploadProgress(0)
    } catch (err: any) {
      toast.error(err.message ?? "Upload failed")
    }
  }

  // ─── Delete ───────────────────────────────────────────────────────────────

  const handleDelete = async (id: number) => {
    if (!confirm("Remove this image from the gallery?")) return
    try {
      await deleteMutation.mutateAsync(id)
      toast.success("Image removed")
    } catch {
      toast.error("Failed to remove image")
    }
  }

  // ─── Drag to reorder ─────────────────────────────────────────────────────

  const handleDragStart = (id: number) => setDraggedId(id)

  const handleDragDropReorder = async (targetId: number) => {
    if (draggedId === null || draggedId === targetId) return
    const reordered = [...filtered]
    const fromIdx = reordered.findIndex(i => i.id === draggedId)
    const toIdx = reordered.findIndex(i => i.id === targetId)
    const [moved] = reordered.splice(fromIdx, 1)
    reordered.splice(toIdx, 0, moved)
    const order = reordered.map((img, idx) => ({ id: img.id, displayOrder: idx }))
    setDraggedId(null)
    try {
      await reorderMutation.mutateAsync(order)
    } catch {
      toast.error("Failed to save order")
    }
  }

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="font-display text-3xl font-bold text-foreground">Gallery</h1>
          <p className="text-muted-foreground mt-1">
            {images.length} images · drag to reorder
          </p>
        </div>
        <Button
          onClick={() => setUploadOpen(true)}
          className="bg-primary hover:bg-red-900 shadow-lg shadow-primary/20"
        >
          <ImagePlus className="w-4 h-4 mr-2" />
          Upload Image
        </Button>
      </div>

      {/* Category filter */}
      <div className="flex gap-2 flex-wrap mb-6">
        {["all", ...GALLERY_CATEGORIES.filter(c => c !== "all")].map(cat => (
          <button
            key={cat}
            onClick={() => setFilterCategory(cat as GalleryCategory)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all capitalize ${
              filterCategory === cat
                ? "bg-primary text-white border-primary"
                : "border-border text-muted-foreground hover:border-primary hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      {isLoading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="aspect-square rounded-xl bg-muted animate-pulse" />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 border-2 border-dashed border-border rounded-2xl text-center">
          <ImagePlus className="w-12 h-12 text-muted-foreground/30 mb-4" />
          <p className="text-lg font-semibold text-muted-foreground">No images yet</p>
          <p className="text-sm text-muted-foreground/70 mt-1">Upload your first gallery image</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((img) => (
            <GalleryCard
              key={img.id}
              image={img}
              onEdit={() => setEditImage(img)}
              onDelete={() => handleDelete(img.id)}
              onDragStart={() => handleDragStart(img.id)}
              onDrop={() => handleDragDropReorder(img.id)}
              isDragging={draggedId === img.id}
            />
          ))}
        </div>
      )}

      {/* Upload Dialog */}
      <Dialog open={uploadOpen} onOpenChange={(o) => {
        if (!o) { setSelectedFile(null); setPreviewUrl(null); setForm(DEFAULT_FORM); setUploadProgress(0) }
        setUploadOpen(o)
      }}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Upload New Image</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {/* Drop zone */}
            {!selectedFile ? (
              <div
                onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-xl p-12 flex flex-col items-center justify-center cursor-pointer transition-colors ${
                  dragOver ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                }`}
              >
                <Upload className="w-10 h-10 text-muted-foreground mb-3" />
                <p className="font-medium">Drop image here or click to browse</p>
                <p className="text-sm text-muted-foreground mt-1">PNG, JPG, WEBP up to 10MB</p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
                />
              </div>
            ) : (
              <div className="relative rounded-xl overflow-hidden aspect-video bg-muted">
                <img src={previewUrl!} alt="Preview" className="w-full h-full object-cover" />
                <button
                  onClick={() => { setSelectedFile(null); setPreviewUrl(null) }}
                  className="absolute top-2 right-2 p-1.5 bg-black/60 rounded-full text-white hover:bg-black/80"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                  {selectedFile.name}
                </div>
              </div>
            )}

            {/* Progress */}
            {uploadMutation.isPending && (
              <div className="w-full bg-muted rounded-full h-1.5">
                <div
                  className="bg-primary h-1.5 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
            )}

            {/* Metadata fields */}
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2">
                <label className="text-sm font-medium mb-1 block">Title *</label>
                <Input
                  placeholder="Annual Folk Dance Festival"
                  value={form.title}
                  onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
                />
              </div>
              <div className="col-span-2">
                <label className="text-sm font-medium mb-1 block">Alt Text *</label>
                <Input
                  placeholder="Students performing traditional dance on stage"
                  value={form.altText}
                  onChange={e => setForm(f => ({ ...f, altText: e.target.value }))}
                />
              </div>
              <div className="col-span-2">
                <label className="text-sm font-medium mb-1 block">Description</label>
                <Textarea
                  placeholder="Brief description of the image..."
                  value={form.description}
                  onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                  className="resize-none"
                  rows={2}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Category</label>
                <Select
                  value={form.category}
                  onValueChange={val => setForm(f => ({ ...f, category: val as GalleryCategory }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {GALLERY_CATEGORIES.map(cat => (
                      <SelectItem key={cat} value={cat} className="capitalize">{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <Button variant="outline" onClick={() => setUploadOpen(false)}>Cancel</Button>
              <Button
                onClick={handleUpload}
                disabled={!selectedFile || uploadMutation.isPending}
                className="bg-primary hover:bg-red-900"
              >
                {uploadMutation.isPending ? (
                  <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Uploading {Math.round(uploadProgress)}%</>
                ) : (
                  <><Upload className="w-4 h-4 mr-2" /> Upload</>
                )}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit Dialog */}
      {editImage && (
        <EditDialog
          image={editImage}
          onClose={() => setEditImage(null)}
        />
      )}
    </AdminLayout>
  )
}

// ─── Gallery Card ─────────────────────────────────────────────────────────────

function GalleryCard({
  image,
  onEdit,
  onDelete,
  onDragStart,
  onDrop,
  isDragging,
}: {
  image: GalleryImage
  onEdit: () => void
  onDelete: () => void
  onDragStart: () => void
  onDrop: () => void
  isDragging: boolean
}) {
  return (
    <div
      draggable
      onDragStart={onDragStart}
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDrop}
      className={`group relative rounded-xl overflow-hidden border border-border bg-card shadow-sm transition-all duration-200 ${
        isDragging ? "opacity-40 scale-95" : "hover:shadow-lg hover:-translate-y-0.5"
      }`}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image.url}
          alt={image.altText}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Drag handle */}
      <div className="absolute top-2 left-2 p-1 bg-black/50 rounded cursor-grab opacity-0 group-hover:opacity-100 transition-opacity">
        <GripVertical className="w-3 h-3 text-white" />
      </div>

      {/* Category badge */}
      <div className="absolute top-2 right-2">
        <Badge className="bg-black/60 text-white border-0 text-xs capitalize backdrop-blur-sm">
          {image.category}
        </Badge>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
        <p className="text-white font-semibold text-sm line-clamp-1">{image.title}</p>
        {image.description && (
          <p className="text-white/70 text-xs mt-0.5 line-clamp-1">{image.description}</p>
        )}
        <div className="flex gap-2 mt-2">
          <button
            onClick={onEdit}
            className="flex-1 flex items-center justify-center gap-1 py-1.5 bg-white/20 hover:bg-white/30 rounded-lg text-white text-xs font-medium transition-colors"
          >
            <Pencil className="w-3 h-3" /> Edit
          </button>
          <button
            onClick={onDelete}
            className="flex items-center justify-center p-1.5 bg-red-500/80 hover:bg-red-500 rounded-lg text-white transition-colors"
          >
            <Trash2 className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Edit Dialog ──────────────────────────────────────────────────────────────

function EditDialog({ image, onClose }: { image: GalleryImage; onClose: () => void }) {
  const updateMutation = useUpdateGalleryImage()
  const [form, setForm] = useState({
    title: image.title,
    description: image.description,
    altText: image.altText,
    category: image.category as GalleryCategory,
  })

  const handleSave = async () => {
    try {
      await updateMutation.mutateAsync({ id: image.id, ...form })
      toast.success("Image updated")
      onClose()
    } catch {
      toast.error("Failed to update image")
    }
  }

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Edit Image</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <div className="rounded-xl overflow-hidden aspect-video bg-muted">
            <img src={image.url} alt={image.altText} className="w-full h-full object-cover" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Title</label>
            <Input value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Alt Text</label>
            <Input value={form.altText} onChange={e => setForm(f => ({ ...f, altText: e.target.value }))} />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Description</label>
            <Textarea
              value={form.description}
              onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
              className="resize-none"
              rows={2}
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Category</label>
            <Select
              value={form.category}
              onValueChange={val => setForm(f => ({ ...f, category: val as GalleryCategory }))}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {GALLERY_CATEGORIES.map(cat => (
                  <SelectItem key={cat} value={cat} className="capitalize">{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline" onClick={onClose}>Cancel</Button>
            <Button onClick={handleSave} disabled={updateMutation.isPending} className="bg-primary hover:bg-red-900">
              {updateMutation.isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <><Check className="w-4 h-4 mr-1" /> Save</>}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}