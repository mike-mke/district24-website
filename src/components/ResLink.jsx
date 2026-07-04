export function ResLink({ href, children }) {
  return (
    <div className="resource-link">
      <span className="resource-link__arrow">→</span>
      <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
    </div>
  );
}
