import matter from "gray-matter";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

type ExperienceData = {
  title: string;
  date: string;
  priority: number;
};

type Experience = {
  content: string;
  data: ExperienceData;
};

export const Experience = () => {
  const [experience, setExperience] = useState<Experience[]>([]);

  //Load all experience files from the assets/experience directory
  useEffect(() => {
    const loadFiles = async () => {
      //Get all the file paths in experience directory
      const experienceFilePaths = Object.keys(
        import.meta.glob("../assets/experience/*.md")
      );

      //Unfortunately an annoying workaround is needed or else vite will yell at you since they need to know
      //the file paths at build time.
      const fileNamesWithoutExtension = experienceFilePaths.map((filePath) =>
        filePath.replace("../assets/experience/", "").replace(".md", "")
      );

      //Load each file and parse the content and data
      const experienceFiles: Experience[] = await Promise.all(
        fileNamesWithoutExtension.map(async (fileName) => {
          const file = await import(`../assets/experience/${fileName}.md?raw`); //"?raw" is used to get the text content of the file straight away
          const { content, data } = matter(file.default);
          return { content, data: data as ExperienceData };
        })
      );

      setExperience(experienceFiles);
    };

    loadFiles();
  }, []);

  return (
    <section id='experience' className='flex flex-col gap-4 pb-4'>
      {experience &&
        experience.map((experience, i) => {
          return <ExperienceCard key={i} experience={experience} />;
        })}
    </section>
  );
};
interface ExperienceCardProps {
  experience: Experience;
}
const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <div>
      <h2>{experience.data.title}</h2>
      <p>{experience.data.date}</p>
      <ReactMarkdown>{experience.content}</ReactMarkdown>
    </div>
  );
};
