import { useEffect, useState } from "react";
import Markdown from "react-markdown";

export const About = () => {
  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    import("../assets/about/about.md?raw").then((res) => {
      setContent(res.default);
    });
  }, []);

  return (
    <section id='about' className='pt-24 pb-4'>
      <Markdown children={content} />
    </section>
  );
};
