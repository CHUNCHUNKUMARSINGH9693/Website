export interface Job {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  experience: string;
  description: string;
}

export const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Full Stack Developer",
    department: "Development",
    type: "Full-time",
    location: "Remote",
    experience: "3–5 Years Experience",
    description: "Build and maintain scalable web applications using React, Next.js, and Node.js. Architect solutions and lead junior developers.",
  },
  {
    id: "2",
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-time",
    location: "Remote",
    experience: "2–4 Years Experience",
    description: "Design intuitive and beautiful user interfaces for web and mobile applications. Work closely with developers to implement designs.",
  },
  {
    id: "3",
    title: "Digital Marketing Specialist",
    department: "Marketing",
    type: "Full-time",
    location: "On-site",
    experience: "2–4 Years Experience",
    description: "Plan and execute digital marketing campaigns, SEO/SEM, email, social media, and display advertising campaigns.",
  },
  {
    id: "4",
    title: "Business Development Executive",
    department: "Sales",
    type: "Full-time",
    location: "On-site",
    experience: "1–3 Years Experience",
    description: "Identify new business opportunities, build relationships with potential clients, and drive sales growth.",
  },
  {
    id: "5",
    title: "Backend Developer (Node.js)",
    department: "Development",
    type: "Full-time",
    location: "Remote",
    experience: "3–5 Years Experience",
    description: "Design, build, and maintain high-performance, reusable, and reliable backend services and APIs.",
  },
  {
    id: "6",
    title: "Customer Support Specialist",
    department: "Support",
    type: "Part-time",
    location: "On-site",
    experience: "1–2 Years Experience",
    description: "Provide exceptional support to our clients, resolve issues quickly, and maintain high customer satisfaction.",
  },
];
