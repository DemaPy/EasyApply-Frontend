import { useParams } from "react-router-dom";
import { ContextCreate } from "./[type]/context/ContextCreate";
import { ReactNode } from "react";
import { ResumeCreate } from "./[type]/resume/ResumeCreate";

type TypeParam = "context" | "resume";

const createRegistry: Record<TypeParam, () => ReactNode> = {
  context: ContextCreate,
  resume: ResumeCreate,
};

export const Create = () => {
  const { type } = useParams<{ type: TypeParam }>();

  if (!type) return "Type not found";

  const Component = createRegistry[type];

  return <Component />;
};
