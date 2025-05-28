import { useEffect } from 'react';

export default function Advertise({ nextPage, backPage, currentPage }) {
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
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#ec3750' }}>3. Advertising YSWS!</h1>
          <p style={{ paddingTop: '1rem' }}>
            Each YSWS must have a decent number of participants — otherwise, what’s the point of the funding?
          </p>
          <br />
          <h3 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Slack channel #my-ysws</h3>
          <p>Locking down your channels is a great way to check if the name is taken. For example:</p>
          <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/b645ddbff6602f360027a0df27b3e0ac1026647f_image.png" alt="Slack example" style={{ margin: '1rem auto' }} />
          <p>If your name is free, congrats! You should create the following channels:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', textAlign: 'left' }}>
            <li>[name]</li>
            <li>[name]-bts</li>
            <li>If using Airtable automations: [name]-notis</li>
          </ul>
          <br />
          <h3 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Make an #announcements post</h3>
          <p>Once you are approved by HQ, you can start crafting your #announcements post. It should have a short description, the basic rules, the website linked, and be fun and intriguing! <b>Do not make this post until your YSWS is completely ready for launch.</b></p>
          <br />
          <h3 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Get featured in #happenings</h3>
          <p>Once you have a YSWS description, DM someone on the <strong>@newspapers</strong> team to get it featured in #happenings!</p>
          <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/9fda627f4d9abdb43e24648d3eec1d2e8f048a66_image.png" alt="Happenings example" style={{ margin: '1rem auto' }} />
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
