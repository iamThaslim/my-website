import { Experience } from "@/components";
import { SocialLink } from "@/components";

export const profileData = {
    name: "Thaslim Farook",
    tagline: "Software Engineer",
    websiteUrl: "https://github.com/iamThaslim",
    websiteLabel: "github.com/iamThaslim",
    imageUrl: "/profile_image_cropped.jpg",
    about:
        "I'm a passionate software engineer focused on building scalable and user-centric applications. I believe in writing clean, maintainable code and continuously learning new technologies.",
};

export const experiences: Experience[] = [
    {
        id: "1",
        dateRange: "2025 — Now",
        title: "Software Engineer",
        company: "Wedbura Technologies",
        location: "Kochi - Infopark",
        companyUrl: "https://www.webdura.in/",
    },
    {
        id: "2",
        dateRange: "2023 — 2024",
        title: "Full Stack Developer",
        company: "LYM Datalabs",
        location: "Kochi",
        companyUrl: "https://www.lymdata.com/",
    },
    {
        id: "3",
        dateRange: "2022 — 2023",
        title: "Full Stack Developer",
        company: "Branding Sparrow Software Solutions",
        location: "Kochi",
        companyUrl: "https://brandingsparrow.com/",
    },
];

export const socialLinks: SocialLink[] = [
    {
        id: "1",
        platform: "github",
        url: "https://github.com/iamThaslim",
        label: "GitHub",
    },
    {
        id: "2",
        platform: "linkedin",
        url: "https://linkedin.com/in/iamthaslim",
        label: "LinkedIn",
    },
    //   {
    //     id: "3",
    //     platform: "twitter",
    //     url: "https://twitter.com/thaslim",
    //     label: "Twitter",
    //   },
    {
        id: "4",
        platform: "email",
        url: "hello@example.com",
        label: "Email",
    },
];
