
import { Instagram, Linkedin, Youtube, MessageCircle } from "lucide-react";

export const SocialMediaSection = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/company/kpaz-latam",
      color: "hover:text-blue-600"
    },
    {
      name: "Instagram", 
      icon: Instagram,
      url: "https://instagram.com/kpaz.la",
      color: "hover:text-pink-500"
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/@kpazconsultores4247",
      color: "hover:text-red-500"
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/56951748603",
      color: "hover:text-green-500"
    }
  ];

  return (
    <div className="flex items-center gap-4">
      <span className="text-gray-400 text-sm font-medium">Síguenos:</span>
      <div className="flex items-center gap-3">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-400 transition-colors ${social.color}`}
              aria-label={`Síguenos en ${social.name}`}
            >
              <Icon size={20} />
            </a>
          );
        })}
      </div>
    </div>
  );
};
