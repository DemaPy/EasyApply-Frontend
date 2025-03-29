import { Resume } from "@/types";
import { api } from "../init";

interface Payload {
  title: string;
  context: string;
  template: string;
  jobDescription: string;
}

export const resumes: Resume[] = [
  {
    id: "1",
    title: "Serve soft frontend developer",
  },
  {
    id: "2",
    title: "Backend Developer",
  },
  {
    id: "3",
    title: "Frontend Developer",
  },
  {
    id: "4",
    title: "Fullstack Developer",
  },
  {
    id: "5",
    title: "Android Developer",
  },
];

export const createResume = async (payload: Payload) => {
  return await api({
    url: "/resume",
    options: {
      method: "POST",
      body: JSON.stringify(payload),
    },
  });
};

export const getAllResumes = async () => {
  return await api({ url: "/resume" });
};
