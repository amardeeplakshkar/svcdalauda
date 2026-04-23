# Workflows and Data Flow

This document outlines the primary data flows and workflows within the application.

## 1. Authentication Workflow (Admin)

```mermaid
sequenceDiagram
    participant Admin as Admin User
    participant NextUI as Next.js Frontend
    participant Clerk as Clerk Auth
    participant NextAPI as Next.js API Routes
    
    Admin->>NextUI: Navigates to /admin
    NextUI->>Clerk: Checks session status
    alt Not Authenticated
        Clerk-->>NextUI: Redirect to Login
        NextUI-->>Admin: Displays Login Page
        Admin->>Clerk: Enters Credentials
        Clerk-->>NextUI: Returns Auth Token
    end
    NextUI->>NextAPI: API Request + Auth Token
    NextAPI->>Clerk: Verify Token
    Clerk-->>NextAPI: Token Valid
    NextAPI-->>NextUI: Returns Protected Data
    NextUI-->>Admin: Displays Admin Dashboard
```

## 2. File Upload & Post Creation Workflow (Admin)

This workflow describes the process of an administrator creating a new post that includes an image upload.

```mermaid
sequenceDiagram
    participant Admin as Admin User
    participant Frontend as Admin Dashboard UI
    participant StorageAPI as API Layer (/api/upload)
    participant DataAPI as API Layer (/api/posts)
    participant SupabaseStorage as Supabase Storage
    participant SupabaseDB as Supabase Database

    Admin->>Frontend: Fills post form & selects image
    Admin->>Frontend: Clicks 'Submit'
    
    %% Image Upload Phase
    Frontend->>StorageAPI: POST /api/upload (Image File)
    StorageAPI->>SupabaseStorage: Upload File
    SupabaseStorage-->>StorageAPI: Returns Public File URL
    StorageAPI-->>Frontend: Returns File URL
    
    %% Data Save Phase
    Frontend->>DataAPI: POST /api/posts (Post Data + File URL)
    DataAPI->>SupabaseDB: INSERT INTO posts (data, image_url)
    SupabaseDB-->>DataAPI: Success (Post ID)
    DataAPI-->>Frontend: Success Response
    
    Frontend-->>Admin: Shows "Post Created" Success Message
```

## 3. Public Data Fetching Workflow

This workflow describes how public visitors view data (like posts or gallery images) on the website.

```mermaid
sequenceDiagram
    participant Visitor as Public User
    participant Frontend as Next.js Pages
    participant API as Next.js Route Handlers
    participant DB as Supabase DB
    participant ImageKit as ImageKit / Supabase Storage

    Visitor->>Frontend: Visits /posts
    
    %% Fetching Data
    Frontend->>API: GET /api/posts
    API->>DB: SELECT * FROM posts
    DB-->>API: Returns Post Records
    API-->>Frontend: JSON Data (Posts)
    
    %% Rendering
    Frontend->>Frontend: Renders UI with Data
    
    %% Image Loading
    Frontend->>ImageKit: Requests Optimized Images (via URL)
    ImageKit-->>Frontend: Returns Images
    
    Frontend-->>Visitor: Displays fully rendered page
```

## 4. Form Submission Workflow (Public User)

```mermaid
sequenceDiagram
    participant Visitor as Public User
    participant Frontend as Next.js Form Page
    participant API as API Layer (/api/forms)
    participant DB as Supabase DB

    Visitor->>Frontend: Fills out Contact/Application Form
    Visitor->>Frontend: Clicks 'Submit'
    Frontend->>API: POST /api/forms (Form Data)
    
    API->>API: Validates Data (Zod)
    API->>DB: INSERT INTO form_submissions
    DB-->>API: Success
    
    %% Optional Email notification can be added here
    
    API-->>Frontend: 200 OK
    Frontend-->>Visitor: Shows "Thank You" Message
```
