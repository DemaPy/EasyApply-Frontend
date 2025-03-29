import { api } from "../init";

export const buyCredits = async (pack: string) => {
  return await api({
    url: "/credits",
    options: {
      method: "POST",
      body: JSON.stringify({ pack }),
    },
  });
};
