import { HomePage } from './pages/HomePage.jsx';
import { AccessibilitiesPage } from './pages/AccessibilitiesPage.jsx';
import { CalendarPage } from './pages/CalendarPage.jsx';
import { CorrectionsPage } from './pages/CorrectionsPage.jsx';
import { CPCPage } from './pages/CPCPage.jsx';
import { GrapevinePage } from './pages/GrapevinePage.jsx';
import { PublicInfoPage } from './pages/PublicInfoPage.jsx';
import { ResourcesAAPage } from './pages/ResourcesAAPage.jsx';
import { ResourcesD24Page } from './pages/ResourcesD24Page.jsx';
import { TreasuryPage } from './pages/TreasuryPage.jsx';
import { WorkshopsPage } from './pages/WorkshopsPage.jsx';
import { AllGroupsPage } from './pages/AllGroupsPage.jsx';
import { Group164Page } from './pages/Group164Page.jsx';
import { SaturdayStepPage } from './pages/SaturdayStepPage.jsx';
import { WomensBigBookPage } from './pages/WomensBigBookPage.jsx';

export const ROUTES = {
  '#/':                      HomePage,
  '#/accessibilities':       AccessibilitiesPage,
  '#/calendar':              CalendarPage,
  '#/corrections':           CorrectionsPage,
  '#/cpc':                   CPCPage,
  '#/grapevine':             GrapevinePage,
  '#/public-information':    PublicInfoPage,
  '#/resources-aa':          ResourcesAAPage,
  '#/resources-d24':         ResourcesD24Page,
  '#/treasury':              TreasuryPage,
  '#/workshops':             WorkshopsPage,
  '#/groups':                AllGroupsPage,
  '#/group-164':             Group164Page,
  '#/group-saturday-step':   SaturdayStepPage,
  '#/group-womens-big-book': WomensBigBookPage,
};

export function useHash() {
  const [hash, setHash] = React.useState(window.location.hash || '#/');
  React.useEffect(() => {
    const fn = () => setHash(window.location.hash || '#/');
    window.addEventListener('hashchange', fn);
    return () => window.removeEventListener('hashchange', fn);
  }, []);
  return hash;
}
