import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AccentForge",
    short_name: "AccentForge",
    description:
      "Structured British RP pronunciation practice for Indian English speakers.",
    start_url: "/home",
    display: "standalone",
    background_color: "#f8faf9",
    theme_color: "#1f7a63",
    orientation: "portrait",
    icons: [
      {
        src: "/icons/accentforge-icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icons/accentforge-icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
