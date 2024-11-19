/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { Section } from "./sections";
import {

  Code,
  LucideIcon,
  NotebookTabs,
  StickyNote,
  Weight,
} from "lucide-react";
import Link from "next/link";
import { ContactCard } from "./ContactCard";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start  gap-4 ">
      <Card className="flex-[3]  flex flex-col gap-2 p-4 w-full">
        <p className="text-lg text-muted-foreground">side fun projetc</p>
        <div className="flex flex-col gap-4">
          {SIDES_PROJECTS.map((project, index) => (
            <SideFunProject
              key={index}
              Logo={project.Logo}
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
            description="0 Follower"
            image="https://rooney-tan.vercel.app/images/me/rooney.jpeg"
            mediumImage="data:image/png;base64,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"
            url = "https://x.com/KalumbaRoo91782"
          />
          <ContactCard
            name="Rooney"
            description="11 Followers"
            image="https://rooney-tan.vercel.app/images/me/rooney.jpeg"
            mediumImage="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhITERIWFRAVFRUWFxYRFhUYFRAYFREaFxcSFhMYHCghGR4lGxYVITEiJSkrLi4uFx8zODMtNygtLi0BCgoKDQ0ODw8PDysZFRkrKysrKy0rKys3KystKy0tLSsrKystKys3KystKysrKystKysrKysrKysrKy0rKystK//AABEIAOAA4AMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABwgBBQYEAgP/xABJEAABAwICBwQECQkGBwAAAAABAAIDBBEFIQYHEjFBUXETImGBQnKRoQgUIzJic4KisSQzNVJTsrPBwkOSk6PD4RUlVGN0g4T/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAXEQEBAQEAAAAAAAAAAAAAAAAAAREx/9oADAMBAAIRAxEAPwCcUREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBF8yPABJIAGZJyA81yuK6yMLp7h9ZG5w3thvK4HlaMHNB1iKLKzXnQN/NwVEnjsxsHvdf3LUS6/Bfu4cSObqkA+wRH8VcE1IoVj1+Z97DiBzbUgn2GIfittR686B352Coj8bMePc6/uTBKiLk8J1j4XUWDKyNrjkGzXiJO61pAM7rqo3ggEEEHcRmD0Kg+kREBERAREQEREBERAREQEREBERARYJUfaw9Z8FBtQw2mrbfNv3IMsjKRx47Az6b0HaYvjEFLGZamVsUY9J5tc8gN5PgFEGlOu83LMOhFv21QDn4thH4uPkopx7HKisl7WqldJJwvk2MfqsaMmjotctSJraY5pDV1jtqqqJJc7hrz3G+rGLNHsWrCIqgiIgIiIoVs8D0hq6M3paiSLO5aw9x3rRm7T7FrEREz6La8DcMxGEW/bU43eLoT+LT5KX8IxiCqjEtNK2WM+kw3seRHA+BzVOVssBx2oo5RLSyujfle2bZAPRew5OHVTF1cJFHurvWhBX7MM9oa3g2/cn8YieP0Tn1Ug3WVZREQEREBERAREQEREBYKyo01w6fGij+K0zvyyVty4HOmjOW165ztysTyuGs1r6zzAX0dC75cZSzg/mOcbPp8z6Pid0FON7km5OZJzJJNySeJWEW8QReqmw6eQF0UMsjRkXRxveAeRLR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"
            url = "https://github.com/rooneyi" 
          />
        </Card>
      </div>
    </Section>
  );
};

const SIDES_PROJECTS: sidePojects[] = [
  {
    Logo: Code,
    title: "Bibblios",
    description: "A library management app for cataloging and organizing books.",
    url: "https://github.com/rooneyi/Biblios"
  },
  {
    Logo: StickyNote,
    title: "Quiz Micode",
    description: "Interactive online quiz tool for learning and assessment.",
    url: "https://github.com/rooneyi/Quiz Micode"
  },
  {
    Logo: Weight,
    title: "Youtube Generator Image IA",
    description: "AI-powered YouTube thumbnail generator for attractive visuals.",
    url: "https://github.com/rooneyi/Image-generator-OpenAi"
  },
  {
    Logo: NotebookTabs,
    title: "Next-Dashboard",
    description: "Modern, reactive dashboard for real-time data management and analytics.",
    url: "https://github.com/rooneyi/Next-Dashboard"
  },
  {
    Logo: NotebookTabs,
    title: "portfolio",
    description: "Personal online portfolio showcasing projects and skills.",
    url: "https://rooney-tan.vercel.app"
  },
  
  {
    Logo: NotebookTabs,
    title: "FlexPay",
    description: "Flexible payment solution for secure and easy transactions.",
    url: "https://github.com/devscast/flexpay"
  }
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
    role: "Web Developer",
    date: "2024",
    url: "https://github.com/rooneyi/Biblios",
  },
  {
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAclBMVEUiIiIiICEiBhUjABEjAAkjAA8iGx4jAAsJ6qwC/8AE/7sP0JofRjojFRsH87IA/8IfTD4jAAYhKyggMy0fQDYdY00M4KUiGBwSwY8E/LkjEBgA/8EhKCYN2qEcdloeV0UkAAAahWUTuYoZjGoYlG8da1MOflKzAAAAm0lEQVR4Ad1QxQHDMAwMmUEOMyf7j1j8GQZo7ysdRv+KOI7DtyRNM4T9R0IZ40Iq7zHTAMCYcblxmuVFWdWUNZl9a4tO932TD3KEyIqFK84AQGd4AiitI5mZXurVbKRjOrMMMYwm3WjfMwaLso4lQIQ/afsduS3YsW1mrdd0iGwMJ7Ce0jnH3nWub9rIi0Tdy3K3odlbpazbT+EJibMIy2pxK5sAAAAASUVORK5CYII=",
    title: "Advens",
    role: "Backend Developer",
    date: "2024",
    url: "",
  },
  {
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAclBMVEUiIiIiICEiBhUjABEjAAkjAA8iGx4jAAsJ6qwC/8AE/7sP0JofRjojFRsH87IA/8IfTD4jAAYhKyggMy0fQDYdY00M4KUiGBwSwY8E/LkjEBgA/8EhKCYN2qEcdloeV0UkAAAahWUTuYoZjGoYlG8da1MOflKzAAAAm0lEQVR4Ad1QxQHDMAwMmUEOMyf7j1j8GQZo7ysdRv+KOI7DtyRNM4T9R0IZ40Iq7zHTAMCYcblxmuVFWdWUNZl9a4tO932TD3KEyIqFK84AQGd4AiitI5mZXurVbKRjOrMMMYwm3WjfMwaLso4lQIQ/afsduS3YsW1mrdd0iGwMJ7Ce0jnH3nWub9rIi0Tdy3K3odlbpazbT+EJibMIy2pxK5sAAAAASUVORK5CYII=",
    title: "Devscast Software",
    role: "Web Developer",
    date: "2024",
    url: "https://github.com/devscast-software",
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
