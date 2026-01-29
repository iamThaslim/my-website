import {
  ProfileHeader,
  About,
  WorkExperience,
  SocialLinks,
} from "@/components";
import { profileData, experiences, socialLinks } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-4 py-16 font-sans sm:px-6">
      <main className="w-full max-w-xl">
        <div className="flex flex-col gap-10">
          {/* Profile Header */}
          <ProfileHeader
            name={profileData.name}
            tagline={profileData.tagline}
            websiteUrl={profileData.websiteUrl}
            websiteLabel={profileData.websiteLabel}
            imageUrl={profileData.imageUrl}
          />

          {/* About Section */}
          <About description={profileData.about} />

          {/* Work Experience */}
          <WorkExperience experiences={experiences} />

          {/* Social Links */}
          <footer className="border-t border-zinc-800 pt-6">
            <SocialLinks links={socialLinks} />
          </footer>
        </div>
      </main>
    </div>
  );
}
