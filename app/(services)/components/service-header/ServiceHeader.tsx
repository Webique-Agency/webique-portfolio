import React from 'react';
import "./ServiceHeader.styles.scss";

export default function ServiceHeader({serviceName, serviceDescription}: {
    serviceName: string,
    serviceDescription: string
}) {
    const parts = serviceName.split(" ");

    if (parts.length === 0) return null;

    return (
        <div className="service-header-wrapper">
            <div className="h1-wrapper">
                <h1 className="service-name"><span className={"primary-accent"}>{parts[0]}</span> {parts.slice(1).join("")}</h1>
                <h1>Plans and Pricing</h1>
            </div>
            <p className="light-text max-w-xl">{serviceDescription}</p>
        </div>
    );
}
