export function ExtLink({ href, children }) {
  return <a className="inline-link" href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
}
