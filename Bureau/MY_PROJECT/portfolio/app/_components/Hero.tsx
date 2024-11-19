/* eslint-disable @next/next/no-img-element */
import { Section } from "./sections";
import { SymfonyIcons } from "./icons/SymfonyIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { DrcIcon } from "./icons/DrcIcon";
import { Code } from "./Code";


export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start  gap-4 ">
      <div className="flex-[3] flex flex-col gap-2 ">
        <h2 className="font-bold text-5xl">Rooney Kalumba</h2>
        <h3 className="font-caption text-3xl">Backend Developper </h3>
        <p className="text-base">
          I love creating web application in use{" "}
          <Code className="inline-flex">
            <SymfonyIcons size={18} /> symfony
          </Code>{" "}
          and 
          <Code className="inline-flex">
            <ReactIcon size={18} /> React
          </Code>
          currently working at{" "}<Code>Devscast</Code> {" "}Living in <Code className="inline-flex"><DrcIcon/> Drc</Code>.
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto">
        <img
          src="https://rooney-tan.vercel.app/images/me/rooney.jpeg"
          className="w-full h-auto rounded-full max-w-sm max-md:w-56"
          alt="photo de rooney"
        />
      </div>
    </Section>
  );
};
