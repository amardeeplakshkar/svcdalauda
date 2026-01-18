# SVC Dalauda - College Management Portal

A comprehensive, full-featured college administration and engagement platform built with **Next.js 16**, **React 19**, **TypeScript**, and **Supabase**. This platform provides an integrated solution for managing faculty information, creating dynamic forms, and sharing college content through blogs, announcements, and notices.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Routes](#routes)
- [Database Schema](#database-schema)
- [Features in Detail](#features-in-detail)
- [Deployment](#deployment)

---

## 📱 Overview

SVC Dalauda is an all-in-one college management system designed to streamline administrative operations and enhance communication. The platform provides:

- **Faculty Management**: Complete CRUD operations for faculty profiles with photo uploads
- **Content Management**: Blog posts, announcements, and notices
- **Form Builder**: Drag-and-drop form creation with live preview and sharing capabilities
- **Authentication**: Secure access with Clerk authentication
- **Real-time Data**: Database operations with Drizzle ORM and PostgreSQL
- **Storage**: Image and file uploads via Supabase Storage

---

## ✨ Features

### 1. **Faculty Management System**
- ✅ Create, Read, Update, Delete (CRUD) faculty profiles
- ✅ Store faculty information:
  - Name, Designation, Department
  - Email, Phone, Educational Degrees
  - Profile photographs with storage management
- ✅ Browse faculty directory
- ✅ Dedicated admin interface for faculty management
- ✅ Filter and search capabilities

### 2. **Content Management (Blog/Announcements/Notices)**
- ✅ Create and manage blog posts, announcements, and notices
- ✅ Organize content by category (blog, announcement, notice)
- ✅ Rich content support with markdown
- ✅ Timestamp tracking (creation date)
- ✅ Admin dashboard for content moderation
- ✅ Public viewing of announcements and notices

### 3. **Intelligent Form Builder**
- ✅ Drag-and-drop form creation interface
- ✅ 13+ pre-built form components:
  - Text Elements: Header, Paragraph
  - Input Fields: Text, Email, Textarea, Number
  - Selection: Checkbox, Radio, Select, Slider
  - Special: Rating, Date, File Upload
- ✅ JSON-based form storage and export
- ✅ Live preview while building
- ✅ Reorderable form elements with drag-and-drop
- ✅ Form submission handling and storage
- ✅ Shareable form links
- ✅ View form submissions with data export

### 4. **User Authentication & Security**
- ✅ Secure authentication via Clerk
- ✅ Protected admin routes
- ✅ User profile management
- ✅ Sign-in and Sign-up flows

### 5. **Modern UI/UX**
- ✅ Responsive design with Tailwind CSS
- ✅ Dark mode support with Next-Themes
- ✅ Radix UI component library
- ✅ Smooth animations with Motion
- ✅ Toast notifications with Sonner
- ✅ Professional dashboard layouts

### 6. **Data Management**
- ✅ PostgreSQL database with Drizzle ORM
- ✅ Type-safe schemas with Zod validation
- ✅ Scalable storage with Supabase
- ✅ Optimized queries with React Query

---

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 16 (React 19)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4, PostCSS
- **UI Components**: Radix UI + Custom Components
- **Forms**: React Hook Form with Zod validation
- **Animations**: Motion, Embla Carousel
- **Icons**: Lucide React, React Icons

### Backend
- **Runtime**: Node.js with Next.js API Routes
- **Database**: PostgreSQL with Drizzle ORM
- **ORM**: Drizzle ORM with type-safety
- **Authentication**: Clerk
- **Storage**: Supabase Storage + PostgreSQL
- **Schema Validation**: Zod

### Development & Build
- **Package Manager**: pnpm
- **Linting**: ESLint
- **Database Migrations**: Drizzle Kit
- **Monorepo Support**: pnpm workspaces

---

## 🏗 Architecture

### System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    CLIENT LAYER (React/Next.js)             │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Landing    │  │    Faculty   │  │ Form Builder │      │
│  │   Pages      │  │   Management │  │   Interface  │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Posts/     │  │   Admin      │  │ Auth Pages   │      │
│  │ Announcements│  │   Dashboard  │  │ (Sign In/Up) │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│                                                              │
└─────────────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    API LAYER (Next.js Routes)               │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ GET/POST    /api/faculty           [Faculty CRUD]  │   │
│  │ GET/PUT/DEL /api/faculty/[id]                      │   │
│  │ GET/POST    /api/forms             [Forms CRUD]    │   │
│  │ GET/PUT/DEL /api/forms/[id]                        │   │
│  │ POST        /api/forms/[id]/submit [Submissions]   │   │
│  │ GET         /api/forms/[id]/submissions [View Data]│   │
│  │ GET/POST    /api/posts             [Content CRUD]  │   │
│  │ GET/PUT/DEL /api/posts/[id]                        │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│              SERVICE LAYER (Storage & Utils)                │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────┐  ┌──────────────┐  ┌────────────────┐    │
│  │  Storage    │  │  Supabase    │  │ File Upload    │    │
│  │  Service    │  │  Client      │  │ Management     │    │
│  └─────────────┘  └──────────────┘  └────────────────┘    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                 DATA LAYER (Database)                       │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌───────────────┐  ┌───────────────┐  ┌──────────────┐   │
│  │   Faculty     │  │    Forms      │  │   Posts      │   │
│  │   Table       │  │   Table       │  │  Table       │   │
│  └───────────────┘  └───────────────┘  └──────────────┘   │
│                                                              │
│  ┌──────────────────┐         ┌──────────────────┐         │
│  │  Submissions     │         │  Storage         │         │
│  │  Table           │         │  (Supabase)      │         │
│  └──────────────────┘         └──────────────────┘         │
│       PostgreSQL Database                                   │
└─────────────────────────────────────────────────────────────┘
```

### Data Flow Diagram

```
User Interaction
      │
      ▼
┌─────────────────┐
│  React Component│ (Form, Faculty Editor, Form Builder)
└─────────────────┘
      │
      ▼
┌─────────────────────────┐
│  Zod Validation Schema  │ (Validate input data)
└─────────────────────────┘
      │
      ▼
┌─────────────────────────┐
│  API Route Handler      │ (GET/POST/PUT/DELETE)
└─────────────────────────┘
      │
      ▼
┌─────────────────────────────────┐
│  Storage Service (lib/storage)  │ (Business logic)
└─────────────────────────────────┘
      │
      ▼
┌─────────────────────────────────┐
│  Drizzle ORM + PostgreSQL        │ (Database operations)
└─────────────────────────────────┘
      │
      ▼
┌─────────────────────────────────┐
│  Supabase Storage (if needed)    │ (File uploads)
└─────────────────────────────────┘
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or latest LTS
- pnpm (Package manager)
- PostgreSQL database
- Supabase account (for storage)
- Clerk account (for authentication)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd svcdalauda
```

2. **Install dependencies**
```bash
pnpm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/svcdalauda

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-key
CLERK_SECRET_KEY=your-clerk-secret

# File Upload
NEXT_PUBLIC_STORAGE_BUCKET=form-uploads
```

4. **Set up the database**
```bash
pnpm db:push
```

5. **Run the development server**
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
pnpm build
pnpm start
```

---

## 📁 Project Structure

```
svcdalauda/
├── app/                              # Next.js App Router
│   ├── (auth)/                       # Authentication routes
│   │   ├── sign-in/                  # Clerk sign-in page
│   │   └── sign-up/                  # Clerk sign-up page
│   │
│   ├── (pages)/                      # Public & admin pages
│   │   ├── (landing)/                # Landing page
│   │   ├── about/                    # About page
│   │   ├── faculty/                  # Faculty directory
│   │   ├── posts/                    # Blog/Announcements/Notices
│   │   └── admin/                    # Admin dashboard
│   │       ├── faculty/              # Faculty management
│   │       ├── posts/                # Content management
│   │       ├── form/                 # Form management
│   │       │   ├── builder/[id]/     # Form builder interface
│   │       │   └── forms/[id]/       # Form details & submissions
│   │       └── user-profile/         # User profile
│   │
│   ├── api/                          # API routes
│   │   ├── faculty/                  # Faculty endpoints
│   │   ├── forms/                    # Forms endpoints
│   │   └── posts/                    # Posts endpoints
│   │
│   ├── globals.css                   # Global styles
│   ├── layout.tsx                    # Root layout
│   └── global-not-found.tsx          # 404 page
│
├── components/                       # React components
│   ├── admin/                        # Admin-specific components
│   │   ├── Faculty/                  # Faculty management UI
│   │   ├── FormBuilder/              # Form builder components
│   │   │   ├── CanvasItem.tsx        # Draggable form items
│   │   │   ├── FormRenderer.tsx      # Live form preview
│   │   │   ├── PropertiesPanel.tsx   # Element properties editor
│   │   │   └── SidebarItem.tsx       # Available components sidebar
│   │   └── Navigation/               # Admin nav components
│   │
│   ├── core/                         # Core components
│   │   ├── HeroSection.tsx           # Landing hero
│   │   ├── CampusFacilities.tsx      # Facilities display
│   │   ├── Gallary.tsx               # Image gallery
│   │   ├── QuickLinks.tsx            # Navigation links
│   │   ├── PrincipalMessage.tsx      # Message section
│   │   ├── Notices.tsx               # Notices display
│   │   └── CourseSection.tsx         # Course information
│   │
│   ├── ui/                           # UI component library
│   │   ├── button.tsx, card.tsx,    # Radix UI wrapped components
│   │   ├── form.tsx, input.tsx,     # Form components
│   │   ├── dialog.tsx, modal.tsx,   # Dialog components
│   │   └── ... (30+ UI components)
│   │
│   └── provider/                     # Context providers
│       ├── AppWrapper.tsx            # Root provider
│       ├── ThemeProvider.tsx         # Theme context
│       └── TSProvider.tsx            # TypeScript provider
│
├── hooks/                            # Custom React hooks
│   ├── use-faculty.ts                # Faculty data fetching
│   ├── use-forms.ts                  # Forms data fetching
│   ├── use-posts.ts                  # Posts data fetching
│   ├── use-mobile.ts                 # Mobile detection
│   └── use-toast.ts                  # Toast notifications
│
├── lib/                              # Utility libraries
│   ├── supabase.ts                   # Supabase client setup
│   ├── storage.ts                    # Database operations
│   ├── db.ts                         # Database connection
│   ├── client.ts                     # HTTP client utils
│   └── utils.ts                      # Common utilities
│
├── shared/                           # Shared utilities & schemas
│   ├── schema.ts                     # Database schemas (Drizzle)
│   └── routes.ts                     # API route definitions
│
├── public/                           # Static assets
│   └── assets/                       # Images, icons, etc.
│
├── package.json                      # Dependencies & scripts
├── tsconfig.json                     # TypeScript config
├── next.config.ts                    # Next.js config
├── tailwind.config.js                # Tailwind CSS config
├── drizzle.config.ts                 # Drizzle ORM config
└── README.md                         # This file
```

---

## 📡 API Documentation

### Base URL
```
http://localhost:3000/api
```

### Faculty Endpoints

#### List All Faculty
```http
GET /api/faculty
```
**Response (200 OK):**
```json
[
  {
    "id": 1,
    "name": "Dr. John Doe",
    "designation": "Professor",
    "department": "Computer Science",
    "email": "john.doe@college.edu",
    "phone": "+91-9876543210",
    "photo": "https://storage.url/faculty-photo.jpg",
    "degree": "Ph.D. in Computer Science"
  }
]
```

#### Get Single Faculty
```http
GET /api/faculty/:id
```
**Response (200 OK):** Single faculty object (same structure as above)

#### Create Faculty
```http
POST /api/faculty
Content-Type: application/json

{
  "name": "Dr. Jane Smith",
  "designation": "Associate Professor",
  "department": "Information Technology",
  "email": "jane.smith@college.edu",
  "phone": "+91-9876543211",
  "photo": "https://storage.url/photo.jpg",
  "degree": "Ph.D. in IT"
}
```
**Response (201 Created):** Created faculty object

#### Update Faculty
```http
PUT /api/faculty/:id
Content-Type: application/json

{
  "designation": "Professor",
  "phone": "+91-9876543212"
}
```
**Response (200 OK):** Updated faculty object

#### Delete Faculty
```http
DELETE /api/faculty/:id
```
**Response (200 OK):** Success message

---

### Posts/Content Endpoints

#### List All Posts
```http
GET /api/posts?category=blog
```
**Query Parameters:**
- `category` (optional): `blog`, `announcement`, or `notice`

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "title": "New Course Launch",
    "content": "We are excited to announce...",
    "category": "announcement",
    "createdAt": "2024-01-15T10:30:00Z"
  }
]
```

#### Get Single Post
```http
GET /api/posts/:id
```

#### Create Post
```http
POST /api/posts
Content-Type: application/json

{
  "title": "Campus Event",
  "content": "Join us for our annual college fest",
  "category": "announcement"
}
```
**Response (201 Created):** Created post object

#### Update Post
```http
PUT /api/posts/:id
Content-Type: application/json

{
  "title": "Updated Title",
  "content": "Updated content..."
}
```

#### Delete Post
```http
DELETE /api/posts/:id
```

---

### Forms Endpoints

#### List All Forms
```http
GET /api/forms
```
**Response (200 OK):**
```json
[
  {
    "id": 1,
    "name": "Admission Form",
    "description": "College admission application",
    "content": [
      {
        "id": "field-1",
        "type": "header",
        "label": "Student Information"
      },
      {
        "id": "field-2",
        "type": "text",
        "label": "Full Name",
        "required": true
      }
    ],
    "isPublished": true,
    "createdAt": "2024-01-15T10:30:00Z"
  }
]
```

#### Get Single Form
```http
GET /api/forms/:id
```

#### Create Form
```http
POST /api/forms
Content-Type: application/json

{
  "name": "Feedback Form",
  "description": "Student feedback collection",
  "content": [
    {
      "id": "header-1",
      "type": "header",
      "label": "Course Feedback"
    }
  ]
}
```

#### Update Form
```http
PUT /api/forms/:id
```

#### Submit Form
```http
POST /api/forms/:id/submit
Content-Type: application/json

{
  "data": {
    "field-1": "John Doe",
    "field-2": "john@example.com",
    "field-3": 4.5
  }
}
```
**Response (201 Created):**
```json
{
  "id": 1,
  "formId": 5,
  "data": {
    "field-1": "John Doe",
    "field-2": "john@example.com",
    "field-3": 4.5
  },
  "submittedAt": "2024-01-15T11:45:00Z"
}
```

#### Get Form Submissions
```http
GET /api/forms/:id/submissions
```
**Response (200 OK):** Array of submission objects

---

## 🛣️ Routes

### Public Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `(landing)/page.tsx` | Landing page with hero section |
| `/about` | `about/page.tsx` | About the college page |
| `/faculty` | `faculty/page.tsx` | Faculty directory listing |
| `/faculty/:id` | `faculty/[id]/page.tsx` | Individual faculty profile |
| `/posts` | `posts/page.tsx` | Blog/Announcements/Notices list |
| `/posts/:id` | `posts/[id]/page.tsx` | Individual post/article |

### Authentication Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/sign-in` | `(auth)/sign-in/[[...sign-in]]/page.tsx` | Clerk sign-in page |
| `/sign-up` | `(auth)/sign-up/[[...sign-up]]/page.tsx` | Clerk sign-up page |

### Admin Routes (Protected)

| Route | Component | Description |
|-------|-----------|-------------|
| `/admin` | `admin/page.tsx` | Admin dashboard |
| `/admin/faculty` | `admin/faculty/page.tsx` | Faculty management (CRUD) |
| `/admin/posts` | `admin/posts/page.tsx` | Content management |
| `/admin/form` | `admin/form/page.tsx` | Forms list |
| `/admin/form/builder/:id` | `admin/form/builder/[id]/page.tsx` | Form builder editor |
| `/admin/form/forms/:id` | `admin/form/forms/[id]/page.tsx` | Form details & settings |
| `/admin/form/forms/:id/submissions` | `admin/form/forms/[id]/submissions/page.tsx` | View form submissions |
| `/admin/user-profile` | `admin/user-profile/[[...user-profile]]/page.tsx` | User profile management |

---

## 🗄️ Database Schema

### Faculty Table
```typescript
faculty {
  id: number (primary key)
  name: string
  designation: string
  department: string
  email: string
  phone: string
  photo: string (URL)
  degree: string
}
```

### Posts Table
```typescript
posts {
  id: number (primary key)
  title: string
  content: text
  category: enum("blog", "announcement", "notice")
  createdAt: timestamp (auto)
}
```

### Forms Table
```typescript
forms {
  id: number (primary key)
  name: string
  description: text (optional)
  content: jsonb (FormElement[])
  isPublished: boolean (default: true)
  createdAt: timestamp (auto)
}
```

### Submissions Table
```typescript
submissions {
  id: number (primary key)
  formId: number (foreign key → forms.id)
  data: jsonb (key-value pairs)
  submittedAt: timestamp (auto)
}
```

### FormElement Type
```typescript
interface FormElement {
  id: string
  type: "header" | "paragraph" | "text" | "textarea" | "email" 
      | "number" | "checkbox" | "radio" | "select" | "slider" 
      | "rating" | "date" | "file"
  label: string
  placeholder?: string
  required?: boolean
  options?: string[] // For select/radio
  min?: number
  max?: number
  step?: number
  accept?: string // For file uploads
}
```

---

## ⚡ Features in Detail

### Form Builder Deep Dive

The Form Builder provides a powerful interface for creating forms without coding:

#### Available Components

1. **Layout Components**
   - Header (h1-h6)
   - Paragraph (text block)

2. **Input Components**
   - Text Input
   - Email Input
   - Number Input
   - Textarea
   - Date Picker

3. **Selection Components**
   - Checkbox
   - Radio Button
   - Select Dropdown
   - Slider

4. **Special Components**
   - Rating (1-5 stars)
   - File Upload

#### Builder Features

- **Drag & Drop**: Reorder form elements easily
- **Properties Panel**: Edit field properties (label, placeholder, validation)
- **Live Preview**: See form changes in real-time
- **JSON Export**: Download form as JSON for portability
- **Form Sharing**: Generate shareable links for form submissions
- **Data Collection**: View and export all form submissions
- **Responsive**: Forms adapt to mobile and desktop screens

#### Form Creation Workflow

```
1. Admin navigates to /admin/form
   ↓
2. Clicks "Create New Form"
   ↓
3. Opens Form Builder at /admin/form/builder/:id
   ↓
4. Adds components from sidebar
   ↓
5. Configures each component properties
   ↓
6. Uses live preview to verify
   ↓
7. Saves form (stored as JSON in database)
   ↓
8. Gets shareable public link
   ↓
9. Users can access and submit via public link
   ↓
10. Admin views submissions at /admin/form/forms/:id/submissions
```

### Faculty Management

Complete CRUD operations for faculty profiles:

- **Create**: Add new faculty with photo upload
- **Read**: View all faculty or individual profiles
- **Update**: Edit faculty information anytime
- **Delete**: Remove faculty records
- **Search/Filter**: Find faculty by department or name

### Content Management

Manage three types of content:

1. **Blog Posts**: Educational articles and stories
2. **Announcements**: Important college updates
3. **Notices**: Official notices and regulations

Each post includes:
- Markdown support
- Category classification
- Automatic timestamps
- Admin edit/delete capabilities

---

## 🌍 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git remote add origin <your-github-repo>
git push -u origin main
```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Click "Import"

3. **Set Environment Variables**
   - Add all `.env.local` variables in Vercel project settings
   - Go to Settings → Environment Variables
   - Add each variable

4. **Deploy**
   - Vercel will automatically deploy on push to main
   - Deployment logs available in Vercel dashboard

### Environment Variables for Production

```env
# Database (use managed PostgreSQL service)
DATABASE_URL=postgresql://user:pass@db-host:5432/svcdalauda

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-key
CLERK_SECRET_KEY=your-secret
CLERK_WEBHOOK_SECRET=your-webhook-secret

# Storage
NEXT_PUBLIC_STORAGE_BUCKET=form-uploads
```

### Database Setup

For production PostgreSQL, use:
- [Supabase PostgreSQL](https://supabase.com) (recommended - free tier available)
- [Railway](https://railway.app)
- [Render](https://render.com)
- [AWS RDS](https://aws.amazon.com/rds/)

---

## 📊 Database Relations Diagram

```
┌─────────────────┐
│     FACULTY     │
├─────────────────┤
│ id (PK)         │
│ name            │
│ designation     │
│ department      │
│ email           │
│ phone           │
│ photo (URL)     │
│ degree          │
└─────────────────┘

┌─────────────────┐
│      POSTS      │
├─────────────────┤
│ id (PK)         │
│ title           │
│ content         │
│ category        │
│ createdAt       │
└─────────────────┘

┌─────────────────────────────────┐
│           FORMS                 │
├─────────────────────────────────┤
│ id (PK)                         │
│ name                            │
│ description                     │
│ content (JSON)                  │
│ isPublished                     │
│ createdAt                       │
└─────────────────────────────────┘
           │
           │ 1:N relationship
           │
           ▼
┌─────────────────────────────────┐
│       SUBMISSIONS               │
├─────────────────────────────────┤
│ id (PK)                         │
│ formId (FK) ─────────────┘      │
│ data (JSON)                     │
│ submittedAt                     │
└─────────────────────────────────┘
```

---

## 🔒 Security Features

- ✅ Clerk authentication for secure access
- ✅ Protected admin routes
- ✅ Zod schema validation on all inputs
- ✅ SQL injection prevention via ORM
- ✅ CORS configuration
- ✅ Environment variable protection
- ✅ Type-safe API contracts

---

## 📈 Performance Optimizations

- ✅ Server-side rendering with Next.js
- ✅ Optimized images with next/image
- ✅ React Query for efficient data fetching
- ✅ CSS-in-JS with Tailwind (no runtime)
- ✅ Code splitting and lazy loading
- ✅ Optimized bundle size

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is private and proprietary to SVC Dalauda College.

---

## 📞 Support & Contact

For issues, feature requests, or support:
- Open an issue in the repository
- Contact the development team
- Email: support@svcdalauda.edu

---

## 🚀 Future Enhancements

- [ ] Email notifications for announcements
- [ ] SMS alerts for important notices
- [ ] Student registration system
- [ ] Event management and registration
- [ ] Alumni network
- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] Mobile app (React Native)
- [ ] Real-time notifications with WebSockets
- [ ] Advanced reporting and exports

---

**Last Updated**: January 2026
**Version**: 1.0.0
**Status**: Active Development
