export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <div className="footer__col-title">AA District 24</div>
          <div>Ozaukee County · Area 75 (Southern Wisconsin)</div>
          <div className="mt-sm">
            Email: <a href="mailto:info@aadistrict24.org" className="footer__link d-inline">info@aadistrict24.org</a>
          </div>
        </div>
        <div>
          <div className="footer__col-head">Monthly District Meetings</div>
          <div>3rd Tuesday of each month (except December)</div>
          <div>6:30 PM · Grace 242 Church</div>
          <div>249 Main St, Thiensville WI 53092</div>
        </div>
        <div>
          <div className="footer__col-head">Links</div>
          <a href="https://www.aa.org" target="_blank" rel="noopener noreferrer" className="footer__link">AA.org</a>
          <a href="https://www.aamilwaukee.com" target="_blank" rel="noopener noreferrer" className="footer__link">Milwaukee Central Office</a>
          <a href="https://mtg.area75.org" target="_blank" rel="noopener noreferrer" className="footer__link">Area 75</a>
        </div>
      </div>
      <div className="footer__bottom">AA District 24 · Ozaukee County · Area 75 Southern Wisconsin</div>
    </footer>
  );
}
