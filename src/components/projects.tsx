import matter from "gray-matter";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

type ProjectData = {
  title: string;
  date: string;
  order: number;
};

type Project = {
  content: string;
  data: ProjectData;
};

export const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  //Load all project files from the assets/projects directory
  useEffect(() => {
    const loadFiles = async () => {
      //Get all the file paths in projects directory
      const projectFilePaths = Object.keys(
        import.meta.glob("../assets/projects/*.md")
      );

      //Load each file and parse the content and data
      const projectFiles: Project[] = await Promise.all(
        projectFilePaths.map(async (filePath) => {
          const file = await import(/* @vite-ignore */ filePath + "?raw"); //"?raw" is used to get the text content of the file straight away
          const { content, data } = matter(file.default);
          return { content, data: data as ProjectData };
        })
      );

      //Sort projects by defined order in respective markdown files
      projectFiles.sort((a, b) => {
        const aOrder = a.data.order || 0;
        const bOrder = b.data.order || 0;
        return aOrder - bOrder;
      });

      setProjects(projectFiles);
    };

    loadFiles();
  }, []);

  return (
    <div>
      {projects &&
        projects.map((project, i) => {
          return <ProjectCard key={i} {...project} />;
        })}
    </div>
  );
};

const ProjectCard = (project: Project) => {
  return (
    <div className='mt-6'>
      <h2>{project.data.title}</h2>
      <p>{project.data.date}</p>
      <ReactMarkdown>{project.content}</ReactMarkdown>
    </div>
  );
};
