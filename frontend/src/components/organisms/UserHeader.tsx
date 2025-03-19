import { FlexContainer } from "../molecules/FlexContainer";
import { UserTitle } from "../molecules";
import Settings from "./Settings";

export const UserHeader = () => {
  return (
    <FlexContainer>
      <UserTitle name="Slavek" />
      <Settings />
    </FlexContainer>
  );
};
