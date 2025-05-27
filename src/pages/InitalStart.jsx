import { useEffect } from 'react';

export default function InitalStart({ nextPage, backPage, currentPage }) {
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
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#ec3750' }}>1. Create the Airtable base</h1>
          <p style={{ paddingTop: '1rem' }}>
            To create the Airtable at the moment, you must fill out&nbsp;
            <a href="https://forms.hackclub.com/t/4SCbYrvsfgus" target="_blank" style={{ color: '#338eda', textDecoration: 'underline' }}>
              this form
            </a> and then wait for the organizer to create the base for you.
          </p>
          <p>This form helps get what you need done ASAP. Once that’s complete, you can proceed on your own!</p>
          <br />
          <p>Here is what an example submission would look like:</p>
          <img
            src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/dcd16cda829b3a132d5dd32ea6c57f97fd9d6ea3_image.png"
            alt="example"
            style={{ margin: '1rem auto', maxWidth: '100%' }}
          />
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