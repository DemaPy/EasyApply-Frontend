import { ContextSchema } from "@/components/pages";
import { api } from "../init";
import { z } from "zod";

export const createContext = async (payload: z.infer<ContextSchema>) => {
  return await api({
    url: "/context",
    options: {
      method: "POST",
      body: JSON.stringify(payload),
    },
  });
};
