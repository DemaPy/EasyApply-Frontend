import { ApiResponse } from "@/types";

interface Req {
  url: string;
  options?: RequestInit;
}
export const api = async ({ url, options }: Req) => {
  const _options: RequestInit =
    options && options.method === "POST"
      ? {
          ...options,
          headers: { "Content-Type": "application/json" },
        }
      : {
          ...options,
          method: "GET",
        };
  const response = await fetch(import.meta.env.VITE_BASE_URL + url, _options);
  if (!response.ok) {
    const json: ApiResponse<null> = await response.json();
    const message = json?.message ?? "Api error";
    throw new Error(message);
  }
  if (response.status >= 500) {
    throw new Error("Server error");
  }
  return response.json();
};
