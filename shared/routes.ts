import { z } from 'zod';
import { insertFormSchema, insertSubmissionSchema, forms, submissions } from './schema';
import { insertFacultySchema, insertPostSchema, faculty, posts } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  forms: {
    list: {
      method: 'GET' as const,
      path: '/api/forms',
      responses: {
        200: z.array(z.custom<typeof forms.$inferSelect>()),
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/forms/:id',
      responses: {
        200: z.custom<typeof forms.$inferSelect>(),
        404: errorSchemas.notFound,
      },
    },
    create: {
      method: 'POST' as const,
      path: '/api/forms',
      input: insertFormSchema,
      responses: {
        201: z.custom<typeof forms.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
    update: {
      method: 'PUT' as const,
      path: '/api/forms/:id',
      input: insertFormSchema.partial(),
      responses: {
        200: z.custom<typeof forms.$inferSelect>(),
        404: errorSchemas.notFound,
      },
    },
    submit: {
      method: 'POST' as const,
      path: '/api/forms/:id/submit',
      input: z.object({ data: z.record(z.string(), z.any()) }),
      responses: {
        201: z.custom<typeof submissions.$inferSelect>(),
        404: errorSchemas.notFound,
      },
    },
    getSubmissions: {
      method: 'GET' as const,
      path: '/api/forms/:id/submissions',
      responses: {
        200: z.array(z.custom<typeof submissions.$inferSelect>()),
        404: errorSchemas.notFound,
      },
    }
  },
  faculty: {
    list: {
      method: 'GET' as const,
      path: '/api/faculty',
      responses: {
        200: z.array(z.custom<typeof faculty.$inferSelect>()),
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/faculty/:id',
      responses: {
        200: z.custom<typeof faculty.$inferSelect>(),
        404: errorSchemas.notFound,
      },
    },
    create: {
      method: 'POST' as const,
      path: '/api/faculty',
      input: insertFacultySchema,
      responses: {
        201: z.custom<typeof faculty.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
    update: {
      method: 'PUT' as const,
      path: '/api/faculty/:id',
      input: insertFacultySchema.partial(),
      responses: {
        200: z.custom<typeof faculty.$inferSelect>(),
        400: errorSchemas.validation,
        404: errorSchemas.notFound,
      },
    },
    delete: {
      method: 'DELETE' as const,
      path: '/api/faculty/:id',
      responses: {
        204: z.void(),
        404: errorSchemas.notFound,
      },
    },
  },
  posts: {
    list: {
      method: 'GET' as const,
      path: '/api/posts',
      input: z.object({
        category: z.enum(["blog", "announcement", "notice"]).optional(),
      }).optional(),
      responses: {
        200: z.array(z.custom<typeof posts.$inferSelect>()),
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/posts/:id',
      responses: {
        200: z.custom<typeof posts.$inferSelect>(),
        404: errorSchemas.notFound,
      },
    },
    create: {
      method: 'POST' as const,
      path: '/api/posts',
      input: insertPostSchema,
      responses: {
        201: z.custom<typeof posts.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
    update: {
      method: 'PUT' as const,
      path: '/api/posts/:id',
      input: insertPostSchema.partial(),
      responses: {
        200: z.custom<typeof posts.$inferSelect>(),
        400: errorSchemas.validation,
        404: errorSchemas.notFound,
      },
    },
    delete: {
      method: 'DELETE' as const,
      path: '/api/posts/:id',
      responses: {
        204: z.void(),
        404: errorSchemas.notFound,
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
