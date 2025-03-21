import { Context as ContextType } from "@/types";
import {
  CreateButton,
  FlexContainer,
  ScrollableContainer,
  TabContentTitle,
} from "../molecules";
import { Context } from "../organisms/Context";
import { useNavigate } from "react-router-dom";

export const ContextTabContent = () => {
  const navigate = useNavigate()
  const contexts: ContextType[] = [
    {
      id: "1",
      title: "React Developer",
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
    navigate("/create/context");
  };

  return (
    <FlexContainer className="flex-col gap-2 items-stretch">
      <TabContentTitle onClick={() => console.log("view all")}>
        Created context
      </TabContentTitle>
      <ScrollableContainer>
        {contexts.map((context) => (
          <Context key={context.id} context={context} />
        ))}
      </ScrollableContainer>
      <CreateButton onClick={onCreate} />
    </FlexContainer>
  );
};
