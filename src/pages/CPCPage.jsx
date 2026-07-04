import { Card } from '../components/Card.jsx';
import { ResLink } from '../components/ResLink.jsx';

export function CPCPage() {
  return (
    <div className="page">
      <h1 className="page-h1">Cooperation with the Professional Community</h1>
      <Card>
        <p className="page-p">
          The purpose of this committee is to provide information about A.A. to those who have contact with alcoholics
          through their profession — including healthcare, EAP and HR professionals; educators; faith leaders; lawyers;
          social workers; military professionals; government officials; and those working in the field of alcoholism.
        </p>
        <p className="page-p">
          Information is provided about where we are, what we are, what we can do, and what we cannot do.
        </p>
      </Card>
      <Card title="Resources">
        <ResLink href="https://drive.google.com/file/d/10RrjuIR49FSIP-xaXV7DoIarp_r91tTI/view">Contents of the C.P.C. Kit (Google Drive)</ResLink>
        <ResLink href="https://drive.google.com/file/d/1hMOm-53bp5xQo00d_KolYAFqzyIVgABB/view">A.A. Guidelines on Cooperation with the Professional Community (Google Drive)</ResLink>
        <ResLink href="https://drive.google.com/file/d/1p4fiduAlXzC4KyMZxzX9sRWBGj5FXov5/view">CPC Workbook (Google Drive)</ResLink>
        <ResLink href="https://www.aa.org/sites/default/files/newsletters/f-13_fall2024.pdf">Fall Newsletter for Professionals – AA.org</ResLink>
      </Card>
      <Card title="Contact">
        <p className="page-p">Questions? Contact <a href="mailto:tomkopka@wi.rr.com" className="inline-link">Tom K</a>.</p>
      </Card>
    </div>
  );
}
