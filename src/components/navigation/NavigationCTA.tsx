
import { Button } from "@/components/ui/button";

interface NavigationCTAProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const NavigationCTA = ({ onClick, children }: NavigationCTAProps) => {
  return (
    <Button
      onClick={onClick}
      className="relative px-6 py-2 text-sm font-semibold bg-gradient-to-r from-[#2e4bce] to-[#1e3a9e] hover:from-[#1e3a9e] hover:to-[#0f2657] text-white rounded-xl transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 overflow-hidden group"
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
    </Button>
  );
};
