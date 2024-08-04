import { HTMLAttributes } from "react";

interface SkillsDisplayProps extends HTMLAttributes<HTMLDivElement> {
  skills: string[];
  className?: string;
}

export const SkillsDisplay = ({
  skills,
  className,
  ...props
}: SkillsDisplayProps) => {
  if (!skills || !skills.length) return null;

  return (
    <div className={`flex flex-wrap gap-2 ${className}`} {...props}>
      {skills.map((skill, i) => {
        return (
          <p className='px-2 bg-red-500 rounded-full' key={i}>
            {skill}
          </p>
        );
      })}
    </div>
  );
};
