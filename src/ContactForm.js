import { useState } from 'react';

export default function ContactForm() {
    const [buttonText, setButtonText] = useState('Send Email');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async () => {
        if (!formData.user_name || !formData.user_email ||!formData.subject || !formData.message) {
            alert('Please fill in all fields');
            return;
        }

        setIsSubmitting(true);
        setButtonText('Sending...');

        const serviceID = process.env.REACT_APP_SERVICE_ID;
        const templateID = process.env.REACT_APP_TEMPLATE_ID;



        try {
            // Load EmailJS if not already loaded
            if (!window.emailjs) {
                const script = document.createElement('script');
                script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
                script.onload = () => window.emailjs.init('eW8RwHuCTc4X_iHDJ');
                document.head.appendChild(script);
                await new Promise(resolve => setTimeout(resolve, 1000));
            }

            await window.emailjs.send(serviceID, templateID, formData);
            setButtonText('Send Email');
            alert('Sent!');
            setFormData({ user_name: '', user_email: '', subject: '', message: '' });
        } catch (err) {
            setButtonText('Send Email');
            alert(JSON.stringify(err));
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div style={{
            maxWidth: '500px',
            margin: '50px auto',
            padding: '30px',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
            <h2 style={{
                marginBottom: '20px',
                color: '#333',
                textAlign: 'center'
            }}>Contact Us</h2>

            <div id ="contact" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div>
                    <label style={{ display: 'block', marginBottom: '5px', color: '#555', fontWeight: '500' }}>
                        Name
                    </label>
                    <input
                        type="text"
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            fontSize: '14px',
                            boxSizing: 'border-box'
                        }}
                    />
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '5px', color: '#555', fontWeight: '500' }}>
                        Email
                    </label>
                    <input
                        type="email"
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            fontSize: '14px',
                            boxSizing: 'border-box'
                        }}
                    />
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '5px', color: '#555', fontWeight: '500' }}>
                        Subject
                    </label>
                    <input

                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            fontSize: '14px',
                            boxSizing: 'border-box'
                        }}
                    />
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '5px', color: '#555', fontWeight: '500' }}>
                        Message
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            fontSize: '14px',
                            resize: 'vertical',
                            fontFamily: 'inherit',
                            boxSizing: 'border-box'
                        }}
                    />
                </div>

                <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    style={{
                        padding: '12px 24px',
                        backgroundColor: isSubmitting ? '#ccc' : '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        fontSize: '16px',
                        fontWeight: '500',
                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                        transition: 'background-color 0.3s',
                        marginTop: '10px'
                    }}
                    onMouseEnter={(e) => {
                        if (!isSubmitting) e.target.style.backgroundColor = '#0056b3';
                    }}
                    onMouseLeave={(e) => {
                        if (!isSubmitting) e.target.style.backgroundColor = '#007bff';
                    }}
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
}

