import React from 'react';


const Services = () => {
    return (
        <div className="services py-5" style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <h1>Our Services</h1>
            <div className="service-list">
                <div className="service-item">
                    <h2>Service 1</h2>
                    <p>Description of Service 1.</p>
                </div>
                <div className="service-item">
                    <h2>Service 2</h2>
                    <p>Description of Service 2.</p>
                </div>
                <div className="service-item">
                    <h2>Service 3</h2>
                    <p>Description of Service 3.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;