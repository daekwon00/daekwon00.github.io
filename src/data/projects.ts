export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
  isMain?: boolean;
  badge?: string;
}

export const projectsData: Project[] = [
  {
    title: 'RAG Chat System',
    description:
      '문서 기반 질의응답 AI 채팅 시스템. 사용자가 업로드한 문서를 벡터 임베딩으로 변환하고, GPT-4o를 활용한 RAG(Retrieval-Augmented Generation) 파이프라인으로 정확한 답변을 생성합니다.',
    tags: ['Next.js 14', 'TypeScript', 'Supabase pgvector', 'GPT-4o', 'Vercel AI SDK', 'TailwindCSS'],
    liveUrl: '#',
    githubUrl: 'https://github.com/daekwon00',
    isMain: true,
    badge: 'Deployed',
  },
  {
    title: 'Python ML Basics',
    description:
      'Python 기반 머신러닝 기초 프로젝트 모음. 주식 데이터 분석, 신용평가 모델, PyTorch MNIST 분류기 등 ML 파이프라인 전반을 학습하고 구현.',
    tags: ['Python', 'Scikit-learn', 'PyTorch', 'Pandas'],
    githubUrl: 'https://github.com/daekwon00',
  },
  {
    title: 'LangChain RAG',
    description:
      'Python 기반 RAG 시스템. LangChain과 ChromaDB를 활용한 벡터 검색, HuggingFace 임베딩 모델 통합, 문서 청킹 및 검색 최적화.',
    tags: ['Python', 'LangChain', 'ChromaDB', 'HuggingFace'],
    githubUrl: 'https://github.com/daekwon00',
  },
];
