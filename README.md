# daekwon00.github.io

금융·웹 엔터프라이즈 역량을 가진 개발자의 개인 포트폴리오 사이트입니다.
금융·공공·클라우드 분야의 경험을 AI/ML에 접목하여, 실무에 바로 적용 가능한 AI 솔루션을 만들어가는 과정을 소개합니다.

**Live**: <https://daekwon00.github.io>

## 기술 스택

- **Framework**: Next.js 15 (App Router, Static Export)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Language**: TypeScript
- **Deployment**: GitHub Pages (GitHub Actions 자동 빌드/배포)

> 이전: HTML + Tailwind CSS v4 CDN + Vanilla JS → 2026-02-15 Next.js로 전환

## 사이트 구조

단일 페이지(SPA), 섹션 단위 스크롤 네비게이션으로 구성:

| 섹션 | 설명 |
| --- | --- |
| Hero | 프로필 사진, 헤드라인, CTA 버튼, 소셜 링크 |
| About | 경력 요약 소개 |
| Journey | 타임라인 형태의 커리어 여정 (1997~현재) |
| Projects | 주요 프로젝트 카드 (AI 시스템 통합, 금융/공공 프로젝트) |
| Skills | 카테고리별 기술 스택 (AI·ML, Backend, Frontend, DB, Cloud, Tools) |
| Roadmap | AI 학습 로드맵 진행 상황 |
| Contact | 연락처 및 소셜 링크 |

## 프로젝트 구조

```text
src/
├── app/
│   ├── layout.tsx          # 메타데이터, Google Fonts
│   ├── page.tsx            # 메인 페이지 (섹션 조합)
│   ├── not-found.tsx       # 404
│   └── globals.css         # Tailwind + 커스텀 CSS (@layer base/components)
├── components/
│   ├── layout/             # Navbar, ScrollProgress, Footer
│   ├── sections/           # Hero, About, Journey, Projects, Skills, Roadmap, Contact
│   ├── ui/                 # ScrollReveal, SectionLabel, ProjectCard, SkillCard, SkillTag
│   └── icons/index.tsx     # SVG → React 컴포넌트
├── hooks/                  # useScrollProgress, useNavbarScroll, useActiveSection
└── data/                   # timeline.ts, projects.ts, skills.ts, roadmap.ts
```

콘텐츠 데이터는 `src/data/` 파일에서 관리합니다. 내용 수정 시 데이터 파일만 편집하면 됩니다.

## 개발

```bash
npm install     # 의존성 설치
npm run dev     # 개발 서버 (localhost:3000)
```

## 배포

`main` 브랜치에 push하면 GitHub Actions가 자동으로 빌드 및 배포합니다.

- 빌드: `npm run build` → `out/` 정적 파일 생성
- 배포: `out/` → GitHub Pages

수동으로 빌드 확인이 필요한 경우:

```bash
npm run build       # 정적 빌드
npx serve out       # 로컬에서 빌드 결과 확인
```

> GitHub repo Settings > Pages > Source를 **"GitHub Actions"**로 설정해야 합니다.

## 디자인

- 라이트 테마 (white 배경, zinc 텍스트)
- 브랜드 색상: indigo/purple 그라데이션 (`#6366f1` → `#a855f7`)
- Google Fonts: Inter (영문/UI) + Noto Sans KR (한국어)
- 스크롤 기반 인터랙션: 프로그레스 바, 스크롤 리빌 애니메이션, 네비바 블러 효과

## 연락처

- **UDKsoft**: [udksoft.com](https://udksoft.com/) — 실험/테스트 프로젝트
- **GitHub**: [daekwon00](https://github.com/daekwon00)
- **LinkedIn**: [daekwon-yoo](https://www.linkedin.com/in/daekwon-yoo-1b3765170/)
- **Email**: yoosw00@gmail.com
