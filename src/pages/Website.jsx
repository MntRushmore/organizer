export default function app({ nextPage, backPage,currentPage }) {
    return <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content text-center">
    <div className="max-w-xl">
    <h1 className="text-5xl font-bold">2. Setup the website</h1>
    <p className="py-1">
To start with your ysws you want to have some sort of demo right? something which tells people who are doing your ysws what to <em>actually do!</em>
    </p>
    <p>This website can be a simple html/css/js site or anything which can deploy on vercel! some examples are the <a href="https://github.com/hackclub/hacklet">Hacklet (GH)</a> and <a href="https://github.com/hackclub/grub">Grub (GH)</a>  source code!</p>
    <br />
    
    <button className="btn btn-primary" onClick={() => nextPage()}>Next</button>
    </div>
    </div>
    </div>
}
