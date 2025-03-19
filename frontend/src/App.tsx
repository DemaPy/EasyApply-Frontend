import {
  BodySection,
  FooterSection,
  HeadingSection,
} from "./components/templates";

export const App = () => {
  return (
    <main>
      <HeadingSection />
      <BodySection />
      <FooterSection />
    </main>
  );
};
