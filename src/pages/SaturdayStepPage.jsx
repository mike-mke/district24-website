import { Card } from '../components/Card.jsx';
import { ExtLink } from '../components/ExtLink.jsx';
import { LEADS_SATURDAY_STEP_CSV_URL } from '../data.js';
import { formatShortDate, daysAgo } from '../utils/dates.js';
import { parseCsv } from '../utils/csv.js';

const MAX_AGE_DAYS = 8;

export function SaturdayStepPage() {
  const [leads, setLeads] = React.useState([]);

  React.useEffect(() => {
    fetch(LEADS_SATURDAY_STEP_CSV_URL)
      .then(res => res.text())
      .then(text => {
        const rows = parseCsv(text)
          .map(r => ({ date: new Date(r.Date), speaker: r.Speaker, topic: r.Topic }))
          .filter(r => !isNaN(r.date) && daysAgo(r.date) <= MAX_AGE_DAYS)
          .sort((a, b) => a.date - b.date);
        setLeads(rows);
      })
      .catch(() => setLeads([]));
  }, []);

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
              {leads.map((l, i) => (
                <tr key={i} className={i % 2 === 0 ? 'stripe' : 'white'}>
                  <td><strong>{formatShortDate(l.date)}</strong></td><td>{l.speaker}</td><td className="italic text-muted">{l.topic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
