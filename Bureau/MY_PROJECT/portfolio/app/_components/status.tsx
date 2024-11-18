import { Card } from "@/components/ui/card";
import { Section } from "./sections";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start  gap-4 ">
      <Card className="flex-[3] w-full flex flex-col gap-2 p-4">
      <h2 className="text-2xl font-bold">side projetc</h2>
      </Card>
      <div className="flex-[2] w-full h-full flex flex-col gap-2 ">
        <Card className="flex flex-col gap-2 p-4 flex-1">
          <h2 className="text-2xl font-bold ">Works</h2>
        </Card>
        <Card className="flex flex-col gap-2 p-4 flex-1">
        <h2 className="text-2xl font-bold">Contact Me</h2>
        </Card>
      </div>
    </Section>
  );
};
