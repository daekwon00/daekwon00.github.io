# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

개인 포트폴리오 홈페이지 (https://daekwon00.github.io/). 단일 페이지(SPA) 구조로, 섹션 단위 스크롤 기반 네비게이션.

## Tech Stack

- **Framework**: Next.js 15 (App Router) with static export (`output: 'export'`)
- **Styling**: Tailwind CSS v4 via `@tailwindcss/postcss` — CSS에서 `@import "tailwindcss"` 방식 사용
- **Language**: TypeScript (strict mode)
- **Deployment**: GitHub Pages — `main` push 시 GitHub Actions가 `npm run build` → `out/` 디렉토리를 배포

## Commands

```bash
npm run dev     # 개발 서버 (localhost:3000)
npm run build   # 정적 빌드 → out/ 디렉토리 생성
npm start       # 프로덕션 서버 (빌드 후)
```

No linter or test runner is configured.

## Architecture

### Page Structure

단일 페이지 앱. `src/app/page.tsx`가 모든 섹션 컴포넌트를 순서대로 렌더링:

```
ScrollProgress → Navbar → Hero → About → Journey → Projects → Skills → Roadmap → Contact → Footer
```

### Data-Driven Sections

콘텐츠는 `src/data/` 의 TypeScript 파일에서 관리. 각 파일이 타입 인터페이스 + 데이터 배열을 export:

| 파일 | 섹션 | 인터페이스 |
|------|------|-----------|
| `projects.ts` | ProjectsSection | `Project` |
| `skills.ts` | SkillsSection | `SkillCategory` |
| `timeline.ts` | JourneySection | `TimelineItem` |
| `roadmap.ts` | RoadmapSection | `RoadmapPhase` |

콘텐츠 수정 시 데이터 파일만 편집하면 됨.

### Component Organization

- `src/components/sections/` — 페이지 섹션 컴포넌트 (Hero, About, Journey, Projects, Skills, Roadmap, Contact)
- `src/components/layout/` — Navbar, Footer, ScrollProgress
- `src/components/ui/` — 재사용 UI (ScrollReveal, ProjectCard, SkillCard, SkillTag, SectionLabel)
- `src/components/icons/` — 인라인 SVG 아이콘 컴포넌트. `getSkillIcon(key)` 함수로 스킬 카테고리 아이콘 매핑
- `src/hooks/` — 커스텀 훅 (useScrollProgress, useNavbarScroll, useActiveSection)

### Client vs Server Components

섹션 컴포넌트(HeroSection 등)는 서버 컴포넌트. 브라우저 API가 필요한 컴포넌트(Navbar, ScrollReveal, ScrollProgress)만 `'use client'` 사용.

### Styling Conventions

- Tailwind 유틸리티 클래스 + `globals.css`에 정의된 커스텀 컴포넌트 클래스 병용
- 주요 커스텀 클래스: `.gradient-text`, `.btn-primary`, `.btn-secondary`, `.project-card`, `.skill-card`, `.skill-tag`, `.section-label`, `.timeline`, `.reveal`
- 브랜드 색상: indigo/purple 계열 그라데이션 (`#6366f1` → `#a855f7`)
- 라이트 테마 (white 배경, zinc 텍스트)
- 경로 별칭: `@/*` → `./src/*`

### Static Assets

`public/images/` — favicon.svg, profile.png. `next.config.ts`에서 `images.unoptimized: true` 설정 (정적 export 호환).
