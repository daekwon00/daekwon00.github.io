export interface SkillCategory {
  title: string;
  iconKey: string;
  tags: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: 'AI & Machine Learning',
    iconKey: 'brain',
    tags: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'LangChain', 'HuggingFace', 'OpenAI API', 'pgvector', 'ChromaDB'],
  },
  {
    title: 'Languages',
    iconKey: 'code',
    tags: ['Python', 'TypeScript', 'JavaScript', 'Java'],
  },
  {
    title: 'Cloud & Infra',
    iconKey: 'cloud',
    tags: ['Azure', 'AWS', 'GCP', 'Docker', 'Vercel', 'Firebase'],
  },
  {
    title: 'Web',
    iconKey: 'globe',
    tags: ['Next.js', 'React', 'TailwindCSS', 'Spring Boot'],
  },
  {
    title: 'Tools',
    iconKey: 'settings',
    tags: ['Claude Code', 'Cursor IDE', 'n8n', 'Git'],
  },
];
