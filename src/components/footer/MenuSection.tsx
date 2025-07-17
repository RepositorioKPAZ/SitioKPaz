
interface MenuSectionProps {
  title: string;
  items: { label: string; href: string }[];
}

export const MenuSection = ({ title, items }: MenuSectionProps) => {
  return (
    <div>
      <h3 className="text-white font-bold text-lg mb-4">{title}</h3>
      <div className="space-y-2">
        {items.map((item, index) => (
          <a 
            key={index}
            href={item.href} 
            className="block text-gray-300 hover:text-[#2e4bce] transition-colors text-sm"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};
