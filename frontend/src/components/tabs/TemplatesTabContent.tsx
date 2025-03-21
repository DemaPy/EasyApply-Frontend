import { Template as TemplateType } from "@/types";
import {
  CreateButton,
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

  const onCreate = () => {
    alert("Create template");
  };

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
      <CreateButton onClick={onCreate} />
    </FlexContainer>
  );
};
