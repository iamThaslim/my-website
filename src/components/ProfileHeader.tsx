import Image from "next/image";

interface ProfileHeaderProps {
  name: string;
  tagline: string;
  websiteUrl?: string;
  websiteLabel?: string;
  imageUrl: string;
}

export default function ProfileHeader({
  name,
  tagline,
  websiteUrl,
  websiteLabel,
  imageUrl,
}: ProfileHeaderProps) {
  return (
    <header className="flex items-center gap-6">
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-zinc-700">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold text-white">{name}</h1>
        <p className="text-zinc-400">{tagline}</p>
        {websiteUrl && (
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex w-fit items-center rounded-md bg-zinc-800 px-3 py-1 text-sm text-zinc-300 transition-colors hover:bg-zinc-700"
          >
            {websiteLabel || websiteUrl.replace(/^https?:\/\//, "")}
          </a>
        )}
      </div>
    </header>
  );
}
