import React, { useState } from 'react';
import { Calendar, MapPin, Ticket } from 'lucide-react';

const ConcertDates = () => {
    const [selectedCity, setSelectedCity] = useState('all');

    const concerts = [
        // { id: 1, date: 'Nov 15, 2025', city: 'Los Angeles', venue: 'The Forum'},
        //
    ];

    const cities = ['all', ...new Set(concerts.map(c => c.city))];

    const filteredConcerts = selectedCity === 'all'
        ? concerts
        : concerts.filter(c => c.city === selectedCity);

    const getStatusStyle = (status) => {
        const base = {
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
        };

        if (status === 'available') {
            return { ...base, background: 'rgba(34, 197, 94, 0.2)', color: '#22c55e' };
        } else if (status === 'low') {
            return { ...base, background: 'rgba(251, 146, 60, 0.2)', color: '#fb923c' };
        } else {
            return { ...base, background: 'rgba(239, 68, 68, 0.2)', color: '#ef4444' };
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '60px 20px',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
            }}>
                {/* Header */}
                <div style={{
                    textAlign: 'center',
                    marginBottom: '60px',
                    animation: 'fadeIn 0.8s ease-in',
                }}>
                    <h1 style={{
                        fontSize: '56px',
                        fontWeight: '800',
                        color: 'white',
                        marginBottom: '16px',
                        textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                    }}>
                        Shows in San Luis Obispo/Nipomo/Santa Maria
                    </h1>

                    <h3 style={{  fontSize: '56px',
                        fontWeight: '800',
                        color: 'white',
                        marginBottom: '16px',
                        textShadow: '0 4px 20px rgba(0,0,0,0.3)',}}>For any shows bookings or anything in general email pvherrerabooking@gmail.com</h3>

                </div>

                {/* Filter */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '10px',
                    flexWrap: 'wrap',
                    marginBottom: '40px',
                }}>
                    {cities.map(city => (
                        <button
                            key={city}
                            onClick={() => setSelectedCity(city)}
                            style={{
                                padding: '10px 24px',
                                border: 'none',
                                borderRadius: '25px',
                                background: selectedCity === city ? 'white' : 'rgba(255,255,255,0.2)',
                                color: selectedCity === city ? '#667eea' : 'white',
                                fontSize: '14px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                textTransform: 'capitalize',
                                backdropFilter: 'blur(10px)',
                            }}
                            onMouseOver={(e) => {
                                if (selectedCity !== city) {
                                    e.target.style.background = 'rgba(255,255,255,0.3)';
                                }
                            }}
                            onMouseOut={(e) => {
                                if (selectedCity !== city) {
                                    e.target.style.background = 'rgba(255,255,255,0.2)';
                                }
                            }}
                        >
                            {city}
                        </button>
                    ))}
                </div>

                {/* Concert Cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap: '24px',
                }}>
                    {filteredConcerts.map((concert, index) => (
                        <div
                            key={concert.id}
                            style={{
                                background: 'rgba(255,255,255,0.95)',
                                borderRadius: '20px',
                                padding: '28px',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.3)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.2)';
                            }}
                        >
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                marginBottom: '20px',
                            }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    color: '#667eea',
                                }}>
                                    <Calendar size={20} />
                                    <span style={{
                                        fontSize: '15px',
                                        fontWeight: '600',
                                    }}>
                    {concert.date}
                  </span>
                                </div>
                                <div style={getStatusStyle(concert.status)}>
                                    {concert.status === 'soldout' ? 'Sold Out' :
                                        concert.status === 'low' ? 'Few Left' : 'Available'}
                                </div>
                            </div>

                            <h3 style={{
                                fontSize: '28px',
                                fontWeight: '700',
                                color: '#1a1a1a',
                                marginBottom: '8px',
                            }}>
                                {concert.city}
                            </h3>

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                color: '#666',
                                marginBottom: '20px',
                            }}>
                                <MapPin size={16} />
                                <span style={{ fontSize: '14px' }}>{concert.venue}</span>
                            </div>

                            <button
                                disabled={concert.status === 'soldout'}
                                style={{
                                    width: '100%',
                                    padding: '14px',
                                    border: 'none',
                                    borderRadius: '12px',
                                    background: concert.status === 'soldout'
                                        ? '#e5e5e5'
                                        : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    color: concert.status === 'soldout' ? '#999' : 'white',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    cursor: concert.status === 'soldout' ? 'not-allowed' : 'pointer',
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px',
                                }}
                                onMouseOver={(e) => {
                                    if (concert.status !== 'soldout') {
                                        e.target.style.transform = 'scale(1.02)';
                                        e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
                                    }
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.transform = 'scale(1)';
                                    e.target.style.boxShadow = 'none';
                                }}
                            >
                                <Ticket size={18} />
                                {concert.status === 'soldout' ? 'Sold Out' : 'Get Tickets'}
                            </button>
                        </div>
                    ))}
                </div>

                <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
            </div>
        </div>
    );
};

export default ConcertDates;