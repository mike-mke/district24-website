import { Card } from '../components/Card.jsx';
import { ResLink } from '../components/ResLink.jsx';

export function TreasuryPage() {
  return (
    <div className="page">
      <h1 className="page-h1">District 24 Treasury</h1>
      <Card>
        <p className="page-p">
          <strong>Allison D.</strong> is the current Treasurer for District 24. Allison accepts Venmo payments on behalf
          of the District — please email for her Venmo account information.
        </p>
        <p className="page-p">
          Email: <a href="mailto:adozark@gmail.com" className="inline-link">adozark@gmail.com</a>
        </p>
      </Card>
      <Card title="Mailing Address">
        <address className="address-block">
          District 24<br />
          PO Box 72021<br />
          Cedarburg, WI 53012
        </address>
      </Card>
      <Card title="Resources">
        <ResLink href="https://tinyurl.com/district24docs">Monthly Treasury Reports (meeting folders on Google Drive)</ResLink>
      </Card>
    </div>
  );
}
