export default function EmptyState({ title = 'No records found', text = 'There is nothing to display yet.' }) { return <div className="empty-state"><div className="empty-icon">○</div><h3>{title}</h3><p>{text}</p></div>; }

