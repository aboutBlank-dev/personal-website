import { ComponentPropsWithoutRef } from "react";

interface HoverableCardProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  className?: string;
}

const HoverableCard = ({
  children,
  className,
  ...props
}: HoverableCardProps) => {
  return (
    <div
      className={`border-2 p-2 border-red-500 border-opacity-0 rounded-md 
                hover:border-opacity-100 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default HoverableCard;
