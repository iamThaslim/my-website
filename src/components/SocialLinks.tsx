import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export interface SocialLink {
  id: string;
  platform: "github" | "linkedin" | "twitter" | "email";
  url: string;
  label: string;
}

interface SocialLinksProps {
  links: SocialLink[];
}

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  email: Mail,
};

export default function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="flex items-center gap-4">
      {links.map((link) => {
        const Icon = iconMap[link.platform];
        return (
          <a
            key={link.id}
            href={link.platform === "email" ? `mailto:${link.url}` : link.url}
            target={link.platform === "email" ? undefined : "_blank"}
            rel={link.platform === "email" ? undefined : "noopener noreferrer"}
            aria-label={link.label}
            className="text-zinc-400 transition-colors hover:text-white"
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
}
