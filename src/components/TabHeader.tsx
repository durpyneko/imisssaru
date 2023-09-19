// Imports
import { Helmet } from "react-helmet";

interface TabHeaderProps {
  title: string;
}

export default function TabHeader({ title }: TabHeaderProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="icon" type="image/png" href="imagesets/sarueiCry.webp" />
    </Helmet>
  );
}
