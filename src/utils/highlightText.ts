import { useTheme } from "@mui/material";

export function HighlightPhrases(text: string) {
  const theme = useTheme();

  const phrases = [
    "frontend",
    "2023",
    "2024",
    "leading point",
    "software engineering",
    "3.85/4",
    "welab",
    "reactJS",
    "nextJS",
    "hashemite",
    "material ui",
    "responsive"
  ];

  // Create a regex that will match any of the phrases, case-insensitive
  const regex = new RegExp(`\\b(${phrases.join("|")})\\b`, "gi");

  // Replace the matching phrases with a span that styles them
  const highlightedText = text.replace(regex, (matched) => {
    return `<span style="color: ${theme.palette.primary.main}; font-weight: 900">${matched}</span>`;
  });

  return highlightedText;
}
