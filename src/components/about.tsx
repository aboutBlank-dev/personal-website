import { useEffect, useState } from "react";
import Markdown from "react-markdown";

export const About = () => {
  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    import("../assets/about/about.md?raw").then((res) => {
      setContent(res.default);
    });
  }, []);

  if (!content) return null;

  return (
    <section id='about' className='pt-24 pb-4'>
      <h1 className='mb-4'> About Me </h1>
      <Markdown children={content} />
    </section>
  );
};
