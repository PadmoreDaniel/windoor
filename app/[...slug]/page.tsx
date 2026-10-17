import { permanentRedirect } from "next/navigation";

// Any unknown URL (including old site pages) goes back to the home page.
export default function CatchAll() {
  permanentRedirect("/");
}
