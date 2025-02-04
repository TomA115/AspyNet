import { Card } from "flowbite-react";

type FlatCardProps = {
  title?: string;
  text?: string;
};

const FlatCard = ({ title = "", text = ""}: FlatCardProps) => {
  return (
    <Card className="max-w-sm bg-white dark:bg-white border-none dark:text-blue-600 text-blue-600">
      <h5 className="text-2xl font-bold tracking-tight">
        {title}
      </h5>
      <p className="font-normal dark:text-black text-black ">
        {text}
      </p>
    </Card>
  );
};

export default FlatCard;