export default function WebSite({ nextPage, backPage,currentPage }) {
    return <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content text-center">
    <div className="max-w-xl">
    <h1 className="text-5xl font-bold">2. Setup the website</h1>
    <p className="py-1">
To start with your YSWS you want to have some sort of demo right? Something which tells people who are doing your ysws what to <em>actually do!</em>
    </p>
    <p>This website can be a simple html/css/js site or anything which can deploy on vercel! Some examples are the <a href="https://github.com/hackclub/hacklet">Hacklet (GH)</a> and <a href="https://github.com/hackclub/grub">Grub (GH)</a>  source code!</p>
    <p>You can look at <a href="https://ysws.hackclub.com">ysws.hackclub.com</a> to get inspiration.</p>
    <p>Make sure you have the rules for your YSWS clearly displayed on your website.</p>
    <p>When your website is complete, get feedback from your POC and use <a href="https://github.com/hackclub/dns">this repo</a> to make your website a subdomain of hackclub.com!</p>
    <br />
    
    <button className="btn btn-primary" onClick={() => nextPage()}>Next</button>
    </div>
    </div>
    </div>
}
