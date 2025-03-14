import React from 'react';

function SectionHeader({title}: { title: string }) {
    return (
        <div className="generic-section-header">
            <h3>{title}</h3>
            <div className="line"></div>
        </div>
    );
}

export default SectionHeader;
