import { Card } from '../components/Card.jsx';
import { ExtLink } from '../components/ExtLink.jsx';
import { SPEAKERS_WOMENS_BIG_BOOK } from '../data.js';

export function WomensBigBookPage() {
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
