/// <reference types="vite-plugin-svgr/client" />

import matter from "gray-matter";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import HoverableCard from "./hoverableCard";
import { SkillsDisplay } from "./skillsDisplay";
import GithubIcon from "../assets/svg/github_icon.svg?react";
import { useTheme } from "../hooks/useTheme";
import { useNavigate } from "react-router-dom";

type ProjectData = {
  title: string;
  skills: string[];
  projectUrl?: string;
  relativeUrl?: string;
  gifFileName?: string;
  imageFileName?: string; //has to be a png
  priority: number;
};

type Project = {
  content: string;
  data: ProjectData;
};

export const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const theme = useTheme();

  //Load all project files from the assets/projects directory
  useEffect(() => {
    const loadFiles = async () => {
      //Get all the file paths in projects directory
      const projectFilePaths = Object.keys(
        import.meta.glob("../assets/projects/*.md")
      );

      //Unfortunately an annoying workaround is needed or else vite will yell at you since they need to know
      //the file paths at build time.
      const fileNamesWithoutExtension = projectFilePaths.map((filePath) =>
        filePath.replace("../assets/projects/", "").replace(".md", "")
      );

      //Load each file and parse the content and data
      const projectFiles: Project[] = await Promise.all(
        fileNamesWithoutExtension.map(async (fileName) => {
          const file = await import(`../assets/projects/${fileName}.md?raw`); //"?raw" is used to get the text content of the file straight away
          const { content, data } = matter(file.default);
          return { content, data: data as ProjectData };
        })
      );

      //Sort projects by defined order in respective markdown files
      projectFiles.sort((a, b) => {
        const aPriority = a.data.priority || 0;
        const bPriority = b.data.priority || 0;
        return bPriority - aPriority;
      });

      setProjects(projectFiles);
    };

    loadFiles();
  }, []);

  if (!projects.length) return null;

  return (
    <section id='projects' className='flex flex-col gap-4 pt-16'>
      <h2>Projects</h2>
      <div className='w-full h-0.5 bg-gray-500' />

      {projects &&
        projects.map((project, i) => {
          return <ProjectCard key={i} project={project} />;
        })}
      <HoverableCard
        className='flex items-center gap-4 cursor-pointer'
        onClick={() =>
          window.open("https://github.com/aboutBlank-dev", "_blank")
        }
      >
        <GithubIcon
          className='w-16 h-16 group-hover:scale-125 transition-transform duration-200'
          fill={theme.currentTheme === "dark" ? "white" : "black"}
        />
        <p className='text-md'>More projects over at my Github Profile !</p>
      </HoverableCard>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [image, setImage] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    //If project has both image and gif path, use gif path
    if (project.data.gifFileName) {
      import(`../assets/projects/${project.data.gifFileName}.gif`).then(
        (image) => setImage(image.default)
      );
    } else if (project.data.imageFileName) {
      import(`../assets/projects/${project.data.imageFileName}.png`).then(
        (image) => setImage(image.default)
      );
    }
  }, [project.data.gifFileName, project.data.imageFileName]);

  const handleOnClick = () => {
    if (project.data.relativeUrl) navigate(project.data.relativeUrl);
    else if (project.data.projectUrl)
      window.open(project.data.projectUrl, "_blank");
  };

  const clickable = project.data.projectUrl ? "cursor-pointer" : "";
  return (
    <HoverableCard className={clickable} onClick={() => handleOnClick()}>
      <h3 className='font-bold'>{project.data.title}</h3>
      <div className='flex my-4'>
        {image ? (
          <img className='h-32 rounded-md' src={image ? image : ""} />
        ) : null}
      </div>
      <ReactMarkdown className={"mt-2"}>{project.content}</ReactMarkdown>
      <SkillsDisplay className='mt-4' skills={project.data.skills} />
    </HoverableCard>
  );
};
