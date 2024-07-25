import matter from "gray-matter";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

type ProjectData = {
  title: string;
  date: string;
  priority: number;
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

  return (
    <section id='projects' className='flex flex-col gap-4 pt-8'>
      {projects &&
        projects.map((project, i) => {
          return <ProjectCard key={i} project={project} />;
        })}
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div>
      <h2>{project.data.title}</h2>
      <p>{project.data.date}</p>
      <ReactMarkdown>{project.content}</ReactMarkdown>
    </div>
  );
};
