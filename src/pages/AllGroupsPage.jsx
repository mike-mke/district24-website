import { ALL_MEETINGS, DAYS_ORDER, MEETING_CODES } from '../data.js';

export function AllGroupsPage() {
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
