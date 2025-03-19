import { Resume as ResumeType } from "@/types";
import {
  CreateButton,
  FlexContainer,
  ScrollableContainer,
  TabContentTitle,
} from "../molecules";
import { Resume } from "./Resume";

export const ResumesTabContent = () => {
  const resumes: ResumeType[] = [
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

  const onCreate = () => {
    alert('Create resume')
  }

  return (
    <FlexContainer className="flex-col gap-2 items-stretch">
      <TabContentTitle onClick={() => console.log("view all")}>
        Generated resumes
      </TabContentTitle>
      <ScrollableContainer>
        {resumes.map((resume) => (
          <Resume key={resume.id} resume={resume} />
        ))}
      </ScrollableContainer>
      <CreateButton onClick={onCreate} />
    </FlexContainer>
  );
};
