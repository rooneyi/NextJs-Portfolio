/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const ContactCard = (props: {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
  url:string;
}) => {
  return (
    <Link href={props.url}>
    <Card className=" flex bg-accent/10  hover:bg-accent/30 transition-colors group items-center gap-4 rounded-lg p-2">
      <div className="relative">
        <img
          src={props.image}
          alt={props.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <img
          src={props.mediumImage}
          alt={props.name}
          className="w-5 h-5 absolute -bottom-1 -right-1 rounded-full object-contain  "
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
    </Link>
  );
};