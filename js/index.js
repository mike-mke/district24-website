// ══════════════════════════════════════════════════════════════
//  UTILITIES
// ══════════════════════════════════════════════════════════════
var MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function formatEventDate(isoDate) {
  var d = new Date(isoDate + 'T00:00:00');
  return MONTH_NAMES[d.getMonth()] + ' ' + String(d.getDate()).padStart(2, '0');
}

// Parse "Month DD" (no year) lead date strings, assuming current year.
// If the result is >6 months in the past it wraps to next year.
function parseLeadDate(dateStr) {
  var now = new Date();
  var d = new Date(dateStr + ' ' + now.getFullYear());
  if (now - d > 180 * 24 * 60 * 60 * 1000) d.setFullYear(d.getFullYear() + 1);
  return d;
}

function isUpcomingLead(dateStr) {
  var today = new Date(); today.setHours(0, 0, 0, 0);
  return parseLeadDate(dateStr) >= today;
}

// ══════════════════════════════════════════════════════════════
//  SMALL REUSABLE COMPONENTS
// ══════════════════════════════════════════════════════════════
function ExtLink({ href, children }) {
  return <a className="inline-link" href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
}

function Card({ title, className = '', children }) {
  return (
    <div className={`card ${className}`}>
      {title && <h2 className="card__h2">{title}</h2>}
      {children}
    </div>
  );
}

function ResLink({ href, children }) {
  return (
    <div className="resource-link">
      <span className="resource-link__arrow">→</span>
      <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul className="bullet-list">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  );
}

// ══════════════════════════════════════════════════════════════
//  NAVBAR
// ══════════════════════════════════════════════════════════════
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

function Navbar({ currentHash }) {
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

// ══════════════════════════════════════════════════════════════
//  FOOTER
// ══════════════════════════════════════════════════════════════
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <div className="footer__col-title">AA District 24</div>
          <div>Ozaukee County · Area 75 (Southern Wisconsin)</div>
          <div className="mt-sm">
            Email: <a href="mailto:info@aadistrict24.org" className="footer__link d-inline">info@aadistrict24.org</a>
          </div>
        </div>
        <div>
          <div className="footer__col-head">Monthly District Meetings</div>
          <div>3rd Tuesday of each month (except December)</div>
          <div>6:30 PM · Grace 242 Church</div>
          <div>249 Main St, Thiensville WI 53092</div>
        </div>
        <div>
          <div className="footer__col-head">Links</div>
          <a href="https://www.aa.org" target="_blank" rel="noopener noreferrer" className="footer__link">AA.org</a>
          <a href="https://www.aamilwaukee.com" target="_blank" rel="noopener noreferrer" className="footer__link">Milwaukee Central Office</a>
          <a href="https://mtg.area75.org" target="_blank" rel="noopener noreferrer" className="footer__link">Area 75</a>
        </div>
      </div>
      <div className="footer__bottom">AA District 24 · Ozaukee County · Area 75 Southern Wisconsin</div>
    </footer>
  );
}

// ══════════════════════════════════════════════════════════════
//  PAGE: HOME
// ══════════════════════════════════════════════════════════════
function HomePage() {
  return (
    <div className="page">
      <div className="hero">
        <div className="hero__orb1" />
        <div className="hero__orb2" />
        <h1 className="hero__h1">AA in District 24</h1>
        <p className="hero__sub">Ozaukee County · Area 75 (Southern Wisconsin)</p>
      </div>

      <Card title="Who Are We?">
        <p className="page-p">
          This website is for <strong>District 24</strong> (Ozaukee County), part of <strong>Area 75</strong> (Southern Wisconsin).
          An A.A. <em>District</em>  is part of the overall structure of Alcoholics Anonymous.{' '}
          <ExtLink href="https://mtg.area75.org/thestructure.html">Learn more about the structure of A.A.</ExtLink>
        </p>
        <p className="page-p">There are over fifty groups and two clubs in our District.</p>
      </Card>

      <Card title="Purpose of This Website">
        <p className="page-p">
          The purpose of this website is to help the still suffering alcoholic by carrying the message of recovery through
          Alcoholics Anonymous to the general public and to provide information regarding events, meetings, workshops,
          conferences, and other matters of importance to recovering alcoholics in District 24. The guiding principles are
          taken from the A.A. Preamble, the Twelve Steps and Twelve Traditions, and other A.A. General Service Conference
          approved literature.
        </p>
      </Card>

      <Card title="Upcoming Events">
          <div className="table-wrap">
              <table className="data-table">
                  <thead>
                  <tr><th>Date</th><th>Event</th></tr>
                  </thead>
                  <tbody>
                  {UPCOMING_EVENTS.filter(ev => {
                    if (!ev.isoDate) return true;
                    const cutoff = new Date(); cutoff.setDate(cutoff.getDate() - 2);
                    return new Date(ev.isoDate) >= cutoff;
                  }).map((ev, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'stripe' : 'white'}>
                          <td>{formatEventDate(ev.isoDate)}</td>
                          <td className="text-muted text-sm">{ev.link ? <ExtLink href={ev.link}>{ev.label}</ExtLink> : <span>{ev.label}</span>}</td>
                      </tr>
                  ))}
                  </tbody>
              </table>
          </div>
      </Card>

      <div className="two-col">
          <Card className="card--accent-yellow">
              <h2 className="card__h2">⭐ Featured Meeting</h2>
              <p className="page-p semibold">Saukville Big Book Meeting (65294)</p>
              <p className="page-p">
                  Living Hope Lutheran Church<br />
                  851 W Dekora St<br />
                  Saukville, WI 53080<br />
                  <em>Enter off Hwy 33</em>
              </p>
              <p className="page-p"><strong>Thursday 7:00 PM</strong></p>
          </Card>
        <Card className="card--accent-top">
          <h2 className="card__h2">📅 District 24 Monthly Meetings</h2>
          <p className="page-p"><strong>When:</strong> 3rd Tuesday of every month <em>(except December)</em></p>
          <p className="page-p"><strong>Time:</strong> 6:30 PM – approx. 60–70 minutes</p>
          <p className="page-p">
            <strong>Where:</strong><br />
            Grace 242 Church<br />
            249 Main Street<br />
            Thiensville, WI 53092
          </p>
        </Card>
      </div>

      <Card title="District 24 Service Positions">
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr><th>Position</th><th>Contact</th><th>Term</th></tr>
            </thead>
            <tbody>
              {SERVICE_POSITIONS.map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? 'stripe' : 'white'}>
                  <td><strong>{r.pos}</strong></td>
                  <td>{r.email ? <a href={`mailto:${r.email}`} className="inline-link">{r.name}</a> : r.name}</td>
                  <td className="text-muted text-sm">{r.term}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card className="card--tinted">
        <p className="page-p">
          Questions about District 24, Area 75, or A.A.?{' '}
          Contact us at{' '}
          <a href="mailto:info@aadistrict24.org" className="inline-link bold">info@aadistrict24.org</a>
        </p>
      </Card>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  PAGE: ACCESSIBILITIES & TREATMENT
// ══════════════════════════════════════════════════════════════
function AccessibilitiesPage() {
  return (
    <div className="page">
      <h1 className="page-h1">Accessibilities &amp; Treatment</h1>
      <Card>
        <p className="page-p">
          The Accessibilities Committee explores, develops, and offers resources to alcoholics with significant barriers
          to receiving the Alcoholics Anonymous message and to participating in our program of recovery. We want A.A. to
          be available to all alcoholics who reach out for it.
        </p>
      </Card>
      <Card title="Committee Focuses On">
        <BulletList items={[
          'Projects that support members with a variety of accessibility challenges',
          'Communications that keep the public and appropriate agencies informed about A.A. accessibility',
          'Providing resources and guidance to groups so that they can accommodate all A.A. members',
        ]} />
      </Card>
      <Card title="Resources">
        <ResLink href="https://drive.google.com/file/d/1Vf_JbElGiaQgDY5deop0uUFypTwCJtTV/view">Accessibilities Resources (Google Drive)</ResLink>
        <ResLink href="https://www.aa.org/accessibilities-committees">Committee Resources – AA.org</ResLink>
      </Card>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  PAGE: CALENDAR
// ══════════════════════════════════════════════════════════════
function CalendarPage() {
  return (
    <div className="page">
      <h1 className="page-h1">District 24 Calendar</h1>
      <Card>
        <p className="page-p">The District 24 calendar is hosted on Google Calendar.</p>
        <ResLink href="https://calendar.google.com/calendar/embed?src=hs1unk51oc51iqdds41s5vva58%40group.calendar.google.com&ctz=America%2FChicago">
          Open District 24 Calendar in a new tab
        </ResLink>
      </Card>
      <div className="calendar-wrap">
        <iframe
          className="calendar-frame"
          src="https://calendar.google.com/calendar/embed?src=hs1unk51oc51iqdds41s5vva58%40group.calendar.google.com&ctz=America%2FChicago"
          title="District 24 Google Calendar"
        />
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  PAGE: CORRECTIONS
// ══════════════════════════════════════════════════════════════
function CorrectionsPage() {
  return (
    <div className="page">
      <h1 className="page-h1">District 24 Corrections</h1>
      <Card>
        <p className="page-p">
          Members of Corrections Committees coordinate the work of individual A.A. members and groups to carry the
          message of recovery to alcoholics who are in custody.
        </p>
      </Card>
      <Card title="Committee Focuses On">
        <BulletList items={[
          'Bringing meetings and literature into facilities',
          'Raising awareness of the Corrections Correspondence Service (C.C.S.) among "inside" and "outside" A.A. members',
          'Helping individuals in custody transition to a local A.A. community through Prerelease Contacts',
        ]} />
      </Card>
      <Card title="Resources">
        <ResLink href="https://www.aa.org/corrections-committees">Committee Resources – AA.org</ResLink>
        <ResLink href="https://drive.google.com/file/d/12ihcKV27v3a1TXExhpn_22TlqvSjQBjp/view">Corrections Workbook (Google Drive)</ResLink>
      </Card>
      <Card title="Contact">
        <p className="page-p">
          Questions? Contact <a href="mailto:abbejanemarten@gmail.com" className="inline-link">Abbe M</a> or{' '}
          <a href="mailto:gboehle60@gmail.com" className="inline-link">Gary B</a>.
        </p>
      </Card>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  PAGE: CPC
// ══════════════════════════════════════════════════════════════
function CPCPage() {
  return (
    <div className="page">
      <h1 className="page-h1">Cooperation with the Professional Community</h1>
      <Card>
        <p className="page-p">
          The purpose of this committee is to provide information about A.A. to those who have contact with alcoholics
          through their profession — including healthcare, EAP and HR professionals; educators; faith leaders; lawyers;
          social workers; military professionals; government officials; and those working in the field of alcoholism.
        </p>
        <p className="page-p">
          Information is provided about where we are, what we are, what we can do, and what we cannot do.
        </p>
      </Card>
      <Card title="Resources">
        <ResLink href="https://drive.google.com/file/d/10RrjuIR49FSIP-xaXV7DoIarp_r91tTI/view">Contents of the C.P.C. Kit (Google Drive)</ResLink>
        <ResLink href="https://drive.google.com/file/d/1hMOm-53bp5xQo00d_KolYAFqzyIVgABB/view">A.A. Guidelines on Cooperation with the Professional Community (Google Drive)</ResLink>
        <ResLink href="https://drive.google.com/file/d/1p4fiduAlXzC4KyMZxzX9sRWBGj5FXov5/view">CPC Workbook (Google Drive)</ResLink>
        <ResLink href="https://www.aa.org/sites/default/files/newsletters/f-13_fall2024.pdf">Fall Newsletter for Professionals – AA.org</ResLink>
      </Card>
      <Card title="Contact">
        <p className="page-p">Questions? Contact <a href="mailto:tomkopka@wi.rr.com" className="inline-link">Tom K</a>.</p>
      </Card>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  PAGE: GRAPEVINE
// ══════════════════════════════════════════════════════════════
function GrapevinePage() {
  return (
    <div className="page">
      <h1 className="page-h1">District 24 Grapevine</h1>
      <Card title="Grapevine / La Viña Rep &amp; Committee Purpose">
        <BulletList items={[
          'Ensure that every group that wants one or many subscriptions knows how to subscribe',
          'Encourage that the magazine is clearly displayed and available for purchase at meetings',
          'Inform groups when the latest issue is available',
          'Suggest ways in which Grapevine / La Viña can be used for 12th step activities',
          'Encourage participation in Grapevine: articles, letters, anecdotes, jokes, stories, etc.',
          'Assist in starting Grapevine meetings if interest is there',
          'Be a conduit of information from Area 75 Grapevine meetings (currently quarterly)',
        ]} />
      </Card>
      <Card title="Contact">
        <p className="page-p">Please contact <a href="mailto:rehackettiii@me.com" className="inline-link">Bob H</a> with any questions.</p>
      </Card>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  PAGE: PUBLIC INFORMATION
// ══════════════════════════════════════════════════════════════
function PublicInfoPage() {
  return (
    <div className="page">
      <h1 className="page-h1">Public Information</h1>
      <Card title="Purpose">
        <p className="page-p">
          Like all of A.A., the primary purpose of members involved with Public Information service is to carry the A.A.
          message to the alcoholic who still suffers. Working together, members of local Public Information committees
          convey A.A. information to the general public, including the media.
        </p>
      </Card>
      <Card title="Committee Focus">
        <BulletList items={[
          'Giving presentations about A.A. to schools and organizations',
          'Providing information about A.A. through digital and print materials',
          'Ensuring local media have accurate information about A.A. through PSAs, anonymity-protected interviews, and press kits',
        ]} />
      </Card>
      <Card title="Contact">
        <p className="page-p">Questions? Contact <a href="mailto:j94830412@gmail.com" className="inline-link">Jess G</a>.</p>
      </Card>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  PAGE: RESOURCES – AA
// ══════════════════════════════════════════════════════════════
function ResourcesAAPage() {
  return (
    <div className="page">
      <h1 className="page-h1">AA Resources</h1>
      <Card title="Online Resources">
        <ResLink href="https://www.aa.org/">Alcoholics Anonymous – AA.org</ResLink>
        <ResLink href="https://www.aamilwaukee.com/">Milwaukee Central Office – Home</ResLink>
        <ResLink href="https://www.aamilwaukee.com/index.php?page=about-us">Milwaukee Central Office – Resources</ResLink>
      </Card>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  PAGE: RESOURCES – DISTRICT 24
// ══════════════════════════════════════════════════════════════
function ResourcesD24Page() {
  return (
    <div className="page">
      <h1 className="page-h1">District 24 Resources</h1>
      <Card title="District 24 Online Resources">
        <ResLink href="https://tinyurl.com/district24docs">District 24 Documents (Google Drive)</ResLink>
        <ResLink href="https://drive.google.com/drive/folders/1AY_Yx6gEOWYR2nmHVcpAks9xEWmKbYJ-">District 24 Meetings Archive (Google Drive)</ResLink>
        <ResLink href="https://drive.google.com/drive/folders/1SevBXNK5q_eK8Qj_6eAGnzIzx4dHsOqg">Literature Archive (Google Drive)</ResLink>
      </Card>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  PAGE: TREASURY
// ══════════════════════════════════════════════════════════════
function TreasuryPage() {
  return (
    <div className="page">
      <h1 className="page-h1">District 24 Treasury</h1>
      <Card>
        <p className="page-p">
          <strong>Allison D.</strong> is the current Treasurer for District 24. Allison accepts Venmo payments on behalf
          of the District — please email for her Venmo account information.
        </p>
        <p className="page-p">
          Email: <a href="mailto:adozark@gmail.com" className="inline-link">adozark@gmail.com</a>
        </p>
      </Card>
      <Card title="Mailing Address">
        <address className="address-block">
          District 24<br />
          PO Box 72021<br />
          Cedarburg, WI 53012
        </address>
      </Card>
      <Card title="Resources">
        <ResLink href="https://tinyurl.com/district24docs">Monthly Treasury Reports (meeting folders on Google Drive)</ResLink>
      </Card>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  PAGE: WORKSHOPS
// ══════════════════════════════════════════════════════════════
function WorkshopsPage() {
  return (
    <div className="page">
      <h1 className="page-h1">District 24 Workshops</h1>
      <Card>
        <div className="table-wrap">
          <table className="data-table">
            <thead><tr><th className="th-narrow">Year</th><th>Workshop(s)</th></tr></thead>
            <tbody>
              {WORKSHOPS.map((w, i) => (
                <tr key={i} className={i % 2 === 0 ? 'stripe' : 'white'}>
                  <td><strong className="text-navy">{w.year}</strong></td>
                  <td>{w.link ? <ExtLink href={w.link}>{w.text}</ExtLink> : w.text}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      <Card>
        <p className="page-p italic">Do you have a suggestion for a future workshop topic?</p>
        <p className="page-p">Send an email to <a href="mailto:info@aadistrict24.org" className="inline-link">info@aadistrict24.org</a>.</p>
      </Card>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  PAGE: ALL GROUPS
// ══════════════════════════════════════════════════════════════
function AllGroupsPage() {
  const [filter, setFilter] = React.useState('All');
  const [search, setSearch] = React.useState('');

  const isOnline = m => m.codes && m.codes.includes('WB');

  const activeDays = DAYS_ORDER.filter(d => d === 'All' || d === 'Online Available' || ALL_MEETINGS.some(m => m.day === d));

  const visible = ALL_MEETINGS.filter(m => {
    const matchDay  = filter === 'All' || (filter === 'Online Available' ? isOnline(m) : m.day === filter);
    const q = search.toLowerCase();
    const locStr = [m.location, m.street, m.city, m.state].filter(Boolean).join(' ');
    const matchSrch = q === '' || m.name.toLowerCase().includes(q) || locStr.toLowerCase().includes(q);
    return matchDay && matchSrch;
  });

  function fmtLocation(m) {
    const name = m.location;
    const addr = [m.street, [m.city, m.state].filter(Boolean).join(' '), m.zip].filter(Boolean).join(', ');
    return [name, addr].filter(Boolean).join(' · ');
  }

  function fmtZoom(m) {
    if (!m.zoom_id) return null;
    return 'ID: ' + m.zoom_id + (m.zoom_passcode ? ' · Passcode: ' + m.zoom_passcode : '');
  }

  function renderCodeBadges(m) {
    if (!m.codes || !m.codes.length) return null;
    const labels = m.codes.map(c => {
      const mc = MEETING_CODES.find(x => x.Value === c);
      return mc ? mc.Label : c;
    });
    const lines = [];
    for (let i = 0; i < labels.length; i += 2) lines.push(labels.slice(i, i + 2));
    return lines.map((pair, li) => (
      <React.Fragment key={li}>
        <br />
        {pair.map((label, j) => <span key={j} className="badge badge--online">{label}</span>)}
      </React.Fragment>
    ));
  }

  return (
    <div className="page">
      <h1 className="page-h1">All Groups in District 24</h1>
      <div className="filter-bar">
        <input
          className="filter-search"
          type="text"
          placeholder="Search by group name or location…"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div className="filter-tags">
          {activeDays.map(d => (
            <button key={d} className={`filter-tag${filter === d ? ' active' : ''}`} onClick={() => setFilter(d)}>{d}</button>
          ))}
        </div>
      </div>
      <p className="meetings-count">Showing {visible.length} of {ALL_MEETINGS.length} meetings</p>
      <div className="meetings-list">
        {visible.map((m, i) => (
          <div key={i} className="meeting-card">
            <div className="meeting-card__body">
              <div className="meeting-card__name">{m.name}</div>
              <div className="meeting-card__loc">{fmtLocation(m)}</div>
              {m.notes && <div className="meeting-card__note">{m.notes}</div>}
              {fmtZoom(m) && <div className="meeting-card__zoom">📹 {fmtZoom(m)}</div>}
              {m.zoom_url && <div className="meeting-card__zoom-url">{m.zoom_url}</div>}
            </div>
            <div className="meeting-card__meta">
              <span className="badge">{m.day}</span>
              <span className="badge badge--light">{m.time}</span>
              {renderCodeBadges(m)}
              {m.id && <div className="meeting-card__id">ID: {m.id}</div>}
            </div>
          </div>
        ))}
        {visible.length === 0 && <div className="meetings-empty">No meetings match your search.</div>}
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  PAGE: 164 AND MORE
// ══════════════════════════════════════════════════════════════
function Group164Page() {
  return (
    <div className="page">
      <h1 className="page-h1">164 and More</h1>
      <div className="three-col">
        <Card title="📅 When"><p className="page-p semibold">Thursdays at 6:30 PM</p></Card>
        <Card title="📍 Location">
          <address className="address-block">Peltz Center for Jewish Life<br />2233 W Mequon Rd<br />Mequon, WI 53092</address>
        </Card>
        <Card title="📹 Zoom">
          <ExtLink href="https://us06web.zoom.us/j/81933497892?pwd=3ZZT47GwJ19LENZUSnbeKW365Q9QYn.1">Join Zoom Meeting</ExtLink>
          <p className="page-p text-sm mt-sm">ID: 819 3349 7892 · Passcode: District24</p>
        </Card>
      </div>
      <Card title="Notes">
        <p className="page-p">Topic Meeting · Handicap Access · Group ID: 000090603</p>
        <p className="page-p">
          Allison D. is the Group's Treasurer and accepts contributions via Venmo. Email{' '}
          <a href="mailto:adozark@gmail.com" className="inline-link">adozark@gmail.com</a> for her Venmo info — note
          "Thursday 164" in the memo field.
        </p>
      </Card>
      <Card title="Upcoming Leads">
        <div className="table-wrap">
          <table className="data-table">
            <thead><tr><th>Date</th><th>Speaker</th></tr></thead>
            <tbody>
              {LEADS_164.filter(([d]) => isUpcomingLead(d)).map(([d, s], i) => (
                <tr key={i} className={i % 2 === 0 ? 'stripe' : 'white'}>
                  <td><strong>{d}</strong></td><td>{s}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="table-note">* OOA = Out of area speaker</p>
      </Card>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  PAGE: SATURDAY STEP MEETING
// ══════════════════════════════════════════════════════════════
function SaturdayStepPage() {
  return (
    <div className="page">
      <h1 className="page-h1">Saturday Step Meeting</h1>
      <div className="three-col">
        <Card title="📅 When"><p className="page-p semibold">Saturdays at 8:30 AM</p></Card>
        <Card title="📍 Location">
          <address className="address-block">Lumen Christi Catholic Church<br />2750 W Mequon Rd<br />Mequon, WI 53092</address>
        </Card>
        <Card title="📹 Zoom">
          <ExtLink href="https://us06web.zoom.us/j/86423007839?pwd=TzaGeBalHhPlfb96RfkDQ0dpW70ERG.1">Join Zoom Meeting</ExtLink>
          <p className="page-p text-sm mt-sm">ID: 864 2300 7839 · Passcode: District24</p>
        </Card>
      </div>
      <Card title="Notes">
        <p className="page-p">Step Meeting · Handicap Access · Group ID: 000316274</p>
      </Card>
      <Card title="Upcoming Leads">
        <div className="table-wrap">
          <table className="data-table">
            <thead><tr><th>Date</th><th>Speaker</th><th>Topic</th></tr></thead>
            <tbody>
              {LEADS_SATURDAY_STEP.filter(([d]) => isUpcomingLead(d)).map(([d, s, t], i) => (
                <tr key={i} className={i % 2 === 0 ? 'stripe' : 'white'}>
                  <td><strong>{d}</strong></td><td>{s}</td><td className="italic text-muted">{t}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  PAGE: WOMEN'S BIG BOOK MEETING
// ══════════════════════════════════════════════════════════════
function WomensBigBookPage() {
  return (
    <div className="page">
      <h1 className="page-h1">Women's Big Book Meeting</h1>
      <div className="three-col">
        <Card title="📅 When"><p className="page-p semibold">Mondays at 6:00 PM</p></Card>
        <Card title="📍 Location">
          <address className="address-block">Christ Church<br />13460 N Port Washington Rd<br />Mequon, WI 53097</address>
        </Card>
        <Card title="📹 Zoom">
          <ExtLink href="https://us06web.zoom.us/j/81035607580?pwd=vwUr5wbDbbDQgXbLYFb9dSwOlShbUp.1">Join Zoom Meeting</ExtLink>
          <p className="page-p text-sm mt-sm">ID: 810 3560 7580 · Passcode: District24</p>
        </Card>
      </div>
      <Card title="About This Meeting">
        <p className="page-p">
          Join us for a supportive Women's Big Book Study, where we read and discuss the Big Book of Alcoholics Anonymous,
          from the Preface through Dr. Bob's Nightmare. Each week, we read a few pages as our lead and share insights — no
          break-out groups, just open discussion. Quarterly speaker meetings.
        </p>
        <p className="page-p">
          Connect with women in recovery and deepen your understanding of the program. <strong>All are welcome!</strong>
        </p>
        <p className="page-p text-sm text-muted">Women's Meeting · Handicap Access · Group ID: 000035432</p>
      </Card>
      <Card title="Upcoming Quarterly Speakers">
        {SPEAKERS_WOMENS_BIG_BOOK.filter(s => {
          var today = new Date(); today.setHours(0, 0, 0, 0);
          var d = new Date(s.date + ' 1'); // "September 2026 1" → first of month
          return d >= today;
        }).map((s, i) => (
          <p key={i} className="page-p">
            <strong>{s.date}</strong> – {s.type} – {s.speaker}
          </p>
        ))}
      </Card>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  HASH-BASED ROUTER
// ══════════════════════════════════════════════════════════════
function useHash() {
  const [hash, setHash] = React.useState(window.location.hash || '#/');
  React.useEffect(() => {
    const fn = () => setHash(window.location.hash || '#/');
    window.addEventListener('hashchange', fn);
    return () => window.removeEventListener('hashchange', fn);
  }, []);
  return hash;
}

const ROUTES = {
  '#/':                      HomePage,
  '#/accessibilities':       AccessibilitiesPage,
  '#/calendar':              CalendarPage,
  '#/corrections':           CorrectionsPage,
  '#/cpc':                   CPCPage,
  '#/grapevine':             GrapevinePage,
  '#/public-information':    PublicInfoPage,
  '#/resources-aa':          ResourcesAAPage,
  '#/resources-d24':         ResourcesD24Page,
  '#/treasury':              TreasuryPage,
  '#/workshops':             WorkshopsPage,
  '#/groups':                AllGroupsPage,
  '#/group-164':             Group164Page,
  '#/group-saturday-step':   SaturdayStepPage,
  '#/group-womens-big-book': WomensBigBookPage,
};

// ══════════════════════════════════════════════════════════════
//  APP ROOT
// ══════════════════════════════════════════════════════════════
function App() {
  const hash = useHash();
  React.useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [hash]);

  const Page = ROUTES[hash] || HomePage;
  return (
    <div id="app">
      <Navbar currentHash={hash} />
      <main><Page /></main>
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
