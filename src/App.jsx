import { useState, useEffect } from 'react'
// import pages here
import initalStart from "./pages/InitalStart"
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
const pages = [initalStart];
function App() {
// create a component loading system
const [page,setPage] = useState(-1);
const [queryModifiedPage, setQMP] = useState(false);
useEffect(() => {
  const url = new URL(window.location.href)
  if(url.searchParams.get('query') && url.searchParams.get('query') !== page && !queryModifiedPage) {
   console.log("modified")
    setPage(url.searchParams.get('query'))
    setQMP(true)
  }
}, [setQMP])
console.log(page)
  if(page < 0) return (
    <>
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content text-center">
    <div className="max-w-xl">
    <h1 className="text-5xl font-bold">So You Wanna Run
    a YSWS?</h1>
    <p className="py-1">
    You Ship, We Ship (YSWS) rewards hackers who ship awesome
    projects. As an organizer, you get to make that magic happen.
    </p>
    <p  className="py-6">pst. if you dont know what this is, then js close the tab</p>
    <button className="btn btn-primary" onClick={() => setPage(page + 1)}>Start organizing</button>
    </div>
    </div>
    </div>
    </>
  )
    if(!pages[page]) return (
      <>
      <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
      <div className="max-w-xl">
      <h1 className="text-5xl font-bold">Done</h1>
      <p className="py-1">
    Your done with the guide! congrats!
      </p>
      <button className="btn btn-primary" onClick={() => setPage(page - 1)}>Wait go back</button>
      </div>
      </div>
      </div>
      </>
    )
    return pages[page]({
      currentPage: page,
      nextPage: () => setPage(page + 1),
      backPage: () => setPage(page - 1)
    });
}

export default App
