import { createFileRoute } from "@tanstack/react-router";
import { Episode06Production } from "@/components/episode-06-production";

export const Route = createFileRoute("/episode-06")({
  component: Episode06Production,
});
