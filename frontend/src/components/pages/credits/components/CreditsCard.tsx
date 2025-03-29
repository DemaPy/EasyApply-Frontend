import { Title } from "@/components/atoms";
import { Button } from "@/components/ui/button";

interface Props {
  title: string;
  price: string;
  onClick: () => void;
}

export const CreditsCard = ({ onClick, title, price }: Props) => {
  return (
    <div className="flex items-center justify-between gap-4 px-3 py-3 bg-white rounded-md">
      <Title className="text-md">{title} credits</Title>
      <div>
        <Button
          className="bg-green-600 text-white font-bold cursor-pointer w-full"
          onClick={onClick}
        >
          Buy for <p>${price}</p>
        </Button>
      </div>
    </div>
  );
};
