import { Card } from '../components/Card.jsx';
import { ExtLink } from '../components/ExtLink.jsx';
import { MAX_AGE_DAYS } from '../data.js';
import { MONDAY_WOMENS_BIG_BOOK_URL } from '../data.js';
import { MONTH_NAMES, daysAgo } from '../utils/dates.js';
import { parseCsv } from '../utils/csv.js';

export function WomensBigBookPage() {
  const [speakers, setSpeakers] = React.useState([]);

  React.useEffect(() => {
    fetch(MONDAY_WOMENS_BIG_BOOK_URL)
      .then(res => res.text())
      .then(text => {
        const rows = parseCsv(text)
          .map(r => {
            const date = new Date(r.Date);
            const exact = /^true$/i.test(r.ExactDate);
            return {
              date,
              description: r.Description,
              label: exact ? `${MONTH_NAMES[date.getMonth()]} ${date.getDate()}` : MONTH_NAMES[date.getMonth()],
            };
          })
          .filter(r => !isNaN(r.date) && daysAgo(r.date) <= MAX_AGE_DAYS)
          .sort((a, b) => a.date - b.date);
        setSpeakers(rows);
      })
      .catch(() => setSpeakers([]));
  }, []);

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
        <div className="table-wrap">
          <table className="data-table">
            <thead><tr><th>Date</th><th>Description</th></tr></thead>
            <tbody>
              {speakers.map((s, i) => (
                <tr key={i} className={i % 2 === 0 ? 'stripe' : 'white'}>
                  <td><strong>{s.label}</strong></td><td>{s.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
