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
  const response = await fetch(import.meta.env.VITE_BASE_URL_PROD + url, _options);
  if (!response.ok) {
    throw new Error("Api error");
  }
  if (response.status >= 500) {
    throw new Error("Server error");
  }
  return response.json();
};
