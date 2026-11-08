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
        title: "AutoInzicht",
        description: "Description of Project 1",
        company: "Company 1",
        role: "Role 1",
        date: "Date 1",
        imageUrl: "",
        url: ""
    }
];