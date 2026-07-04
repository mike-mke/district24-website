import { Card } from '../components/Card.jsx';
import { ResLink } from '../components/ResLink.jsx';

export function ResourcesAAPage() {
  return (
    <div className="page">
      <h1 className="page-h1">AA Resources</h1>
      <Card title="Online Resources">
        <ResLink href="https://www.aa.org/">Alcoholics Anonymous – AA.org</ResLink>
        <ResLink href="https://www.aamilwaukee.com/">Milwaukee Central Office – Home</ResLink>
        <ResLink href="https://www.aamilwaukee.com/index.php?page=about-us">Milwaukee Central Office – Resources</ResLink>
      </Card>
    </div>
  );
}
