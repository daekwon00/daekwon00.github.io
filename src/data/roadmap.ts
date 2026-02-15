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
    description: 'Python RAG 파이프라인, 벡터DB 통합, 금융 규제 문서 검색 시스템',
    status: 'completed',
  },
  {
    phase: 2,
    title: 'AI Agent 개발',
    description: '자율 AI 에이전트 설계, 도구 통합, MLOps 파이프라인 구축',
    status: 'progress',
  },
  {
    phase: 3,
    title: 'Fine-tuning & NLP',
    description: '사전학습 모델 파인튜닝, 한국어 NLP, 금융 도메인 특화 모델',
    status: 'planned',
  },
  {
    phase: 4,
    title: 'AI 시스템 통합',
    description: 'Spring Boot + FastAPI 하이브리드, 컨테이너화, 프로덕션 배포',
    status: 'planned',
  },
];
