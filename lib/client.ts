import { api, buildUrl } from "@/shared/routes";

export async function apiFetch<T>(
  endpoint: { path: string; method: string },
  params?: Record<string, string | number>,
  body?: unknown
): Promise<T> {
  const res = await fetch(buildUrl(endpoint.path, params), {
    method: endpoint.method,
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });

  const json = await res.json();

  if (!res.ok) {
    throw json;
  }

  return json;
}
