export type RoadmapStatus = 'completed' | 'progress' | 'planned';

export interface RoadmapPhase {
  phase: number;
  title: string;
  description: string;
  status: RoadmapStatus;
}

export const roadmapData: RoadmapPhase[] = [
  {
    phase: 1,
    title: 'LangChain RAG',
    description: 'Python RAG 파이프라인, 벡터DB 통합, 프로덕션 배포',
    status: 'completed',
  },
  {
    phase: 2,
    title: 'AI Agent 개발',
    description: '자율 AI 에이전트 설계, 도구 통합, 워크플로우 자동화',
    status: 'progress',
  },
  {
    phase: 3,
    title: 'BERT Fine-tuning',
    description: '사전학습 모델 파인튜닝, 한국어 NLP, 도메인 특화 모델',
    status: 'planned',
  },
  {
    phase: 4,
    title: 'FastAPI + Docker',
    description: 'ML 모델 서빙 API, 컨테이너화, CI/CD 파이프라인',
    status: 'planned',
  },
];
