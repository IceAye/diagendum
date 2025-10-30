import * as React from 'react';

export const AuthCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '400px',
        padding: '2rem',
        background: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}
    >
      {children}
    </div>
  );
};
