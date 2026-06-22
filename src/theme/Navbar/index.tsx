import React, {useState, useEffect} from 'react';
import {useColorMode} from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';

const MAIN = 'https://xplurdata.com';

const GH = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>`;
const SUN = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
const MOON = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;

// XplurData docs header. Brand + marketing links point to the main site (xplurdata.com);
// "Docs" stays on this standalone documentation site.
export default function Navbar(): JSX.Element {
  const {colorMode, setColorMode} = useColorMode();
  const [open, setOpen] = useState(false);
  const dark = colorMode === 'dark';
  const home = useBaseUrl('/docs/');
  const install = useBaseUrl('/docs/installation');
  const logo = useBaseUrl('/img/logo.svg');

  // Scroll progress bar (gradient accent at the very top), matching the landing.
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(100, (window.scrollY / docHeight) * 100) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="scroll-progress" style={{width: `${progress}%`}} />
      <nav className="navbar">
      <div className="nav-inner">
        <a href={MAIN} className="nav-logo">
          <span className="logo-icon">
            <img src={logo} alt="XplurData Logo" width={28} height={28} />
          </span>
          <span className="logo-text">XplurData</span>
          <span className="nav-oss-badge">AGPLv3 License</span>
        </a>
        <ul className={open ? 'nav-links open' : 'nav-links'}>
          <li><a href={`${MAIN}/#features`} className="nav-link">Features</a></li>
          <li><a href={`${MAIN}/#screenshots`} className="nav-link">Product</a></li>
          <li><a href={`${MAIN}/#architecture`} className="nav-link">Architecture</a></li>
          <li><a href={`${MAIN}/#roadmap`} className="nav-link">Roadmap</a></li>
          <li><a href={home} className="nav-link">Docs</a></li>
          <li><a href={`${MAIN}/#contact`} className="nav-link">Contact</a></li>
        </ul>
        <div className="nav-actions">
          <a
            href="https://github.com/xplurdata/oss-stack"
            target="_blank"
            rel="noopener"
            className="btn-github-nav"
            dangerouslySetInnerHTML={{__html: GH + ' GitHub <span class="github-stars-count">\u2605 Star</span>'}}
          />
          <button
            className="btn-ghost"
            aria-label="Toggle theme"
            onClick={() => setColorMode(dark ? 'light' : 'dark')}
            dangerouslySetInnerHTML={{__html: dark ? MOON : SUN}}
          />
          <a href={install} className="btn-primary">Get Started</a>
        </div>
        <button className="hamburger" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
          <span /><span /><span />
        </button>
      </div>
    </nav>
    </>
  );
}
