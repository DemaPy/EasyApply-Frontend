import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useCredits } from "@/hooks";

export const Credits = () => {
  const credits = useCredits();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/credits");
  };
  return (
    <Button variant={"ghost"} className="cursor-pointer" onClick={handleNavigate}>
      {credits} credits
    </Button>
  );
};
