import { artists, type Artist } from "./mock";
import type { ApiResponse } from "./client";

export const artistsApi = {
  list: async (): Promise<ApiResponse<Artist[]>> => ({ data: artists }),
  get: async (id: string): Promise<ApiResponse<Artist | undefined>> => ({ data: artists.find((artist) => artist.id === id) }),
};