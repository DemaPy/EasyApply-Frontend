import { Container } from "../molecules/Container";
import {
  ContextTabContent,
  TemplatesTabContent,
  ResumesTabContent,
  SectionWrapper,
  UserHeader,
} from "../organisms";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";

export const BodySection = () => {
  return (
    <SectionWrapper className="bg-green-800/50 rounded-md">
      <Container className="gap-4" >
        <UserHeader />
        <Tabs defaultValue="resumes">
          <TabsList className="w-full">
            <TabsTrigger className="text-white text-md" value="resumes">Resumes</TabsTrigger>
            <TabsTrigger className="text-white text-md" value="context">Context</TabsTrigger>
            <TabsTrigger className="text-white text-md" value="templates">Template</TabsTrigger>
          </TabsList>
          <TabsContent value="resumes">
            <ResumesTabContent />
          </TabsContent>
          <TabsContent value="context">
            <ContextTabContent />
          </TabsContent>
          <TabsContent value="templates">
            <TemplatesTabContent />
          </TabsContent>
        </Tabs>
      </Container>
    </SectionWrapper>
  );
};
