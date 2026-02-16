export type RoadmapStatus = 'completed' | 'progress' | 'planned';

export interface RoadmapPhase {
  phase: number;
  title: string;
  description: string;
  status: RoadmapStatus;
}

export const roadmapData: RoadmapPhase[] = [
  {
    phase: 0,
    title: 'Python AI/ML 기초',
    description:
      'NumPy, Pandas 금융 데이터 분석, Scikit-learn 신용평가 모델, PyTorch MNIST CNN',
    status: 'completed',
  },
  {
    phase: 1,
    title: 'RAG 시스템 구축',
    description:
      'Next.js + Supabase pgvector RAG 시스템 Vercel 배포. Python LangChain + ChromaDB 파이프라인, 금융 문서 Q&A',
    status: 'completed',
  },
  {
    phase: 2,
    title: 'AI Agent 개발',
    description:
      'ReAct Agent, OpenAI Functions Agent, 커스텀 도구 통합(yfinance, 뉴스 검색), 멀티턴 시나리오',
    status: 'progress',
  },
  {
    phase: 3,
    title: 'PyTorch + BERT Fine-tuning',
    description:
      'HuggingFace BERT Fine-tuning 금융 뉴스 감성 분석(3-class), Trainer API, Financial PhraseBank',
    status: 'planned',
  },
  {
    phase: 4,
    title: 'FastAPI + Docker 배포',
    description:
      'FastAPI 서버(/api/chat, /api/agent), Streamlit 프론트엔드, Docker 컨테이너화, MLflow 모델 추적',
    status: 'planned',
  },
];
