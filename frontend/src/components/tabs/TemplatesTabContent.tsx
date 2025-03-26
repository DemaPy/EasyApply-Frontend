import { Template as TemplateType } from "@/types";
import {
  FlexContainer,
  ScrollableContainer,
  TabContentTitle,
} from "../molecules";
import { Template } from "../organisms/Template";

export const TemplatesTabContent = () => {
  const templates: TemplateType[] = [
    {
      id: "1",
      title: "Monix",
    },
    {
      id: "2",
      title: "Sonic",
    },
    {
      id: "3",
      title: "Vintage",
    },
    {
      id: "4",
      title: "Modern",
    },
    {
      id: "5",
      title: "Custom",
    },
  ];

  return (
    <FlexContainer className="flex-col gap-2 items-stretch">
      <TabContentTitle onClick={() => console.log("view all")}>
        Resume templates
      </TabContentTitle>
      <ScrollableContainer>
        {templates.map((resume) => (
          <Template key={resume.id} template={resume} />
        ))}
      </ScrollableContainer>
    </FlexContainer>
  );
};
