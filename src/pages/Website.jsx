import { useEffect } from 'react';

export default function WebSite({ nextPage, backPage, currentPage }) {
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
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#ec3750' }}>2. Setup the website</h1>
          <p style={{ paddingTop: '1rem' }}>
            To start with your YSWS, you want some kind of demo, right? Something that shows participants what to <em>actually do!</em>
          </p>
          <p>
            This website can be a simple HTML/CSS/JS site or anything that can deploy on Vercel!
            Examples include&nbsp;
            <a href="https://github.com/hackclub/hacklet" style={{ color: '#338eda' }}>Hacklet (GitHub)</a> and&nbsp;
            <a href="https://github.com/hackclub/grub" style={{ color: '#338eda' }}>Grub (GitHub)</a>.
          </p>
          <p>
            Check out&nbsp;
            <a href="https://ysws.hackclub.com" style={{ color: '#338eda' }}>ysws.hackclub.com</a> for inspiration.
          </p>
          <p>Make sure your rules are clearly displayed on the site.</p>
          <p>
            When it’s ready, get feedback from your POC and use&nbsp;
            <a href="https://github.com/hackclub/dns" style={{ color: '#338eda' }}>this repo</a> to make it a subdomain of <strong>hackclub.com</strong>!
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