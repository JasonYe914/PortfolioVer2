import './SideBar.css';

export default function SideBar({ node, onClose }) {
    return (
        <div className={`sidebar ${node ? 'open' : ''}`}>
            {node && (
                <>
                    <button className="sidebar-close" onClick={onClose}>✕</button>

                    <h2 className="sidebar-title">{node.title}</h2>
                    <p className="sidebar-skills-label">Description</p>
                    <p className="sidebar-desc">{node.desc}</p>

                    {node.skills && node.skills.length > 0 && (
                        <div className="sidebar-skills">
                            <p className="sidebar-skills-label">Skills</p>
                            <div className="sidebar-skills-list">
                                {node.skills.map((skill) => (
                                    <span
                                        key={skill.name}
                                        className="sidebar-skill-badge"
                                        style={{
                                            backgroundColor: skill.color,
                                            color: skill.text,
                                            border: skill.color === '#f0f0f0' ? '1px solid #ddd' : 'none',
                                        }}
                                    >
                    {skill.name}
                  </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {node.image && (
                        <img src={node.image} alt={node.title} className="sidebar-image" />
                    )}
                </>
            )}
        </div>
    );
}