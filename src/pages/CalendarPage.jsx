import { Card } from '../components/Card.jsx';
import { ResLink } from '../components/ResLink.jsx';

export function CalendarPage() {
  return (
    <div className="page">
      <h1 className="page-h1">District 24 Calendar</h1>
      <Card>
        <p className="page-p">The District 24 calendar is hosted on Google Calendar.</p>
        <ResLink href="https://calendar.google.com/calendar/embed?src=hs1unk51oc51iqdds41s5vva58%40group.calendar.google.com&ctz=America%2FChicago">
          Open District 24 Calendar in a new tab
        </ResLink>
      </Card>
      <div className="calendar-wrap">
        <iframe
          className="calendar-frame"
          src="https://calendar.google.com/calendar/embed?src=hs1unk51oc51iqdds41s5vva58%40group.calendar.google.com&ctz=America%2FChicago"
          title="District 24 Google Calendar"
        />
      </div>
    </div>
  );
}
