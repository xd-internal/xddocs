import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

// XplurData docs footer (matches the main site). Marketing links go to xplurdata.com;
// "Docs" stays on this site. Asset paths are baseUrl-safe.
export default function Footer(): JSX.Element {
  const home = useBaseUrl('/docs/');
  const logo = useBaseUrl('/img/logo.svg');
  const agpl = useBaseUrl('/img/agplv3.png');
  const html = FOOTER_HTML
    .replace(/@@HOME@@/g, home)
    .replace(/@@LOGO@@/g, logo)
    .replace(/@@AGPL@@/g, agpl);
  return <div dangerouslySetInnerHTML={{__html: html}} />;
}

const FOOTER_HTML = `<footer class="footer" id="footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <a href="https://xplurdata.com" class="nav-logo">
          <span class="logo-icon">
            <img src="@@LOGO@@" alt="XplurData Logo" width="28" height="28">
          </span>
          <span class="logo-text">XplurData</span>
        </a>
        <p>Production-ready OpenTelemetry observability — Apache Doris + OTel Collector + XD-API + XD-APP. One command
          deploy for Linux, macOS.</p>
        <div class="footer-social">
          <a href="https://github.com/xplurdata/oss-stack" target="_blank" rel="noopener" class="footer-social-link"
            aria-label="GitHub">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a href="https://linkedin.com/company/xplurdata" target="_blank" rel="noopener" class="footer-social-link"
            aria-label="LinkedIn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a href="https://xplurdata.slack.com/join/shared_invite/zt-3ztbx9k5e-ZAqInDjoyoICfB2ohq9NsQ#/shared-invite/email" target="_blank" rel="noopener"
            class="footer-social-link" aria-label="Slack">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.687 8.834a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.521V2.522A2.528 2.528 0 0 1 15.166 0a2.528 2.528 0 0 1 2.521 2.522v6.312zM15.166 18.956a2.528 2.528 0 0 1 2.521 2.522A2.528 2.528 0 0 1 15.166 24a2.528 2.528 0 0 1-2.521-2.522v-2.522h2.521zM15.166 17.687a2.528 2.528 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.521h6.312A2.528 2.528 0 0 1 24 15.166a2.528 2.528 0 0 1-2.522 2.521h-6.312z" />
            </svg>
          </a>
        </div>
      </div>
      <div class="footer-links">
        <div class="footer-col">
          <h5>Product</h5>
          <ul>
            <li><a href="@@HOME@@">Docs</a></li>
            <li><a href="https://xplurdata.com/#features">Features</a></li>
            <li><a href="https://xplurdata.com/#screenshots">Product</a></li>
            <li><a href="https://xplurdata.com/#architecture">Architecture</a></li>
            <li><a href="https://xplurdata.com/#roadmap">Roadmap</a></li>
            <li><a href="https://xplurdata.com/#contact">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Technology</h5>
          <ul>
            <li><a href="https://xplurdata.com/#deploy">Deployment</a></li>
            <li><a href="https://xplurdata.com/#value">Business Value</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Powered By</h5>
          <ul>
            <li><a href="https://opentelemetry.io" target="_blank" rel="noopener">OpenTelemetry</a></li>
            <li><a href="https://doris.apache.org" target="_blank" rel="noopener">Apache Doris</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 XplurData</span>
      <div class="footer-legal">
        <a href="https://xplurdata.com/privacy" target="_blank" rel="noopener">Privacy Policy</a>
        <a href="https://xplurdata.com/terms" target="_blank" rel="noopener">Terms of Service</a>
        <a href="https://www.gnu.org/licenses/agpl-3.0.html#license-text" target="_blank" rel="noopener"><img
           width="75" height="21" src="@@AGPL@@" alt="AGPL License"></a>
      </div>
  </footer>`;
