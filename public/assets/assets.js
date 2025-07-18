import Edutom from "./edutom.png";
import Frintor from "./frintor.png"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profile from "./profile.png";
 export const contacts = [
  {
    icon: <FaGithub />,
    link: "https://github.com/Ritik-7032",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    link: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: <FaEnvelope />,
    link: "mailto:ritik@example.com",
    label: "Email",
  },
];

 
export const imag={
    profile
}
export const projects = [
  {
    name: "Frintor",
    link: "#",
    img: Frintor,
    description:
      "Frintor is a Google-like platform for exploring top college events, campus news, and academic announcements. Built with MERN, Redux, JWT, and integrated with Generative AI.",
    tags: ["MERN", "Redux", "JWT", "AI", "MongoDB"],
  },
  {
    name: "EduTom",
    link: "#", 
    img: Edutom,
    description:
      "EduTom is a book-selling web app built with the Next.js App Router. It features Stripe payments, Clerk authentication, and clean UI with shadcn/ui.",
    tags: ["Next.js", "MongoDB", "Clerk", "Stripe", "shadcn/ui"],
  },
];

