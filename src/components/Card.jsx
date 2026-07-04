export function Card({ title, className = '', children }) {
  return (
    <div className={`card ${className}`}>
      {title && <h2 className="card__h2">{title}</h2>}
      {children}
    </div>
  );
}
