// ══════════════════════════════════════════════════════════════
//  DATE UTILITIES
// ══════════════════════════════════════════════════════════════
export const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];

// Parses a date string that may be ISO ("2026-08-13") or the M/D/YYYY
// format Google Sheets CSV exports use ("8/13/2026"). ISO date-only
// strings need a local-midnight anchor or they parse as UTC and can
// display as the previous day; M/D/YYYY already parses as local time.
export function parseEventDate(dateStr) {
  if (!dateStr) return new Date(NaN);
  var s = String(dateStr).trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(s)) return new Date(s + 'T00:00:00');
  return new Date(s);
}

export function formatEventDate(dateStr, endDateStr) {
  var d = parseEventDate(dateStr);
  if (isNaN(d)) return '';
  var label = MONTH_NAMES[d.getMonth()] + ' ' + String(d.getDate()).padStart(2, '0');
  if (!endDateStr) return label;
  var e = parseEventDate(endDateStr);
  if (isNaN(e)) return label;
  if (e.getFullYear() === d.getFullYear() && e.getMonth() === d.getMonth()) {
    return MONTH_NAMES[d.getMonth()] + ' ' + String(d.getDate()).padStart(2, '0') + '-' + String(e.getDate()).padStart(2, '0');
  }
  return label + ' - ' + MONTH_NAMES[e.getMonth()] + ' ' + String(e.getDate()).padStart(2, '0');
}

// Parse "Month DD" (no year) lead date strings, assuming current year.
// If the result is >6 months in the past it wraps to next year.
export function parseLeadDate(dateStr) {
  var now = new Date();
  var d = new Date(dateStr + ' ' + now.getFullYear());
  if (now - d > 180 * 24 * 60 * 60 * 1000) d.setFullYear(d.getFullYear() + 1);
  return d;
}

export function isUpcomingLead(dateStr) {
  var today = new Date(); today.setHours(0, 0, 0, 0);
  return parseLeadDate(dateStr) >= today;
}

// Whole days between today and a given Date (positive = date is in the past).
export function daysAgo(date) {
  var today = new Date(); today.setHours(0, 0, 0, 0);
  var d = new Date(date); d.setHours(0, 0, 0, 0);
  return Math.round((today - d) / (24 * 60 * 60 * 1000));
}

// Format a Date object as "Month DD" (no year), e.g. "July 18".
export function formatShortDate(date) {
  return MONTH_NAMES[date.getMonth()] + ' ' + String(date.getDate()).padStart(2, '0');
}
