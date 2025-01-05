import React from 'react';

const Contact = () => {
    return (
        <div className='contact py-5' style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <h2>Contact Us</h2>
            <form>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" style={{ width: '100%', padding: '8px' }} />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" style={{ width: '100%', padding: '8px' }} />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" style={{ width: '100%', padding: '8px' }}></textarea>
                </div>
                <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', cursor: 'pointer' }}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;