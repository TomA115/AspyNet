import { Card } from "flowbite-react";

type FlatCardProps = {
  title?: string;
  text?: string[];
};

const FlatCard = ({ title = "", text = [] }: FlatCardProps) => {
  return (
    <Card className="max-w-sm min-w-[400px] bg-white dark:bg-white border-none dark:text-blue-600 text-blue-600">
      <h5 className="text-2xl font-bold tracking-tight">
        {title}
      </h5>
      <div className="space-y-2">
        {text.map((item, index) => (
          <p key={index} className="font-normal dark:text-gray-600 text-gray-600">
            {item}
          </p>
        ))}
      </div>
    </Card>
  );
};

export default FlatCard;