import { Card } from '../components/Card.jsx';
import { BulletList } from '../components/BulletList.jsx';

export function PublicInfoPage() {
  return (
    <div className="page">
      <h1 className="page-h1">Public Information</h1>
      <Card title="Purpose">
        <p className="page-p">
          Like all of A.A., the primary purpose of members involved with Public Information service is to carry the A.A.
          message to the alcoholic who still suffers. Working together, members of local Public Information committees
          convey A.A. information to the general public, including the media.
        </p>
      </Card>
      <Card title="Committee Focus">
        <BulletList items={[
          'Giving presentations about A.A. to schools and organizations',
          'Providing information about A.A. through digital and print materials',
          'Ensuring local media have accurate information about A.A. through PSAs, anonymity-protected interviews, and press kits',
        ]} />
      </Card>
      <Card title="Contact">
        <p className="page-p">Questions? Contact <a href="mailto:j94830412@gmail.com" className="inline-link">Jess G</a>.</p>
      </Card>
    </div>
  );
}
