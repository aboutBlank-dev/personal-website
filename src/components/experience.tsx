import matter from "gray-matter";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import HoverableCard from "./hoverableCard";
import { SkillsDisplay } from "./skillsDisplay";

type ExperienceData = {
  title: string;
  dateFrom: Date;
  dateTo: Date;
  skills: string[];
  companyName: string;
  companyUrl: string;
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

      //Unfortunately an annoying workaround is needed or else vite will yell at you since its needs to know
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

  if (!experience.length) return null;

  return (
    <section id='experience' className='flex flex-col gap-4 pt-16'>
      <h2> Experience </h2>
      <div className='w-full h-0.5 bg-gray-500' />
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
    <HoverableCard>
      <h3>{experience.data.title}</h3>
      <DatePeriod
        dateFrom={experience.data.dateFrom}
        dateTo={experience.data.dateTo}
      />
      <Company
        companyName={experience.data.companyName}
        companyUrl={experience.data.companyUrl}
      />
      <ReactMarkdown className={"m-2"}>{experience.content}</ReactMarkdown>
      <SkillsDisplay skills={experience.data.skills} className='mt-2' />
    </HoverableCard>
  );
};

const DatePeriod = ({ dateFrom, dateTo }: { dateFrom: Date; dateTo: Date }) => {
  const fromYear = dateFrom.getFullYear();
  const fromMonth = dateFrom.toLocaleString("default", { month: "long" });

  const toYear = dateTo.getFullYear();
  const toMonth = dateTo.toLocaleString("default", { month: "long" });

  return (
    <p className='italic'>
      {fromMonth} {fromYear} - {toMonth} {toYear}
    </p>
  );
};

const Company = ({
  companyName,
  companyUrl,
}: {
  companyName: string;
  companyUrl: string;
}) => {
  return (
    <a className='hover:font-bold' href={companyUrl}>
      {companyName}
    </a>
  );
};
