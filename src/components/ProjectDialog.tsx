import { useEffect, useRef, useState } from 'react';
import { useLang } from '../lib/lang';
import { ui, type Project } from '../data/content';

export function ProjectDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const { lang } = useLang();
  const ref = useRef<HTMLDialogElement>(null);
  const [shot, setShot] = useState(0);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (project && !d.open) { setShot(0); d.showModal(); }
    if (!project && d.open) d.close();
  }, [project]);

  const p = project;
  const img = p?.images?.[shot];
  return (
    <dialog ref={ref} className="dialog" onClose={onClose} onClick={(e) => { if (e.target === ref.current) onClose(); }} aria-labelledby="dlg-title">
      {p && (
        <div className="dialog-body">
          <div className="dialog-head">
            <h3 id="dlg-title">{p.title[lang]}</h3>
            <button className="btn quiet" onClick={onClose} autoFocus>{ui.close[lang]}</button>
          </div>
          {img && (
            <figure className="shot">
              <img src={img.src} alt={img.alt[lang]} />
              <div className="thumbs" role="group" aria-label={ui.screenshot[lang]}>
                {p.images!.map((im, i) => (
                  <button key={im.src} onClick={() => setShot(i)} aria-pressed={i === shot} aria-label={`${ui.screenshot[lang]} ${i + 1}`}>
                    <img src={im.src} alt="" loading="lazy" />
                  </button>
                ))}
              </div>
            </figure>
          )}
          <p>{p.overview[lang]}</p>
          {p.problem && <><h4>{ui.problem[lang]}</h4><p>{p.problem[lang]}</p></>}
          {p.solution && <><h4>{ui.solution[lang]}</h4><p>{p.solution[lang]}</p></>}
          {p.highlights && <><h4>{ui.highlights[lang]}</h4><ul>{p.highlights.map((h, i) => <li key={i}>{h[lang]}</li>)}</ul></>}
          <h4>{ui.role[lang]}</h4><p>{p.role[lang]}</p>
          {p.tech.length > 0 && <><h4>{ui.tech[lang]}</h4><ul className="chips">{p.tech.map((t) => <li key={t} dir="ltr">{t}</li>)}</ul></>}
          {p.confidentiality && <p className="note"><strong>{ui.confidential[lang]}: </strong>{p.confidentiality[lang]}</p>}
          {(p.links.live || p.links.repo) && (
            <div className="actions">
              {p.links.live && <a className="btn primary" href={p.links.live} target="_blank" rel="noopener noreferrer">{ui.liveDemo[lang]}</a>}
              {p.links.repo && <a className="btn" href={p.links.repo} target="_blank" rel="noopener noreferrer">{ui.repo[lang]}</a>}
            </div>
          )}
        </div>
      )}
    </dialog>
  );
}
