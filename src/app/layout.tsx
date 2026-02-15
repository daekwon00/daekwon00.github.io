import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '유대권 | Enterprise AI Solutions Architect',
  description:
    '27년 엔터프라이즈 IT 경험을 가진 개발자. Java/Spring/Cloud에서 AI 개발로 전환 중. 금융, 공공, 클라우드 역량을 AI에 접목합니다.',
  keywords: 'AI, Machine Learning, Enterprise, Java, Spring, Cloud, Portfolio, 유대권',
  authors: [{ name: '유대권' }],
  openGraph: {
    title: '유대권 | Enterprise AI Solutions Architect',
    description: '27년 엔터프라이즈 IT 경험을 AI의 미래에 접목합니다.',
    type: 'website',
    url: 'https://daekwon00.github.io',
  },
  icons: {
    icon: { url: '/images/favicon.svg', type: 'image/svg+xml' },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Noto+Sans+KR:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
