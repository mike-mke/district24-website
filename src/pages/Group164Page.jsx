import { Card } from '../components/Card.jsx';
import { ExtLink } from '../components/ExtLink.jsx';
import { LEADS_164 } from '../data.js';
import { isUpcomingLead } from '../utils/dates.js';

export function Group164Page() {
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
