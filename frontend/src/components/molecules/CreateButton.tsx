import { Button } from "../ui/button"

interface Props {
    onClick: () => void
}

export const CreateButton = ({ onClick }: Props) => {
  return (
    <Button variant={'default'} className="bg-green-600 font-bold text-white" onClick={onClick}>Create</Button>
  )
}