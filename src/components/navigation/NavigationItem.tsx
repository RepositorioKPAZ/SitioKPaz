
import { Button } from "@/components/ui/button";

interface NavigationItemProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const NavigationItem = ({ children, onClick, className = "" }: NavigationItemProps) => {
  return (
    <Button
      variant="ghost"
      onClick={onClick}
      className={`relative overflow-hidden bg-transparent hover:bg-transparent ${className}`}
    >
      {children}
    </Button>
  );
};
