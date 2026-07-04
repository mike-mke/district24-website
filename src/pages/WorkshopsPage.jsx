import { Card } from '../components/Card.jsx';
import { ExtLink } from '../components/ExtLink.jsx';
import { WORKSHOPS } from '../data.js';

export function WorkshopsPage() {
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
