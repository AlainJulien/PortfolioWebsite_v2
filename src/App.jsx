import React, { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Moon, Sun, Github, Linkedin, Mail, Download, ExternalLink, Database, BarChart3, Cloud, Sparkles, MapPinned, GaugeCircle, FileSpreadsheet, Globe } from 'lucide-react'

function useTheme() {
  const [theme, setTheme] = useState('system')
  useEffect(() => { const saved = localStorage.getItem('theme-v1'); if (saved) setTheme(saved) }, [])
  useEffect(() => {
    const root = document.documentElement
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = theme === 'dark' || (theme === 'system' && prefersDark)
    root.classList.toggle('dark', isDark)
    localStorage.setItem('theme-v1', theme)
  }, [theme])
  return { theme, setTheme }
}

const PROFILE = {
  name: 'Alain Julien',
  role: 'Business Intelligence Engineer & Systems Analyst',
  tagline: 'I turn messy public-sector data into trusted pipelines and dashboards that drive decisions—fast.',
  summary: 'Experienced BI Engineer and Systems Analyst with 4+ years in Trinidad & Tobago\\'s public sector. I build clean data pipelines and deliver insight-rich analytics across Oracle Fusion HCM rollouts (~40 entities). Strengths: SQL (Athena/BigQuery/Postgres), Python ETL, AWS (S3, Glue, Athena, Redshift), and Power BI/Tableau/QuickSight.',
  email: 'alain_j@live.com',
  links: {
    github: 'https://github.com/AlainJulien',
    linkedin: 'https://www.linkedin.com/in/alain-julien',
    resume: '#',
  },
}

const SKILLS = [
  { icon: <Database />, label: 'SQL (Athena, BigQuery, Postgres)' },
  { icon: <Cloud />, label: 'AWS (S3, Glue, Athena, Redshift)' },
  { icon: <FileSpreadsheet />, label: 'Power BI, Tableau, QuickSight' },
  { icon: <BarChart3 />, label: 'Data Modeling & ETL (Python)' },
  { icon: <GaugeCircle />, label: 'UAT/SIT · Test Strategy' },
  { icon: <Globe />, label: 'Public Sector · Oracle Fusion HCM' },
]

const PROJECTS = [
  { title: 'San Francisco Traffic Safety — End‑to‑End AWS Pipeline', blurb: 'S3 → Glue → Athena SQL cleaning → Power BI dashboard. Crash trends, high‑risk corridors, time‑of‑day heatmaps.', badges: ['AWS','ETL','Athena SQL','Power BI'], actions: [{ label:'GitHub', href: 'https://github.com/AlainJulien', icon: <Github size={16} /> }, { label:'Dashboard', href:'#', icon:<ExternalLink size={16} /> }] },
  { title: 'USD↔TTD FX Tracker — BI for Cost‑of‑Living Moves', blurb: 'Pipeline + dashboard tracking FX trends, forecasting, and impact on relocation budgets.', badges: ['Forecasting','Power BI','Python'], actions: [{ label:'GitHub', href: 'https://github.com/AlainJulien', icon: <Github size={16} /> }, { label:'Live', href:'#', icon:<ExternalLink size={16} /> }] },
  { title: 'Oracle Fusion HCM Rollout Analytics — 40 MDAs', blurb: 'KPIs for SIT/UAT coverage, defect burn‑down, go‑live readiness across entities and integrations.', badges: ['Oracle HCM','SIT/UAT','Dashboards'], actions: [{ label:'Case Notes', href:'#', icon:<ExternalLink size={16} /> }] },
]

function Badge({ children }) { return <span className="rounded-full border px-2.5 py-1 text-xs font-medium dark:border-slate-700">{children}</span> }
function Card({ children, className='' }) { return <div className={`rounded-2xl border bg-white/70 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 ${className}`}>{children}</div> }

export default function App() {
  const { theme, setTheme } = useTheme()
  const year = useMemo(() => new Date().getFullYear(), [])
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900 dark:from-[#0b1117] dark:to-black dark:text-slate-100">
      <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/70 backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2"><Sparkles className="h-5 w-5 text-primary" /><span className="font-semibold">Alain Julien</span></div>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#projects" className="hover:text-primary">Projects</a>
            <a href="#skills" className="hover:text-primary">Skills</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
            <a href={PROFILE.links.resume} className="inline-flex items-center gap-1 hover:text-primary">Resume <ArrowUpRight className="h-4 w-4" /></a>
          </nav>
          <div className="flex items-center gap-2">
            <a href={PROFILE.links.github} className="rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="GitHub"><Github className="h-5 w-5" /></a>
            <a href={PROFILE.links.linkedin} className="rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">{PROFILE.role}</h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">{PROFILE.tagline}</p>
            <p className="mt-4 text-slate-700 dark:text-slate-300">{PROFILE.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={PROFILE.links.resume} className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 font-medium text-white shadow hover:opacity-90"><Download className="h-4 w-4" /> Download Resume</a>
              <a href="#projects" className="inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 font-medium hover:shadow dark:border-slate-700"><BarChart3 className="h-4 w-4" /> View Projects</a>
              <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 font-medium hover:shadow dark:border-slate-700"><Mail className="h-4 w-4" /> Contact</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }}>
            <Card className="relative overflow-hidden">
              <div className="absolute right-[-50px] top-[-50px] h-44 w-44 rounded-full blur-2xl" style={{ background: 'rgba(24, 191, 239, 0.2)' }} />
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">What I Do</h3>
              <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-3"><Database className="mt-0.5 h-5 w-5" /><span>Design clean data models and write production‑ready SQL for analytics.</span></li>
                <li className="flex items-start gap-3"><Cloud className="mt-0.5 h-5 w-5" /><span>Ship AWS pipelines (S3 → Glue → Athena/Redshift) with governance in mind.</span></li>
                <li className="flex items-start gap-3"><BarChart3 className="mt-0.5 h-5 w-5" /><span>Build decision‑ready dashboards (Power BI/Tableau/QuickSight) your execs will use.</span></li>
                <li className="flex items-start gap-3"><MapPinned className="mt-0.5 h-5 w-5" /><span>Specialty: Public‑sector analytics and Oracle Fusion HCM rollouts across ~40 entities.</span></li>
              </ul>
            </Card>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-4 pb-6">
        <div className="mb-6 flex items-center justify-between"><h2 className="text-2xl font-semibold">Featured Projects</h2><a className="inline-flex items-center gap-1 text-sm text-slate-600 hover:text-primary dark:text-slate-300" href={PROFILE.links.github}>See all <ArrowUpRight className="h-4 w-4" /></a></div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i }}>
              <Card>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.blurb}</p>
                <div className="mt-3 flex flex-wrap gap-2">{p.badges.map(b => <Badge key={b}>{b}</Badge>)}</div>
                <div className="mt-4 flex flex-wrap gap-3">{p.actions.map(a => <a key={a.label} href={a.href} className="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm hover:shadow dark:border-slate-700">{a.icon}<span>{a.label}</span></a>)}</div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="mb-6 text-2xl font-semibold">Core Skills</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map(({ icon, label }) => <Card key={label} className="flex items-center gap-3"><div className="rounded-xl border p-2 dark:border-slate-700">{icon}</div><div className="font-medium">{label}</div></Card>)}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 pb-16">
        <Card>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold">Let’s build something impactful</h2>
              <p className="mt-2 text-slate-600 dark:text-slate-300">I’m open to BI Engineer, Analytics, or Data roles. Remote or hybrid. Public‑sector and regulated environments welcome.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:shadow dark:border-slate-700"><Mail size={18} /> Email</a>
                <a href={PROFILE.links.linkedin} className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:shadow dark:border-slate-700"><Linkedin size={18} /> LinkedIn</a>
                <a href={PROFILE.links.github} className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:shadow dark:border-slate-700"><Github size={18} /> GitHub</a>
              </div>
            </div>
            <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2"><Sparkles className="h-4 w-4" /> Consistent tagline across site, resume, LinkedIn.</div>
              <div className="flex items-center gap-2"><BarChart3 className="h-4 w-4" /> Lead with outcomes (before → after metrics).</div>
              <div className="flex items-center gap-2"><Cloud className="h-4 w-4" /> Call out AWS stack in every project card.</div>
              <div className="flex items-center gap-2"><ExternalLink className="h-4 w-4" /> Add links to code, data, and dashboards.</div>
            </div>
          </div>
        </Card>
      </section>

      <footer className="border-t py-10 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-400">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
            <p>© {year} {PROFILE.name}. Built with React & Tailwind.</p>
            <div className="flex items-center gap-3">
              <a href={PROFILE.links.github} className="inline-flex items-center gap-1 hover:text-primary"><Github className="h-4 w-4" /> GitHub</a>
              <a href={PROFILE.links.linkedin} className="inline-flex items-center gap-1 hover:text-primary"><Linkedin className="h-4 w-4" /> LinkedIn</a>
              <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-1 hover:text-primary"><Mail className="h-4 w-4" /> Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ThemeToggle({ theme, setTheme }) {
  return (
    <div className="relative">
      <div className="hidden items-center gap-1 rounded-full border p-1 dark:border-slate-700 md:flex">
        <button onClick={() => setTheme('light')} className={`rounded-full p-2 ${theme === 'light' ? 'bg-slate-100 dark:bg-slate-800' : ''}`} aria-label="Light theme"><Sun className="h-4 w-4" /></button>
        <button onClick={() => setTheme('dark')} className={`rounded-full p-2 ${theme === 'dark' ? 'bg-slate-100 dark:bg-slate-800' : ''}`} aria-label="Dark theme"><Moon className="h-4 w-4" /></button>
        <button onClick={() => setTheme('system')} className={`rounded-full p-2 ${theme === 'system' ? 'bg-slate-100 dark:bg-slate-800' : ''}`} aria-label="System theme"><LaptopIcon className="h-4 w-4" /></button>
      </div>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="md:hidden rounded-full border p-2 dark:border-slate-700" aria-label="Toggle theme">{theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}</button>
    </div>
  )
}

function LaptopIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" {...props}>
      <path d="M3 5.5A1.5 1.5 0 0 1 4.5 4h15A1.5 1.5 0 0 1 21 5.5v8A1.5 1.5 0 0 1 19.5 15h-15A1.5 1.5 0 0 1 3 13.5v-8Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 18h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
