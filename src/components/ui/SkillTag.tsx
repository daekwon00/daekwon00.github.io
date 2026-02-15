interface SkillTagProps {
  children: string;
  small?: boolean;
}

export default function SkillTag({ children, small }: SkillTagProps) {
  return (
    <span className={`skill-tag ${small ? 'text-xs' : ''}`}>
      {children}
    </span>
  );
}
