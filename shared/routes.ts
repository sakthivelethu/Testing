import { z } from 'zod';
import { careerPaths } from './schema';

export const api = {
  careerPaths: {
    list: {
      method: 'GET' as const,
      path: '/api/career-paths',
      responses: {
        200: z.array(z.custom<typeof careerPaths.$inferSelect>()),
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/career-paths/:id',
      responses: {
        200: z.custom<typeof careerPaths.$inferSelect>(),
        404: z.object({ message: z.string() }),
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
