import Logo from '../shared/Logo';
import { RiTwitterXLine, RiLinkedinBoxLine, RiFacebookBoxLine, RiGithubLine, RiDribbbleLine } from 'react-icons/ri';

const footerData = [
  {
    title: 'Product',
    links: ['Overview', 'Features', 'Solutions', 'Tutorials', 'Pricing', 'Releases'],
  },
  {
    title: 'Company',
    links: ['About us', 'Careers', 'Press', 'News', 'Media kit', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Newsletter', 'Events', 'Help centre', 'Tutorials', 'Support'],
  },
  {
    title: 'Use cases',
    links: ['Startups', 'Enterprise', 'Government', 'SaaS', 'Marketplaces', 'Ecommerce'],
  },
  {
    title: 'Legal',
    links: ['Terms', 'Privacy', 'Cookies', 'Licenses', 'Settings', 'Contact'],
  },
];

const socialIcons = [
  { Icon: RiTwitterXLine, href: '#', label: 'Twitter' },
  { Icon: RiLinkedinBoxLine, href: '#', label: 'LinkedIn' },
  { Icon: RiFacebookBoxLine, href: '#', label: 'Facebook' },
  { Icon: RiGithubLine, href: '#', label: 'GitHub' },
  { Icon: RiDribbbleLine, href: '#', label: 'Dribbble' },
];

const FooterColumn = ({ title, links }) => (
  <div className="flex flex-col gap-4">
    <h4 className="text-[11px] font-bold text-slate-400 tracking-widest uppercase">
      {title}
    </h4>
    <ul className="flex flex-col gap-3">
      {links.map((link) => (
        <li key={link}>
          <a
            href="#"
            className="text-[13px] text-slate-500 hover:text-[#ffb400] transition-colors duration-150"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => (
  <footer
    style={{
      background: 'linear-gradient(180deg, #071226 0%, #040d1a 100%)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}
  >
    <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-10">
      {/* Top: Logo + Social */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8 mb-14">
        <div>
          <Logo />
          <p className="mt-3 text-[13px] text-slate-500 max-w-[220px] leading-relaxed">
            Building the future of work, one hire at a time.
          </p>
        </div>
        <div className="flex items-center gap-3">
          {socialIcons.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:text-[#ffb400] transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.border = '1px solid rgba(255,180,0,0.3)';
                e.currentTarget.style.background = 'rgba(255,180,0,0.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
              }}
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      {/* Columns */}
      <div
        className="pt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        {footerData.map((col) => (
          <FooterColumn key={col.title} {...col} />
        ))}
      </div>

      {/* Bottom bar */}
      <div
        className="mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <p className="text-[12px] text-slate-600">
          © 2077 Untitled UI. All rights reserved.
        </p>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
          <span className="text-[12px] text-slate-600">All systems operational</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
