import { useState } from 'react';

export default function ContactForm() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {


        const mailtoLink = `mailto:${'pvherrerabooking@gmail.com'}`;

        window.location.href = mailtoLink;
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setStatus('error');
            return;
        }

        setStatus('sending');

        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });

            setTimeout(() => setStatus(''), 3000);
        }, 1000);
    };

    const containerStyle = {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '40px 20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    };

    const formStyle = {
        background: '#ffffff',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    };

    const titleStyle = {
        fontSize: '28px',
        fontWeight: '700',
        color: '#1a1a1a',
        marginBottom: '8px',
        textAlign: 'center'
    };

    const subtitleStyle = {
        fontSize: '16px',
        color: '#666',
        marginBottom: '32px',
        textAlign: 'center'
    };

    const labelStyle = {
        display: 'block',
        fontSize: '14px',
        fontWeight: '600',
        color: '#333',
        marginBottom: '8px'
    };

    const inputStyle = {
        width: '100%',
        padding: '12px 16px',
        fontSize: '16px',
        border: '2px solid #e0e0e0',
        borderRadius: '8px',
        outline: 'none',
        transition: 'border-color 0.3s',
        boxSizing: 'border-box'
    };

    const textareaStyle = {
        ...inputStyle,
        minHeight: '150px',
        resize: 'vertical',
        fontFamily: 'inherit'
    };

    const fieldStyle = {
        marginBottom: '24px'
    };

    const buttonStyle = {
        width: '100%',
        padding: '14px',
        fontSize: '16px',
        fontWeight: '600',
        color: '#fff',
        background: status === 'sending' ? '#999' : '#2563eb',
        border: 'none',
        borderRadius: '8px',
        cursor: status === 'sending' ? 'not-allowed' : 'pointer',
        transition: 'background 0.3s',
        marginTop: '8px'
    };

    const messageStyle = {
        padding: '12px',
        borderRadius: '8px',
        marginTop: '16px',
        textAlign: 'center',
        fontWeight: '500',
        background: status === 'success' ? '#d1fae5' : '#fee2e2',
        color: status === 'success' ? '#065f46' : '#991b1b'
    };

    return (
        <div style={containerStyle}>
            <div style={formStyle}>
                <h1 style={titleStyle}>Get in Touch</h1>
                <p style={subtitleStyle}>We'd love to hear from you. Send us a message!</p>

                <div style={fieldStyle}>
                    <label style={labelStyle} htmlFor="name">Name</label>
                    <input
                        style={inputStyle}
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={(e) => e.target.style.borderColor = '#2563eb'}
                        onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                    />
                </div>

                <div style={fieldStyle}>
                    <label style={labelStyle} htmlFor="email">Email</label>
                    <input
                        style={inputStyle}
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={(e) => e.target.style.borderColor = '#2563eb'}
                        onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                    />
                </div>

                <div style={fieldStyle}>
                    <label style={labelStyle} htmlFor="subject">Subject</label>
                    <input
                        style={inputStyle}
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={(e) => e.target.style.borderColor = '#2563eb'}
                        onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                    />
                </div>

                <div style={fieldStyle}>
                    <label style={labelStyle} htmlFor="message">Message</label>
                    <textarea
                        style={textareaStyle}
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={(e) => e.target.style.borderColor = '#2563eb'}
                        onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                    />
                </div>

                <button
                    type="button"
                    onClick={handleSubmit}
                    style={buttonStyle}
                    disabled={status === 'sending'}
                    onMouseEnter={(e) => {
                        if (status !== 'sending') e.target.style.background = '#1d4ed8';
                    }}
                    onMouseLeave={(e) => {
                        if (status !== 'sending') e.target.style.background = '#2563eb';
                    }}
                >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'success' && (
                    <div style={messageStyle}>
                        Message sent successfully! We'll get back to you soon.
                    </div>
                )}

                {status === 'error' && (
                    <div style={messageStyle}>
                        Please fill in all fields before sending.
                    </div>
                )}
            </div>
        </div>
    );
}