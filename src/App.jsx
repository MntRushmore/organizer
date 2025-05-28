import { useState, useEffect } from 'react'
// import pages here
import InitialStart from "./pages/InitalStart"
import Airtable11 from "./pages/Airtable"
import Advertise from "./pages/Advertise"
import WebSite from "./pages/Website"
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

const hackClubColors = {
  red: "#ec3750",
  orange: "#ff8c37",
  yellow: "#f1c40f",
  green: "#33d6a6",
  blue: "#338eda",
  black: "#1f2d3d",
  white: "#ffffff"
};

const pages = [InitialStart, Airtable11, WebSite, Advertise];
function App() {
// create a component loading system
const [page,setPage] = useState(-1);
const [queryModifiedPage, setQMP] = useState(false);
useEffect(() => {
  const url = new URL(window.location.href)
  const queryPage = parseInt(url.searchParams.get('query'));
  if (!isNaN(queryPage) && queryPage !== page && !queryModifiedPage) {
   console.log("modified")
    setPage(queryPage)
    setQMP(true)
  }
}, [setQMP])
console.log(page)
  if(page < 0) return (
    <div className="min-h-screen" style={{ backgroundColor: hackClubColors.white, color: hackClubColors.black }}>
    <div className="hero min-h-screen" style={{ backgroundColor: hackClubColors.red, color: hackClubColors.white, padding: "2rem" }}>
    <div className="hero-content text-center">
    <div className="max-w-xl">
    <h1 className="text-5xl font-bold" style={{ color: hackClubColors.yellow }}>So You Wanna Run
    a YSWS?</h1>
    <p className="py-1">
    You Ship, We Ship (YSWS) rewards hackers who ship awesome
    projects. As an organizer, you get to make that magic happen.
    </p>
    <p className="py-6 text-3xl font-black uppercase tracking-widest" style={{
      backgroundColor: hackClubColors.yellow,
      color: hackClubColors.black,
      padding: "0.75rem 1.5rem",
      borderRadius: "0.5rem",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
      display: "inline-block",
      transform: "rotate(-2deg)"
    }}>
      🚨 CONFIDENTIAL 🚨
    </p>
    <div className="mt-8">
      <button
        className="btn text-xl font-semibold px-6 py-3 rounded-lg transition duration-300 hover:scale-105"
        style={{
          backgroundColor: hackClubColors.green,
          color: hackClubColors.black,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)"
        }}
        onClick={() => setPage(0)}
      >
        🚀 Start the Guide
      </button>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
    if(!pages[page]) {
      return (
      <div className="h-screen overflow-hidden" style={{ backgroundColor: hackClubColors.white, color: hackClubColors.black }}>
      <div className="hero min-h-screen" style={{ backgroundColor: hackClubColors.red, color: hackClubColors.white }}>
      <div className="hero-content text-center">
      <div className="max-w-xl">
      <h1 className="text-6xl font-black mb-4" style={{ color: hackClubColors.yellow }}>🎉 You're Done!</h1>
      <p className="text-xl py-2 max-w-md mx-auto">
      Awesome work finishing the guide — you're officially ready to run an epic YSWS!
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "3rem" }}>
        <button className="btn" style={{ backgroundColor: hackClubColors.orange, color: hackClubColors.white }} onClick={() => setPage(page - 1)}>Wait go back</button>
        <button className="btn" style={{ backgroundColor: hackClubColors.blue, color: hackClubColors.white }} onClick={() => setPage(-1)}>Back Home</button>
      </div>
      </div>
      </div>
      </div>
      </div>
    )
    }
    const PageComponent = pages[page];
    return (
      <div style={{ padding: "2rem", backgroundColor: hackClubColors.white, color: hackClubColors.black, minHeight: "100vh" }}>
        <div style={{ animation: "fadeIn 0.5s ease-in-out" }} key={page}>
          <PageComponent
            currentPage={page}
            nextPage={() => setPage(page + 1)}
            backPage={() => setPage(page - 1)}
          />
        </div>
      </div>
    );
}

export default App

const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`, styleSheet.cssRules.length);
