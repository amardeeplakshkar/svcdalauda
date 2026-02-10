import { storage } from '@/lib/storage'
import { MetadataRoute } from 'next'

const BASE_URL = 'https://www.svgcdalauda.in'

// Use an environment-provided deploy timestamp when available so static
// routes have a stable lastModified across builds. Fallback to epoch.
const DEPLOY_TIMESTAMP = process.env.DEPLOY_TIMESTAMP
  ? new Date(process.env.DEPLOY_TIMESTAMP)
  : new Date()

const safeDate = (date?: Date | string | null): Date => {
  if (date === undefined || date === null) return new Date()
  if (typeof date === 'string') return new Date(date)
  return date
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // ─────────────────────────────────────
  // STATIC ROUTES
  // ─────────────────────────────────────
  const staticRoutes: MetadataRoute.Sitemap = [
    '/',
    '/about',
    '/faculty',
    '/posts',
    '/contact'
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: DEPLOY_TIMESTAMP,
    changeFrequency: 'weekly' as const,
    priority: 0.8
  }))

  // ─────────────────────────────────────
  // POSTS
  // ─────────────────────────────────────
  let postRoutes: MetadataRoute.Sitemap = []
  try {
    const posts = await storage.getPosts()
    postRoutes = posts.map((post) => ({
      url: `${BASE_URL}/posts/${post.id}`,
      lastModified: safeDate(post.createdAt),
      changeFrequency: 'weekly' as const,
      priority: 0.7
    }))
  } catch (err) {
    console.error('Failed to fetch posts for sitemap', err)
    postRoutes = []
  }

  // ─────────────────────────────────────
  // FACULTY
  // ─────────────────────────────────────
  let facultyRoutes: MetadataRoute.Sitemap = []
  try {
    const faculty = await storage.getFacultyList()
    facultyRoutes = faculty.map((f) => ({
      url: `${BASE_URL}/faculty/${f.id}`,
      lastModified: safeDate((f as any).updatedAt || (f as any).createdAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6
    }))
  } catch (err) {
    console.error('Failed to fetch faculty for sitemap', err)
    facultyRoutes = []
  }

  // ─────────────────────────────────────
  // FORMS (public only)
  // ─────────────────────────────────────
  let formRoutes: MetadataRoute.Sitemap = []
  try {
    const forms = await storage.getForms()
    const publicForms = forms.filter((f: any) => f.isPublished === true)
    formRoutes = publicForms.map((form: any) => ({
      url: `${BASE_URL}/form/${form.id}`,
      lastModified: safeDate(form.createdAt),
      changeFrequency: 'monthly' as const,
      priority: 0.5
    }))
  } catch (err) {
    console.error('Failed to fetch forms for sitemap', err)
    formRoutes = []
  }

  return [
    ...staticRoutes,
    ...postRoutes,
    ...facultyRoutes,
    ...formRoutes
  ]
}
