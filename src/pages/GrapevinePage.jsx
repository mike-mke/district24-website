import { Card } from '../components/Card.jsx';
import { BulletList } from '../components/BulletList.jsx';

export function GrapevinePage() {
  return (
    <div className="page">
      <h1 className="page-h1">District 24 Grapevine</h1>
      <Card title="Grapevine / La Viña Rep &amp; Committee Purpose">
        <BulletList items={[
          'Ensure that every group that wants one or many subscriptions knows how to subscribe',
          'Encourage that the magazine is clearly displayed and available for purchase at meetings',
          'Inform groups when the latest issue is available',
          'Suggest ways in which Grapevine / La Viña can be used for 12th step activities',
          'Encourage participation in Grapevine: articles, letters, anecdotes, jokes, stories, etc.',
          'Assist in starting Grapevine meetings if interest is there',
          'Be a conduit of information from Area 75 Grapevine meetings (currently quarterly)',
        ]} />
      </Card>
      <Card title="Contact">
        <p className="page-p">Please contact <a href="mailto:rehackettiii@me.com" className="inline-link">Bob H</a> with any questions.</p>
      </Card>
    </div>
  );
}
