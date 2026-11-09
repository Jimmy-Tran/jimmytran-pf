import autoInzichtImage from "../assets/a-inzicht.png";
import oldPortfolioImage from "../assets/old-portfolio.png";
import caveroImage from "../assets/Cavero.png";
import dutchArtImage from "../assets/DutchArtCollections.png";
import minecraftImage from "../assets/minecraft-stats.png";

export type Project = {
    title: string;
    description: string;
    company: string;
    role: string;
    date: string;
    imageUrl: string;
    url?: string;
};

export const projects: Project[] = [
    {
        title: "AutoInzicht - Vehicle Information Platform",
        description: "Developing a vehicle information platform that allows users to look up Dutch license plates and explore detailed vehicle specifications, registration data and APK information using the RDW Open Data API.",
        company: "Personal Project",
        role: "Web Developer",
        date: "Currently in progress",
        imageUrl: autoInzichtImage,
        url: ""
    },
    {
        title: "Old Portfolio Website",
        description: "Designed and developed a personal portfolio website to showcase my skills, projects, and experiences. Implemented responsive design principles to ensure optimal viewing across various devices.",
        company: "Personal Project",
        role: "Web Developer",
        date: "2024",
        imageUrl: oldPortfolioImage,
        url: "https://gridportfolio-jimmy.vercel.app/"
    },
    {
        title: "Cavero - Event Planner Web Application",
        description: "Collaborated in a development team to build a social event calendar for Cavero. Focused primarily on developing the frontend using React and Tailwind CSS, integrating with a PHP API to retrieve and display events and encourage social interaction among employees.",
        company: "Cavero",
        role: "Web Developer",
        date: "2024",
        imageUrl: caveroImage,
        url: ""
    },
    {
        title: "DutchArtCollections - Landing Page",
        description: "Developed a landing website for a Web3-focused company specializing in blockchain solutions, digital art collections and decentralized applications, showcasing its services and vision for the decentralized economy.",
        company: "DutchArtCollections",
        role: "Front-End Developer",
        date: "2023",
        imageUrl: dutchArtImage,
        url: ""
    },
    {
        title: "PrisonTech - Minecraft Stats Dashboard",
        description: "Built a statistics dashboard for a Minecraft prison server, connecting the frontend to a custom CraftBukkit API to fetch and display player statistics and server data.",
        company: "PrisonTech",
        role: "Web Developer",
        date: "2022",
        imageUrl: minecraftImage,
        url: ""
    }
];