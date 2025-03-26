import {
  CreateButton,
  FlexContainer,
  ScrollableContainer,
  TabContentTitle,
} from "../molecules";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllContext } from "@/api";
import type { Context as ContextType } from "@/types";
import { Context } from "../organisms";

export const ContextTabContent = () => {
  const navigate = useNavigate();
  const { isLoading, data, error } = useQuery({
    queryFn: getAllContext,
    queryKey: ["all_context"],
  });

  const onCreate = () => {
    navigate("/create/context");
  };

  if (isLoading) {
    return "Loading...";
  }

  if (error) {
    console.log(error);
    return "Oooops... error";
  }

  return (
    <FlexContainer className="flex-col gap-2 items-stretch">
      <TabContentTitle onClick={() => console.log("view all")}>
        Created context
      </TabContentTitle>
      <ScrollableContainer>
        {data?.map((context: ContextType) => (
          <Context key={context.id} context={context} />
        ))}
      </ScrollableContainer>
      <CreateButton onClick={onCreate} />
    </FlexContainer>
  );
};
