import { Header } from "@/app/_components/header";
import { Hero } from "./_components/Hero";
import { Spacing } from "./_components/Spacing";
import { Status } from "./_components/status";
export default function Home() {
  return (
    <main>
      <Header />
      <Spacing size="md" />
      <Hero />
      <Spacing size="md" />
      <Status />
    </main>
  );
}
