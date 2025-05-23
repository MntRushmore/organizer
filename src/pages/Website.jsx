export default function app({ nextPage, backPage,currentPage }) {
    return <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content text-center">
    <div className="max-w-xl">
    <h1 className="text-5xl font-bold">2. Setup the website</h1>
    <p className="py-1">
So to create the airtable at the moment you must fill out <a href="https://forms.hackclub.com/t/4SCbYrvsfgus" target="_blank">this form</a> and then wait for the organizer to create the base for you.
    </p>
    <p>This form helps your processes in getting the stuff you need done asap., with this done you should be able to proceed on your own!</p>
    <br />
    <p>Here is what an example submission would look like:</p>
    <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/dcd16cda829b3a132d5dd32ea6c57f97fd9d6ea3_image.png" alt="example" />
    <button className="btn btn-primary" onClick={() => nextPage()}>Next</button>
    </div>
    </div>
    </div>
}
