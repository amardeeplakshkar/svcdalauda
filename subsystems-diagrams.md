# Subsystems Architecture

This document breaks down the specific architectures and data models for the three core administrative modules: the Content Management System, Faculty Management System, and Form Builder.

## 1. Content Management System (CMS)

The CMS handles the creation, management, and publishing of dynamic content like news, announcements, and posts.

### CMS Data Model (ERD)
```mermaid
erDiagram
    USER ||--o{ POST : writes
    POST ||--o{ POST_MEDIA : contains
    
    USER {
        string id PK
        string email
        string role "Admin / Editor"
    }
    
    POST {
        uuid id PK
        string title
        string slug
        text content
        string status "Draft | Published | Archived"
        string author_id FK
        timestamp created_at
        timestamp published_at
    }
    
    POST_MEDIA {
        uuid id PK
        uuid post_id FK
        string url
        string file_type
        string alt_text
    }
```

### Content Publishing Lifecycle (State Diagram)
```mermaid
stateDiagram-v2
    [*] --> Draft: Admin creates post
    
    Draft --> Draft: Admin edits content/media
    Draft --> Published: Admin publishes
    
    Published --> Draft: Admin unpublishes
    Published --> Archived: Admin archives (soft delete)
    
    Archived --> Draft: Admin restores
    Archived --> [*]: Admin permanently deletes
```

---

## 2. Faculty Management System

This module manages the directory of faculty and staff members, making it easy to maintain an up-to-date staff roster.

### Faculty Data Model (ERD)
```mermaid
erDiagram
    DEPARTMENT ||--o{ FACULTY : belongs_to
    FACULTY ||--o{ SOCIAL_LINKS : has
    
    DEPARTMENT {
        uuid id PK
        string name
        string description
    }
    
    FACULTY {
        uuid id PK
        string first_name
        string last_name
        string designation
        uuid department_id FK
        string email
        string phone
        string image_url
        text bio
        boolean is_active
        integer display_order
    }
    
    SOCIAL_LINKS {
        uuid id PK
        uuid faculty_id FK
        string platform "LinkedIn, Twitter, etc."
        string url
    }
```

### Faculty Management Workflow
```mermaid
flowchart TD
    A[Admin Dashboard] --> B{Action}
    B -->|Create| C[Input Details & Upload Photo]
    B -->|Edit| D[Update Info/Photo]
    B -->|Deactivate| E[Hide from Public View]
    
    C --> F[Upload Photo to Supabase Storage]
    F --> G[Save Record to Supabase DB]
    
    D --> G
    E --> G
    
    G --> H[Invalidate Next.js Cache]
    H --> I[Updated Public Faculty Directory]
```

---

## 3. Dynamic Form Builder

The Form Builder allows administrators to create custom forms (e.g., event registration, contact forms, surveys) and collect user responses dynamically without touching code.

### Form Builder Data Model (ERD)
```mermaid
erDiagram
    FORM_TEMPLATE ||--o{ FORM_FIELD : defines
    FORM_TEMPLATE ||--o{ FORM_SUBMISSION : receives
    FORM_SUBMISSION ||--o{ SUBMISSION_DATA : contains
    
    FORM_TEMPLATE {
        uuid id PK
        string title
        string description
        boolean is_active
        timestamp created_at
    }
    
    FORM_FIELD {
        uuid id PK
        uuid form_id FK
        string field_name
        string field_type "Text, Email, Select, Radio, Checkbox"
        boolean is_required
        jsonb options "For Select/Radio"
        integer order_index
    }
    
    FORM_SUBMISSION {
        uuid id PK
        uuid form_id FK
        timestamp submitted_at
        string user_ip
    }
    
    SUBMISSION_DATA {
        uuid id PK
        uuid submission_id FK
        uuid field_id FK
        text value
    }
```

### Form Builder Engine Data Flow
```mermaid
sequenceDiagram
    participant Admin
    participant FormBuilder as Admin Form Builder UI
    participant DB as Database
    participant FormRenderer as Form Renderer UI
    participant PublicUser as Public User

    %% Admin Creating Form
    Admin->>FormBuilder: Drag & Drop fields, set labels
    FormBuilder->>DB: Save Form Template + Fields Schema
    DB-->>FormBuilder: Confirms Save
    
    %% Public User Viewing and Submitting
    PublicUser->>FormRenderer: Visits dynamic form URL
    FormRenderer->>DB: Fetch Form Template & Fields
    DB-->>FormRenderer: Returns JSON Schema
    FormRenderer->>FormRenderer: Dynamically renders inputs based on schema
    
    PublicUser->>FormRenderer: Fills data and submits
    FormRenderer->>DB: Save Submission & values
    DB-->>FormRenderer: Success response
    FormRenderer-->>PublicUser: Shows Success Message
```
