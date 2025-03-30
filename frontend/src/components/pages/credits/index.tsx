import { Title } from "@/components/atoms";
import { CreditsCard } from "./components/CreditsCard";

export const Credits = () => {
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
        <CreditsCard
          price="6"
          title="Small pack - 100"
          url={import.meta.env.VITE_STRIPE_PAYMENT_LINK_SMALL_PACK}
        />
        <CreditsCard
          price="9"
          title="Large pack - 250"
          url={import.meta.env.VITE_STRIPE_PAYMENT_LINK_MEDIUM_PACK}
        />
      </div>
    </div>
  );
};
