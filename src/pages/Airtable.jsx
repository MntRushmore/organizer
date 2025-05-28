import { useEffect } from 'react';

export default function Airtable({ nextPage, backPage, currentPage }) {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#1f2d3d', padding: '2rem', minHeight: '100vh' }}>
      <div style={{ animation: 'fadeIn 0.5s ease-in-out' }}>
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#ec3750' }}>1.1 Confirm the data</h1>
          <p style={{ paddingTop: '1rem' }}>
            So you got your Airtable shared with you? Now it's time to check the tables. The database should have a table for your YSWS (You Ship We Ship), added by your POC (Point of Contact - HQ Sponsor).
            If you have creator permissions, you can now create a table where Fillout data will go!
          </p>
          <p>
            I recommend copying every column from the YSWS DB into your Fillout form Airtable,
            and also adding any relevant fields like Slack IDs.
          </p>
          <button
            className="btn"
            style={{
              backgroundColor: '#33d6a6',
              color: '#1f2d3d',
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              marginTop: '2rem',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer'
            }}
            onClick={() => nextPage()}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}