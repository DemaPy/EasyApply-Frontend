import { Button } from "../ui/button";

interface Props {
  type?: 'submit' | 'button'
  onClick?: () => void;
}

export const CreateButton = ({ onClick, type }: Props) => {
  return (
    <Button
      type={type ?? 'button'}
      variant={"default"}
      className="bg-green-600 font-bold text-white"
      onClick={onClick}
    >
      Create
    </Button>
  );
};
