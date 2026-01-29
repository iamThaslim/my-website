import { ArrowUpRight } from "lucide-react";

interface ExperienceItemProps {
  dateRange: string;
  title: string;
  company: string;
  location: string;
  companyUrl?: string;
}

export default function ExperienceItem({
  dateRange,
  title,
  company,
  location,
  companyUrl,
}: ExperienceItemProps) {
  const TitleContent = () => (
    <span className="inline-flex items-center gap-1 text-white transition-colors group-hover:text-zinc-300">
      {title} at {company}
      {companyUrl && <ArrowUpRight className="h-4 w-4" />}
    </span>
  );

  return (
    <div className="grid grid-cols-1 gap-1 sm:grid-cols-[140px_1fr] sm:gap-8">
      <span className="text-sm text-zinc-500">{dateRange}</span>
      <div className="flex flex-col gap-1">
        {companyUrl ? (
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-fit font-medium"
          >
            <TitleContent />
          </a>
        ) : (
          <span className="font-medium">
            <TitleContent />
          </span>
        )}
        <span className="text-sm text-zinc-500">{location}</span>
      </div>
    </div>
  );
}
