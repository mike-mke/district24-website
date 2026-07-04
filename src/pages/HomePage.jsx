import { Card } from '../components/Card.jsx';
import { ExtLink } from '../components/ExtLink.jsx';
import { UPCOMING_EVENTS, SERVICE_POSITIONS } from '../data.js';
import { formatEventDate } from '../utils/dates.js';

export function HomePage() {
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
