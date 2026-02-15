export interface TimelineItem {
  period: string;
  title: string;
  description: string;
  isCurrent?: boolean;
}

export const timelineData: TimelineItem[] = [
  {
    period: '1997 ~ 2008',
    title: '통신/모바일 개발',
    description:
      '삼성전기 통신연구소에서 커리어 시작. 한화텔레콤 Bluetooth 개발, 모토로라코리아에서 7년간 CDMA 선임연구원. 임베디드 시스템과 통신 프로토콜 전문성 확보.',
  },
  {
    period: '2008 ~ 2015',
    title: '자체 사업 운영 (에이비씨옥션)',
    description:
      '부동산 경매 플랫폼 구축·운영. 웹 풀스택 개발(ASP.NET, MS-SQL), DB 설계, 검색엔진 시스템 개발. 법원·공매 데이터 자동 수집, 20개 테마 사이트 자동화 운영. PG사 결제 연동 및 관리자 백오피스 구축.',
  },
  {
    period: '2015 ~ 2021',
    title: '임베디드/3D/영상처리',
    description:
      'Linux 환경에서 3D 프린터 시스템 개발(Python, C++, OpenCV, Qt). LG전자 Android Automotive Audio HAL 개발. Unreal Engine 기반 미디어월·Cave 영상처리 알고리즘 개발.',
  },
  {
    period: '2022 ~ 2025',
    title: '금융/공공 웹 프로젝트',
    description:
      '신한은행 AI음성뱅킹 PL(React), 우리은행 Push 시스템, 미래에셋생명 MSA Batch 개발(Spring Boot), 국토부 전세사기 시스템(GPKI/NPKI 인증), 교통안전공단 클라우드 전환(NHN Cloud, Docker). 다수 프로젝트 PL/AA 역할 수행.',
  },
  {
    period: '2026 ~ 현재',
    title: 'AI 개발 전환 + 현업 병행',
    description:
      'PyTorch, LangChain RAG, AI Agent 개발에 집중. 금융 도메인 AI 시스템 통합 아키텍처 연구. 한경정보통신에서 AWS MSA Front React 현업 병행.',
    isCurrent: true,
  },
];
