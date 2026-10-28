import { useState } from 'react';
import { useLang, type Lang } from './lib/lang';
import { config } from './data/config';
import { ui, hero, about, skills, projects, experience, education, type Project } from './data/content';
import { ProjectDialog } from './components/ProjectDialog';

const sections = ['about', 'skills', 'projects', 'experience', 'education', 'contact'] as const;

function LangToggle() {
  const { lang, setLang } = useLang();
  const opt = (l: Lang, label: string) => (
    <button lang={l} aria-pressed={lang === l} onClick={() => setLang(l)}>{label}</button>
  );
  return <div className="lang" role="group" aria-label={ui.langLabel[lang]}>{opt('ar', 'العربية')}<span aria-hidden="true">|</span>{opt('en', 'EN')}</div>;
}

function Header() {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="wrap bar">
        <a className="brand" href="#top">{config.name[lang]}</a>
        <button className="menu-btn btn quiet" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>{ui.menu[lang]}</button>
        <nav id="nav" aria-label="Primary" className={open ? 'open' : ''}>
          {sections.map((s) => <a key={s} href={`#${s}`} onClick={() => setOpen(false)}>{ui.nav[s][lang]}</a>)}
        </nav>
        <LangToggle />
      </div>
    </header>
  );
}

function ProjectCard({ p, onOpen }: { p: Project; onOpen: (p: Project) => void }) {
  const { lang } = useLang();
  return (
    <article className="card">
      <h3>{p.title[lang]}</h3>
      <p>{p.summary[lang]}</p>
      <p className="meta">{p.role[lang]}</p>
      {p.tech.length > 0 && <ul className="chips" dir="ltr">{p.tech.slice(0, 5).map((t) => <li key={t}>{t}</li>)}</ul>}
      <button className="btn" onClick={() => onOpen(p)} aria-haspopup="dialog" aria-label={`${ui.details[lang]}: ${p.title[lang]}`}>{ui.details[lang]}</button>
    </article>
  );
}

export default function App() {
  const { lang } = useLang();
  const [active, setActive] = useState<Project | null>(null);
  const [featured, ...rest] = projects;
  return (
    <>
      <a className="skip" href="#about">Skip to content</a>
      <Header />
      <main id="top">
        <section className="hero wrap" aria-labelledby="hero-name">
          <div>
            <h1 id="hero-name">{config.name[lang]}</h1>
            <p className="role-line">{hero.title[lang]}</p>
            <p className="lead">{hero.intro[lang]}</p>
            <div className="actions">
              <a className="btn primary" href="#projects">{ui.viewProjects[lang]}</a>
              <a className="btn" href={config.cvFile} download>{ui.downloadCv[lang]}</a>
              <a className="btn quiet" href="#contact">{ui.contactMe[lang]}</a>
              {config.github && <a className="btn quiet" href={config.github} target="_blank" rel="noopener noreferrer">{ui.github[lang]}</a>}
            </div>
          </div>
          <dl className="facts">
            {hero.facts.map((f) => <div key={f.k.en}><dt>{f.k[lang]}</dt><dd>{f.v[lang]}</dd></div>)}
          </dl>
        </section>

        <section id="about" className="wrap sec" aria-labelledby="h-about">
          <h2 id="h-about">{about.heading[lang]}</h2>
          <div className="prose">{about.paras.map((p, i) => <p key={i}>{p[lang]}</p>)}</div>
        </section>

        <section id="skills" className="wrap sec" aria-labelledby="h-skills">
          <h2 id="h-skills">{skills.heading[lang]}</h2>
          <div className="skill-grid">
            {skills.groups.map((g) => (
              <div key={g.name.en}><h3>{g.name[lang]}</h3><ul className="plain" dir="ltr">{g.items.map((i) => <li key={i}>{i}</li>)}</ul></div>
            ))}
          </div>
          <p className="meta"><strong>{skills.extra.label[lang]}: </strong>{skills.extra.items[lang]}</p>
        </section>

        <section id="projects" className="sec band" aria-labelledby="h-projects">
          <div className="wrap">
            <h2 id="h-projects">{ui.nav.projects[lang]}</h2>
            <article className="feature">
              <div className="feature-text">
                <h3>{featured.title[lang]}</h3>
                <p className="lead-sm">{featured.summary[lang]}</p>
                <p className="meta">{featured.role[lang]}</p>
                <ul className="chips" dir="ltr">{featured.tech.map((t) => <li key={t}>{t}</li>)}</ul>
                <div className="actions">
                  <button className="btn primary" onClick={() => setActive(featured)} aria-haspopup="dialog">{ui.details[lang]}</button>
                  {featured.links.live && <a className="btn" href={featured.links.live} target="_blank" rel="noopener noreferrer">{ui.liveDemo[lang]}</a>}
                  {featured.links.repo && <a className="btn" href={featured.links.repo} target="_blank" rel="noopener noreferrer">{ui.repo[lang]}</a>}
                </div>
              </div>
              <div className="media big"><img src={featured.images![0].src} alt={featured.images![0].alt[lang]} /></div>
            </article>
            <div className="grid">{rest.map((p) => <ProjectCard key={p.id} p={p} onOpen={setActive} />)}</div>
          </div>
        </section>

        <section id="experience" className="wrap sec" aria-labelledby="h-exp">
          <h2 id="h-exp">{experience.heading[lang]}</h2>
          <ol className="timeline">
            {experience.items.map((e) => (
              <li key={e.org.en}>
                <div className="when">{e.dates[lang]}</div>
                <div>
                  <h3>{e.org[lang]}</h3><p className="meta">{e.role[lang]}</p>
                  <ul>{e.points.map((p, i) => <li key={i}>{p[lang]}</li>)}</ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="education" className="wrap sec" aria-labelledby="h-edu">
          <h2 id="h-edu">{education.heading[lang]}</h2>
          <div className="edu">
            <div>
              <h3>{education.degree.title[lang]}</h3>
              <p>{education.degree.school[lang]}</p>
              <p className="meta">{education.degree.detail[lang]}</p>
            </div>
            <ul className="awards">{education.awards.map((a) => <li key={a.title.en}><strong>{a.title[lang]}</strong><span>{a.detail[lang]}</span></li>)}</ul>
          </div>
        </section>

        <section id="contact" className="sec band" aria-labelledby="h-contact">
          <div className="wrap">
            <h2 id="h-contact">{ui.nav.contact[lang]}</h2>
            <p className="lead-sm">{ui.contactIntro[lang]}</p>
            <ul className="plain contact" dir="ltr">
              <li><span>{ui.phone[lang]}</span><a href={`tel:+966${config.phone.slice(1)}`}>{config.phone}</a></li>
              <li><span>{ui.email[lang]}</span><a href={`mailto:${config.email}`}>{config.email}</a></li>
              <li><span>{ui.linkedin[lang]}</span><a href={config.linkedin} target="_blank" rel="noopener noreferrer">{config.linkedin.replace('https://www.', '')}</a></li>
              <li><span>GitHub</span><a href={config.github} target="_blank" rel="noopener noreferrer">{config.github.replace('https://', '')}</a></li>
            </ul>
          </div>
        </section>
      </main>
      <footer className="wrap foot">
        <div><strong>{config.name[lang]}</strong><br /><span className="meta">{ui.rights[lang]}</span></div>
        <nav aria-label="Footer">{sections.map((s) => <a key={s} href={`#${s}`}>{ui.nav[s][lang]}</a>)}</nav>
        <LangToggle />
      </footer>
      <ProjectDialog project={active} onClose={() => setActive(null)} />
    </>
  );
}
