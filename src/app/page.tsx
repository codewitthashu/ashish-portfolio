
"use client";

import { useState, useEffect } from "react";


export default function Home() {
  const [dark, setDark] = useState(false);
  const [lang, setLang] = useState<"en" | "jp">("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedDark = localStorage.getItem("darkMode");
    const savedLang = localStorage.getItem("language");
    if (savedDark === "true") setDark(true);
    if (savedLang === "jp") setLang("jp");
    setMounted(true);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", String(dark));
  }, [dark]);

  useEffect(() => {
    localStorage.setItem("language", lang);
  }, [lang]);

  const t = {
    en: {
      hi: "Hi, I'm",
      name: "Ashish Chudasama",
      role: "Full Stack Developer",
      sub: "MERN Stack • Japanese N3 • Seeking opportunities in Japan",
      btn: "View My Work",
      aboutTitle: "About Me",
      aboutText:
        "I'm a self-taught MERN stack developer from India, building my path to a developer career in Japan. No degree. No bootcamp. Just code every day, Japanese study every day, and a clear goal. I believe skills and portfolio speak louder than certificates.",
      japanTitle: "Why Japan?",
      japanText:
        "I'm drawn to Japan's technology culture, discipline, and craftsmanship. I'm learning Japanese daily (targeting JLPT N3 by December 2026) and building projects that showcase my ability to work in international teams.",
      projectsTitle: "Projects",
      projects: [
        {
          title: "Portfolio Website",
          desc: "Personal portfolio with dark mode, Japanese/English i18n, and responsive design.",
          tech: "Next.js, TypeScript, Tailwind CSS",
          live: "https://ashish-portfolio-eight-zeta.vercel.app",
        },
        {
          title: "Admin Dashboard",
          desc: "Full-stack dashboard with JWT auth, CRUD APIs, and data visualization.",
          tech: "React, Node.js, Express, MongoDB",
          live: "https://github.com/codewitthashu/ashish-dashboard",
        },
        {
          title: "Real-Time Collab Tool",
          desc: "Multi-user document editor with live cursors and chat.",
          tech: "Socket.io, React, Node.js",
          live: "https://realtime-collab-02nf.onrender.com",
        },
        {
          title: "Japan Job Board",
          desc: "Aggregator for Japan-based developer jobs with search and alerts.",
          tech: "Next.js, Puppeteer, MongoDB",
          live: "https://japan-job-board.vercel.app",
        },
      ],
      contactTitle: "Contact",
      email: "codewithashu74@gmail.com",
      github: "github.com/codewitthashu",
      footer: "© 2026 Ashish Chudasama. Building for Japan. One commit at a time.",
    },
    jp: {
      hi: "こんにちは、",
      name: "アシシュ・チュダサマ",
      role: "フルスタック開発者",
      sub: "MERNスタック • 日本語N3 • 日本でのキャリアを目指して",
      btn: "作品を見る",
      aboutTitle: "私について",
      aboutText:
        "私はインド出身の独学MERNスタック開発者で、日本での開発者キャリアを目指しています。学位もブートキャンプもありません。毎日コードを書き、毎日日本語を勉強し、明確な目標を持っています。証明書よりもスキルとポートフォリオが重要だと信じています。",
      japanTitle: "なぜ日本？",
      japanText:
        "日本のテクノロジー文化、規律、そして職人技に惹かれています。日本語を毎日勉強し（2026年12月までにJLPT N3を目標）、国際チームで働く能力を示すプロジェクトを構築しています。",
      projectsTitle: "プロジェクト",
      projects: [
        {
          title: "ポートフォリオサイト",
          desc: "ダークモード、日本語/英語のi18n、レスポンシブデザインを備えた個人ポートフォリオ。",
          tech: "Next.js, TypeScript, Tailwind CSS",
          live: "https://ashish-portfolio-eight-zeta.vercel.app",
        },
        {
          title: "管理ダッシュボード",
          desc: "JWT認証、CRUD API、データ可視化を備えたフルスタックダッシュボード。",
          tech: "React, Node.js, Express, MongoDB",
          live: "https://github.com/codewitthashu/ashish-dashboard",
        },
        {
          title: "リアルタイムコラボツール",
          desc: "ライブカーソルとチャットを備えたマルチユーザードキュメントエディタ。",
          tech: "Socket.io, React, Node.js",
          live: "https://realtime-collab-02nf.onrender.com",
        },
        {
          title: "日本求人ボード",
          desc: "検索とアラート機能を備えた日本拠点の開発者求人アグリゲーター。",
          tech: "Next.js, Puppeteer, MongoDB",
          live: "https://japan-job-board.vercel.app",
        },
      ],
      contactTitle: "お問い合わせ",
      email: "codewithashu74@gmail.com",
      github: "github.com/codewitthashu",
      footer: "© 2026 アシシュ・チュダサマ。日本のために構築。毎日一歩ずつ。",
    },
  };

  const c = t[lang];

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center">
        <p className="text-gray-400">Loading...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen scroll-smooth bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors">
      <nav className="flex justify-end items-center p-6 gap-3 sticky top-0 bg-white/80 dark:bg-gray-950/80 backdrop-blur z-50">
        <a href="#about" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 hidden sm:block">
          {lang === "en" ? "About" : "概要"}
        </a>
        <a href="#projects" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 hidden sm:block">
          {lang === "en" ? "Projects" : "作品"}
        </a>
        <a href="#contact" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 hidden sm:block">
          {lang === "en" ? "Contact" : "連絡"}
        </a>
        <button
          onClick={() => setLang(lang === "en" ? "jp" : "en")}
          className="px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          {lang === "en" ? "日本語" : "English"}
        </button>
        <button
          onClick={() => setDark(!dark)}
          className="px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </nav>

      <section id="hero" className="flex flex-col items-center justify-center min-h-[90vh] text-center px-4">
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-2">{c.hi}</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">{c.name}</h1>
        <h2 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-semibold mb-4">{c.role}</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mb-8">{c.sub}</p>
        <a
          href="#projects"
          className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-lg"
        >
          {c.btn}
        </a>
      </section>

      <section id="about" className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{c.aboutTitle}</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">{c.aboutText}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">{c.japanTitle}</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">{c.japanText}</p>
          </div>
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{c.projectsTitle}</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {c.projects.map((project, i) => (
            <div
              key={i}
              className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-full h-40 bg-gray-200 dark:bg-gray-800 rounded-lg mb-4 flex items-center justify-center text-gray-400 text-sm">
                {lang === "en" ? "Screenshot Coming" : "スクリーンショット準備中"}
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">{project.desc}</p>
              <p className="text-xs text-blue-600 dark:text-blue-400 mb-4 font-mono">{project.tech}</p>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                {lang === "en" ? "View Project →" : "プロジェクトを見る →"}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">{c.contactTitle}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
          {lang === "en"
            ? "I'm open to freelance, internship, and full-time opportunities in Japan. Let's talk."
            : "日本でのフリーランス、インターンシップ、正社員の機会を探しています。お気軽にご連絡ください。"}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${c.email}`}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
          >
            ✉️ {c.email}
          </a>
          <a
            href={`https://${c.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            💻 {c.github}
          </a>
        </div>
      </section>

      <footer className="text-center py-8 border-t border-gray-200 dark:border-gray-800">
        <p className="text-sm text-gray-500 dark:text-gray-500">{c.footer}</p>
      </footer>
    </main>
  );
}
