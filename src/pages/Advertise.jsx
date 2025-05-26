export default function Advertise({ nextPage, backPage,currentPage }) {
    return <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content text-center">
    <div className="max-w-xl">
    <h1 className="text-5xl font-bold">3. Advertising YSWS!</h1>
    <p className="py-1">
Each ysws must have a decent amount of participents or whats the point in this funding 
    </p>
    <br />
<h3>Slack channel #my-ysws</h3>
<p>Locking down your channels for your ysws is very important as its a great way to check if the name is taken! for eg</p>
<img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/b645ddbff6602f360027a0df27b3e0ac1026647f_image.png" />
<br />
<p>If your name is free congrats! i would then recommend creating the following channels:
    <ul>
<li>[name]</li>
<li>[name]-bts</li>
<li>if you plan to use airtable automations to do extensive logging: [name]-notis</li>    
</ul>  
</p>

<h3>Get featured in #happenings</h3>
<p>Once you have a description for your ysws you should dm someone on the @newspapers team to get your ysws up on #happenings!</p>
<img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/9fda627f4d9abdb43e24648d3eec1d2e8f048a66_image.png" />
    <button className="btn btn-primary" onClick={() => nextPage()}>Next</button>
    </div>
    </div>
    </div>
}
