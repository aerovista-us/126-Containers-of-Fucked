import { createFileRoute } from "@tanstack/react-router";
import { LateShift } from "@/components/late-shift";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <LateShift />;
}
