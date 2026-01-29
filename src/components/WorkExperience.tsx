import ExperienceItem from "./ExperienceItem";

export interface Experience {
  id: string;
  dateRange: string;
  title: string;
  company: string;
  location: string;
  companyUrl?: string;
}

interface WorkExperienceProps {
  title?: string;
  experiences: Experience[];
}

export default function WorkExperience({
  title = "Work Experience",
  experiences,
}: WorkExperienceProps) {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-lg font-medium text-white">{title}</h2>
      <div className="flex flex-col gap-6">
        {experiences.map((exp) => (
          <ExperienceItem
            key={exp.id}
            dateRange={exp.dateRange}
            title={exp.title}
            company={exp.company}
            location={exp.location}
            companyUrl={exp.companyUrl}
          />
        ))}
      </div>
    </section>
  );
}
