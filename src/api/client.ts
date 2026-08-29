export type ApiResponse<T> = { data: T; message?: string };

export async function apiFetch<T>(path: string, options?: RequestInit): Promise<ApiResponse<T>> {
  const response = await fetch(path, { ...options, headers: { "Content-Type": "application/json", ...options?.headers } });
  if (!response.ok) throw new Error(`Glowtique API request failed: ${response.status}`);
  return response.json() as Promise<ApiResponse<T>>;
}