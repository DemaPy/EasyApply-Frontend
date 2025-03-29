import { Title } from "@/components/atoms";
import { CreditsCard } from "./components/CreditsCard";
import { buyCredits } from "@/api/credits";

export const Credits = () => {
  const handleClick = (pack: string) => () => buyCredits(pack);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <Title>Buy credits</Title>
        <Title As="p" className="text-sm text-neutral-100 font-normal">
          Credits allows you to generate resumes based on provided job
          description.
        </Title>
      </div>
      <div className="flex flex-col gap-2">
        <CreditsCard price="9" title="99" onClick={handleClick("small")} />
        <CreditsCard price="16" title="199" onClick={handleClick("medium")} />
        <CreditsCard price="26" title="299" onClick={handleClick("max")} />
      </div>
    </div>
  );
};
