// Imports
import { Helmet } from "react-helmet";

interface TabHeaderProps {
  title: string;
}

export default function TabHeader({ title }: TabHeaderProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <link
        rel="icon"
        type="image/png"
        href="https://cdn.discordapp.com/emojis/1101698612116852746.webp?size=32"
      />
    </Helmet>
  );
}
