import { Outlet } from "react-router-dom";
import { Container } from "../molecules/Container";
import { SectionWrapper } from "../organisms";

export const BodySection = () => {
  return (
    <SectionWrapper className="bg-green-800/50 rounded-md">
      <Container className="gap-4">
        <Outlet />
      </Container>
    </SectionWrapper>
  );
};
