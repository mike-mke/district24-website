import { NAV_PAGES, NAV_GROUPS } from '../data.js';

function Dropdown({ label, items, currentHash }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  const isActive = items.some(i => i.hash === currentHash);

  React.useEffect(() => {
    const handler = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="dropdown" ref={ref}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}>
      <button className={`dropdown__btn${isActive ? ' active' : ''}`} onClick={() => setOpen(!open)}>
        {label} <span className="dropdown__caret">▾</span>
      </button>
      {open && (
        <div className="dropdown__menu">
          {items.map(item => (
            <a key={item.hash} href={item.hash} onClick={() => setOpen(false)}
              className={`dropdown__item${currentHash === item.hash ? ' active' : ''}`}>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export function Navbar({ currentHash }) {
  const [open, setOpen] = React.useState(false);
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <a href="#/" className="navbar__brand">
          <span className="navbar__brand-name">AA District 24</span>
          <span className="navbar__brand-sub">Ozaukee County · Area 75</span>
        </a>
        <div className="navbar__links">
          <a href="#/" className={`nav-link${currentHash === '#/' ? ' active' : ''}`}>Home</a>
          <Dropdown label="Pages"  items={NAV_PAGES.slice(1)} currentHash={currentHash} />
          <Dropdown label="Groups" items={NAV_GROUPS}          currentHash={currentHash} />
        </div>
        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
      {open && (
        <div className="mobile-menu">
          {NAV_PAGES.map(item => (
            <a key={item.hash} href={item.hash} onClick={() => setOpen(false)}
              className={`mobile-link${currentHash === item.hash ? ' active' : ''}`}>
              {item.label}
            </a>
          ))}
          <div className="mobile-section">Groups</div>
          {NAV_GROUPS.map(item => (
            <a key={item.hash} href={item.hash} onClick={() => setOpen(false)}
              className={`mobile-link mobile-sub${currentHash === item.hash ? ' active' : ''}`}>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
