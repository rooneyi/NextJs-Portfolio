/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { Section } from "./sections";
import {
  ArrowUpRight,
  Code,
  LucideIcon,
  NotebookTabs,
  StickyNote,
  Weight,
} from "lucide-react";
import Link from "next/link";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start  gap-4 ">
      <Card className="flex-[3]  flex flex-col gap-2 p-4 w-full">
        <p className="text-lg text-muted-foreground">side fun projetc</p>
        <div className="flex flex-col gap-4">
          {SIDES_PROJECTS.map((project, index) => (
            <SideFunProject
              key={index}
              Logo={project.logo}
              title={project.title}
              description={project.description}
              url={project.url}
            />
          ))}
        </div>
      </Card>
      <div className="flex-[2] w-full h-full flex flex-col gap-2 ">
        <Card className="flex flex-col gap-2 p-4 flex-1">
          <p className="text-lg text-muted-foreground">Work</p>
          <div className="flex flex-col gap-4">
            {WORKS_PROPS.map((work, index) => (
              <WorksProps
                key={index}
                image={work.image}
                title={work.title}
                role={work.role}
                date={work.date}
                url={work.url}
              />
            ))}
          </div>
        </Card>
        <Card className="flex flex-col gap-2 p-4 flex-1">
          <p className="text-lg text-muted-foreground">Contact Me</p>
          <ContactCard
            name="Rooney"
            description="Backend Developer"
            image="https://rooney-tan.vercel.app/images/me/rooney.jpeg"
            mediumImage=""
          />
        </Card>
      </div>
    </Section>
  );
};

const ContactCard = (props: {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
}) => {
  return (
    <Card className=" p-1 bg-accent/10 flex hover:bg-accent/30 transition-colors group items-center gap-2 rounded-md">
      <div className="realative">
        <img
          src={props.image}
          alt={props.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <img
          src={props.mediumImage}
          alt={props.name}
          className="w-5 h-5 rounded-full object-cover absolute bottom-0 right-0"
        />
      </div>

      <div className="mr-auto">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{props.name}</p>
        </div>
        <p className="text-xs text-muted-foreground">{props.description}</p>
      </div>
      <ArrowUpRight className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform" size={16} />
    </Card>
  );
};

const SIDES_PROJECTS: sidePojects = [
  {
    logo: Code,
    title: "Bibblios ",
    description: "lorem ipsum",
    url: "",
  },
  {
    logo: StickyNote,
    title: "Quiz Micode",
    description: "",
    url: "",
  },
  {
    logo: Weight,
    title: "Youtube Generator Image IA",
    description: "",
    url: "",
  },
  {
    logo: NotebookTabs,
    title: "Youtube Generator Image IA",
    description: "",
    url: "",
  },
];

type sidePojects = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

export const SideFunProject = (props: sidePojects) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center hover:bg-accent/50 transition-colors gap-2 rounded-sm p-1"
    >
      <span className="bg-accent text-accent p-3 rounded-sm">
        <props.Logo size={16} />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};

const WORKS_PROPS: worksProps[] = [
  {
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAclBMVEUiIiIiICEiBhUjABEjAAkjAA8iGx4jAAsJ6qwC/8AE/7sP0JofRjojFRsH87IA/8IfTD4jAAYhKyggMy0fQDYdY00M4KUiGBwSwY8E/LkjEBgA/8EhKCYN2qEcdloeV0UkAAAahWUTuYoZjGoYlG8da1MOflKzAAAAm0lEQVR4Ad1QxQHDMAwMmUEOMyf7j1j8GQZo7ysdRv+KOI7DtyRNM4T9R0IZ40Iq7zHTAMCYcblxmuVFWdWUNZl9a4tO932TD3KEyIqFK84AQGd4AiitI5mZXurVbKRjOrMMMYwm3WjfMwaLso4lQIQ/afsduS3YsW1mrdd0iGwMJ7Ce0jnH3nWub9rIi0Tdy3K3odlbpazbT+EJibMIy2pxK5sAAAAASUVORK5CYII=",
    title: "Devscast",
    role: "Backend Developer",
    date: "2024",
    url: "",
  },
  {
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAclBMVEUiIiIiICEiBhUjABEjAAkjAA8iGx4jAAsJ6qwC/8AE/7sP0JofRjojFRsH87IA/8IfTD4jAAYhKyggMy0fQDYdY00M4KUiGBwSwY8E/LkjEBgA/8EhKCYN2qEcdloeV0UkAAAahWUTuYoZjGoYlG8da1MOflKzAAAAm0lEQVR4Ad1QxQHDMAwMmUEOMyf7j1j8GQZo7ysdRv+KOI7DtyRNM4T9R0IZ40Iq7zHTAMCYcblxmuVFWdWUNZl9a4tO932TD3KEyIqFK84AQGd4AiitI5mZXurVbKRjOrMMMYwm3WjfMwaLso4lQIQ/afsduS3YsW1mrdd0iGwMJ7Ce0jnH3nWub9rIi0Tdy3K3odlbpazbT+EJibMIy2pxK5sAAAAASUVORK5CYII=",
    title: "Devscast",
    role: "Backend Developer",
    date: "2024",
    url: "",
  },
  {
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAclBMVEUiIiIiICEiBhUjABEjAAkjAA8iGx4jAAsJ6qwC/8AE/7sP0JofRjojFRsH87IA/8IfTD4jAAYhKyggMy0fQDYdY00M4KUiGBwSwY8E/LkjEBgA/8EhKCYN2qEcdloeV0UkAAAahWUTuYoZjGoYlG8da1MOflKzAAAAm0lEQVR4Ad1QxQHDMAwMmUEOMyf7j1j8GQZo7ysdRv+KOI7DtyRNM4T9R0IZ40Iq7zHTAMCYcblxmuVFWdWUNZl9a4tO932TD3KEyIqFK84AQGd4AiitI5mZXurVbKRjOrMMMYwm3WjfMwaLso4lQIQ/afsduS3YsW1mrdd0iGwMJ7Ce0jnH3nWub9rIi0Tdy3K3odlbpazbT+EJibMIy2pxK5sAAAAASUVORK5CYII=",
    title: "Devscast",
    role: "Backend Developer",
    date: "2024",
    url: "",
  },
];

type worksProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
};

export const WorksProps = (props: worksProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center hover:bg-accent/50 transition-colors gap-2 rounded-sm p-1"
    >
      <img
        src={props.image}
        alt={props.title}
        className="w-10 h-10 object-contain rounded-md"
      />

      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.role}</p>
      </div>
      <div className="ml-auto">
        <p className="text-xs text-muted-foreground">{props.date}</p>
      </div>
    </Link>
  );
};
