import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Upload a file to Supabase Storage
 * @param file - The file to upload
 * @param bucket - The storage bucket name (default: 'form-uploads')
 * @param folder - Optional folder path within the bucket
 * @returns The public URL of the uploaded file
 */
export async function uploadFile(
    file: File,
    bucket: string = 'form-uploads',
    folder?: string
): Promise<string> {
    const lastDotIndex = file.name.lastIndexOf('.');
    const fileExt = lastDotIndex > 0 ? file.name.substring(lastDotIndex + 1) : '';
    const fileName = fileExt ? `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}` : `${Math.random().toString(36).substring(2)}-${Date.now()}`;
    const filePath = folder ? `${folder}/${fileName}` : fileName;

    const { data, error } = await supabase.storage
        .from(bucket)
        .upload(filePath, file, {
            cacheControl: '3600',
            upsert: false
        });

    if (error) {
        throw new Error(`File upload failed: ${error.message}`);
    }

    // Get the public URL
    const { data: { publicUrl } } = supabase.storage
        .from(bucket)
        .getPublicUrl(filePath);

    return publicUrl;
}

/**
 * Delete a file from Supabase Storage
 * @param fileUrl - The public URL of the file to delete
 * @param bucket - The storage bucket name (default: 'form-uploads')
 */
export async function deleteFile(
    fileUrl: string,
    bucket: string = 'form-uploads'
): Promise<void> {
    // Extract file path from URL
    const urlParts = fileUrl.split('/');
    const bucketIndex = urlParts.indexOf(bucket);
    
    if (bucketIndex < 0) {
        throw new Error(`Bucket "${bucket}" not found in file URL: ${fileUrl}`);
    }
    
    const filePath = urlParts.slice(bucketIndex + 1).join('/');
    
    if (!filePath) {
        throw new Error(`Could not extract file path from URL: ${fileUrl}`);
    }

    const { error } = await supabase.storage
        .from(bucket)
        .remove([filePath]);

    if (error) {
        throw new Error(`File deletion failed: ${error.message}`);
    }
}
