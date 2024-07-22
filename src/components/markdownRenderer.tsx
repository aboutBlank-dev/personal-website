import matter from "gray-matter";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

interface MetaData {
  test: string;
}

export const MarkdownRenderer = () => {
  const [content, setContent] = useState<string | null>(null);
  const [meta, setMeta] = useState<MetaData | null>(null);

  useEffect(() => {
    import("../assets/projects/test.md?raw").then((res) => {
      const { content, data: metaData } = matter(res.default);
      setContent(content);
      setMeta(metaData as MetaData);
    });
  }, []);

  return (
    <div>
      <ReactMarkdown children={content} />
    </div>
  );
};
