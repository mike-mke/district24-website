import { Card } from '../components/Card.jsx';
import { BulletList } from '../components/BulletList.jsx';
import { ResLink } from '../components/ResLink.jsx';

export function CorrectionsPage() {
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
