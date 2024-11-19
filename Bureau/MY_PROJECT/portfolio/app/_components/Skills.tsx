import { Badge } from "@/components/ui/badge";
import { Section } from "./sections";
import { SymfonyIcons } from "./icons/SymfonyIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { Code } from "./Code";
import { TailwindsIcons } from "./icons/tailwindsIcon";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start  gap-4 max-md:flex-col ">
      <Badge
        className="flex-[3]  flex flex-col gap-2 p-4 w-full"
        variant={"outline"}
      >
        Skills{" "}
      </Badge>
      <h2 className=" text-3xl font-semibold tracking-tight first:mt-0">
        I love working on...
      </h2>

      <div className="flex max-md:flex-col gap-2">
        <div className="flex flex-col gap-2">
          <SymfonyIcons size={56} />

          <h3 className="text-2xl font-semibold tracking-tight">
            Symfony
          </h3>
          <p className="text-sm text-muted-foreground">
            My main framework is <Code>Symfony </Code>I also use for the backend
            of my projects.I love the flexibility and the power it gives me.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <ReactIcon size={56} className="animate-spin" style={{animationDuration:"10s"}}/>

          <h3 className="text-2xl font-semibold tracking-tight">
            React
          </h3>
          <p className="text-sm text-muted-foreground">
            I also use  <Code>React </Code>for the frontend and <Code>NextJS</Code>
            as a frontend and the backend Framework 
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <TailwindsIcons size={56} />

          <h3 className="text-2xl font-semibold tracking-tight">
            Tailwind
          </h3>
          <p className="text-sm text-muted-foreground">
            I create a {" "} <Code>beautifull </Code>{" "}application <i>in seconds</i> using <Code>TailwindCSS </Code> 
            
          </p>
        </div>
      </div>
    </Section>
  );
};
