import { buttonVariants } from "@/components/ui/button";
import { Github } from "@/app/_components/icons/Github";
import { Section } from "./sections";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Twitter } from "./icons/Twitter";
import { LinkedinIcon } from "./icons/LinkedinIcons";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold">rooney.com</h1>
        <div className="flex-1"></div>
        <ul className="flex items-center gap-2">
          <Link
          href = "https://github.com/rooneyi" 
          className={cn(buttonVariants({variant :"outline"}),"size-6 p-0")}>
            <Github size={12} className="text-foreground" />
          </Link>
          <Link
          href = "https://github.com/rooneyi" 
          className={cn(buttonVariants({variant :"outline"}),"size-6 p-0")}>
            <LinkedinIcon size={12} className="text-foreground" />
          </Link>
          <Link
          href = "https://github.com/rooneyi" 
          className={cn(buttonVariants({variant :"outline"}),"size-6 p-0")}>
            <Twitter size={12} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
