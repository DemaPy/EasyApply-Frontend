interface Req {
  url: string;
  options: RequestInit;
}

const BASE_URL = "http://localhost:3000";

export const api = async ({ url, options }: Req) => {
  const _options: RequestInit =
    options.method === "POST"
      ? {
          ...options,
          headers: { "Content-Type": "application/json" },
        }
      : options;
  try {
    const response = await fetch(BASE_URL + url, _options);
    if (!response.ok) {
      throw new Error("Api error");
    }
    if (response.status >= 500) {
      throw new Error("Server error");
    }
    return response.json();
  } catch (error) {
    console.log(error);
    return { error: "Error", status: 400 };
  }
};
