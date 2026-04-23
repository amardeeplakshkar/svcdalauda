# System Architecture

Here is the high-level system architecture for the Svcdalauda website.

```mermaid
graph TD
    User([User / Browser])
    Admin([Admin / Browser])

    subgraph "Next.js Application (Vercel)"
        subgraph "Frontend Layer"
            PublicPages["Public Pages\n(Home, About, Contact, Gallery, Posts, etc.)"]
            AdminPages["Admin Dashboard\n(/admin)"]
        end

        subgraph "API Layer (Route Handlers)"
            API_Faculty["Faculty API\n(/api/faculty)"]
            API_Gallery["Gallery API\n(/api/gallery)"]
            API_Posts["Posts API\n(/api/posts)"]
            API_Forms["Forms API\n(/api/forms)"]
        end
    end

    subgraph "External Services / Backend"
        Clerk["Clerk\n(Authentication)"]
        SupabaseDB[("Supabase DB\n(PostgreSQL via Drizzle ORM)")]
        SupabaseStorage[("Supabase Storage\n(File/Media Uploads)")]
        ImageKit[("ImageKit\n(Image Optimization)")]
        VercelAnalytics["Vercel Analytics\n(Tracking)"]
    end

    User -->|Interacts with| PublicPages
    Admin -->|Interacts with| AdminPages
    
    PublicPages -->|Fetches data| API_Faculty
    PublicPages -->|Fetches data| API_Gallery
    PublicPages -->|Fetches data| API_Posts
    PublicPages -->|Submits data| API_Forms

    AdminPages -->|CRUD operations| API_Faculty
    AdminPages -->|CRUD operations| API_Gallery
    AdminPages -->|CRUD operations| API_Posts
    AdminPages -->|CRUD operations| API_Forms

    AdminPages <-->|Authenticates via| Clerk
    PublicPages -.->|Sends events to| VercelAnalytics

    API_Faculty <-->|Reads/Writes| SupabaseDB
    API_Gallery <-->|Reads/Writes| SupabaseDB
    API_Posts <-->|Reads/Writes| SupabaseDB
    API_Forms <-->|Reads/Writes| SupabaseDB

    API_Gallery -->|Uploads media to| SupabaseStorage
    API_Posts -->|Uploads media to| SupabaseStorage
    API_Faculty -->|Uploads media to| SupabaseStorage
    
    PublicPages -->|Loads optimized images from| ImageKit
    AdminPages -->|Loads optimized images from| ImageKit
    
    classDef frontend fill:#e1f5fe,stroke:#03a9f4,stroke-width:2px;
    classDef api fill:#e8f5e9,stroke:#4caf50,stroke-width:2px;
    classDef db fill:#fff3e0,stroke:#ff9800,stroke-width:2px;
    classDef auth fill:#f3e5f5,stroke:#9c27b0,stroke-width:2px;
    
    class PublicPages,AdminPages frontend;
    class API_Faculty,API_Gallery,API_Posts,API_Forms api;
    class SupabaseDB,SupabaseStorage,ImageKit db;
    class Clerk auth;
```

## Key Technologies

- **Frontend & API**: Next.js 16 (App Router), React 19, Tailwind CSS
- **Authentication**: Clerk
- **Database**: Supabase (PostgreSQL) managed with Drizzle ORM
- **Storage**: Supabase Storage for files and ImageKit for image optimization
- **Internationalization**: Intlayer
- **Components**: Radix UI, Shadcn UI
