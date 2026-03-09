// lib/imagekit.ts
// NOTE: @imagekit/nodejs is no longer needed since metadata is stored in Supabase.
// This file is kept only for the GALLERY_FOLDER constant used in the auth route
// so uploads go to the right ImageKit folder.
// For rendering images, use the Image component from @imagekit/next.

export const GALLERY_FOLDER = "/gallery";