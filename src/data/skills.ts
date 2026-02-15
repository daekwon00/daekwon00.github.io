export interface SkillCategory {
  title: string;
  iconKey: string;
  tags: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: 'AI & Machine Learning',
    iconKey: 'brain',
    tags: ['PyTorch', 'TensorFlow', 'LangChain', 'OpenAI API', 'ChromaDB', 'RAG', 'MLOps'],
  },
  {
    title: 'Backend',
    iconKey: 'code',
    tags: ['Java', 'Spring Boot', 'Spring Batch', 'Python', 'FastAPI', 'MyBatis'],
  },
  {
    title: 'Frontend',
    iconKey: 'globe',
    tags: ['React', 'Vue.js', 'TypeScript', 'JavaScript', 'Next.js'],
  },
  {
    title: 'Database',
    iconKey: 'settings',
    tags: ['Oracle', 'PostgreSQL', 'MySQL', 'MS-SQL', 'Tibero', 'ChromaDB'],
  },
  {
    title: 'Cloud & Infra',
    iconKey: 'cloud',
    tags: ['AWS', 'NHN Cloud', 'Docker', 'Nginx', 'GitLab', 'Synology NAS'],
  },
  {
    title: 'Tools & Auth',
    iconKey: 'settings',
    tags: ['Cursor IDE', 'IntelliJ', 'GPKI/NPKI', 'OAuth2.0', 'JWT', 'Git'],
  },
];
