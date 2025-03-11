import React from 'react';
import "./SuccessSection.style.scss";

export default function SuccessSection() {
    return (
        <section>
            <div className="generic-section-header">
                <h3>PROVEN SUCCESS</h3>
                <div className="line"></div>
            </div>

            <div className="success-description-wrapper">
                <h6 className="light-text">
                    Our team is a dynamic group of passionate and experienced professionals dedicated to delivering
                    high-quality web solutions. From creative designers to skilled developers, each member brings a
                    unique set of skills to the table. Together, we specialize in building custom websites and digital
                    experiences that help businesses grow, engage customers, and achieve their goals.
                </h6>

                <div className="success-cards">
                    <div className="stat-card">
                        <h4 className="primary-color">100+</h4>
                        <h6>Successful projects</h6>
                    </div>
                    <div className="stat-card">
                        <h4 className="primary-color">3+YEARS</h4>
                        <h6>Experience</h6>
                    </div>
                    <div className="stat-card">
                        <h4 className="primary-color">85%+</h4>
                        <h6>Client retention rate</h6>
                    </div>
                    <div className="stat-card">
                        <h4 className="primary-color">30%+</h4>
                        <h6>Conversion rate increase</h6>
                    </div>
                </div>
            </div>
        </section>
    );
}
