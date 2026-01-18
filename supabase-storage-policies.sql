-- Allow authenticated users to upload files to the form-uploads bucket
CREATE POLICY "Allow authenticated uploads to form-uploads"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
    bucket_id = 'form-uploads'
    AND owner_id = auth.uid()
    AND COALESCE((metadata->>'size')::bigint, 0) < 52428800
    AND metadata->>'mimetype' IN (
        'image/jpeg', 'image/png', 'image/gif', 'image/webp',
        'application/pdf', 'text/plain', 'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    )
);

-- Allow authenticated users to read their own files from the form-uploads bucket
CREATE POLICY "Allow authenticated reads from form-uploads"
ON storage.objects
FOR SELECT
TO authenticated
USING (
    bucket_id = 'form-uploads'
    AND owner_id = auth.uid()
);

-- Allow users to update their own uploaded files
CREATE POLICY "Allow authenticated updates to form-uploads"
ON storage.objects
FOR UPDATE
TO authenticated
USING (bucket_id = 'form-uploads' AND owner_id = auth.uid())
WITH CHECK (bucket_id = 'form-uploads' AND owner_id = auth.uid());

-- Allow users to delete their own uploaded files
CREATE POLICY "Allow authenticated deletes from form-uploads"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'form-uploads' AND owner_id = auth.uid());
