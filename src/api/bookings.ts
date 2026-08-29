import { bookings } from "./mock";
import type { ApiResponse } from "./client";

export const bookingsApi = {
  mine: async (): Promise<ApiResponse<typeof bookings>> => ({ data: bookings }),
  create: async (payload: Record<string, unknown>): Promise<ApiResponse<{ bookingId: string; payload: Record<string, unknown> }>> => ({ data: { bookingId: "GT-240901", payload } }),
};