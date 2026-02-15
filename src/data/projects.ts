export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  period?: string;
  client?: string;
  role?: string;
  isMain?: boolean;
  badge?: string;
}

export const projectsData: Project[] = [
  {
    title: 'AI 시스템 통합 아키텍처 구축',
    description:
      'PyTorch/TensorFlow 딥러닝 학습, LangChain RAG 금융 규제 문서 검색 시스템 설계, Spring Boot + FastAPI 하이브리드 아키텍처 연구, 로컬 LLM(Ollama) 및 클라우드 API 비교, MLOps 파이프라인 구축, AI 에이전트 개발.',
    tags: ['Python', 'PyTorch', 'LangChain', 'ChromaDB', 'FastAPI', 'OpenAI API'],
    githubUrl: 'https://github.com/daekwon00',
    period: '2026.01 ~ 진행중',
    role: 'AI 개발',
    isMain: true,
    badge: 'In Progress',
  },
  {
    title: '신한은행 AI음성뱅킹',
    description:
      '모바일 앱에서 음성 인식을 통한 금융 기능 연동. STT/TTS 엔진, 자연어 처리(NLU) 기반 대화형 UI 구현. React 프론트엔드 및 인터페이스 프로토콜 설계. PL 역할 수행.',
    tags: ['React', 'JavaScript', 'Oracle', 'STT/TTS'],
    period: '2022.08 ~ 2023.11',
    client: '신한은행',
    role: 'PL/개발',
  },
  {
    title: '미래에셋생명 MSA 신규 개발',
    description:
      '모놀리식에서 MSA 구조로 전환. Spring Batch 기반 보험계약 데이터 처리, 정산 로직, 예약 실행 등 주요 배치 프로세스 설계 및 개발.',
    tags: ['Java', 'Spring Boot', 'Spring Batch', 'Oracle', 'MSA'],
    period: '2024.04 ~ 2024.08',
    client: '미래에셋생명',
    role: 'PL/개발',
  },
  {
    title: '교통안전공단 클라우드 전환',
    description:
      'TAGO 대중교통 정보 시스템 클라우드 이관. NHN Cloud 기반 Outer Architecture 구성, VPC/네트워크, Kafka/DB 서버, 망연계 솔루션 및 방화벽 정책 설정.',
    tags: ['NHN Cloud', 'Docker', 'Kafka', 'PostgreSQL', 'Shell Script'],
    period: '2025.09 ~ 2025.12',
    client: '교통안전공단',
    role: 'MSP',
  },
];
