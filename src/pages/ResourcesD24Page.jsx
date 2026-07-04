import { Card } from '../components/Card.jsx';
import { ResLink } from '../components/ResLink.jsx';

export function ResourcesD24Page() {
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
