import { Card } from '../components/Card.jsx';
import { BulletList } from '../components/BulletList.jsx';
import { ResLink } from '../components/ResLink.jsx';

export function AccessibilitiesPage() {
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
