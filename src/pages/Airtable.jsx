export default function app({ nextPage, backPage,currentPage }) {
    return <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content text-center">
    <div className="max-w-xl">
    <h1 className="text-5xl font-bold">1.1 Confirm the data</h1>
    <p className="py-1">
So you got your airtable shared with you? now time to check the tables. The tables must have some sort of table  for the ysws db added by your POC. Assuming your POC gave you creator perms on the airtable you are now able to create a table for where your fillout data will go!
    </p>
    <p> I would recommend putting every collumn on the ysws db in ur fillout form airtable as well as fields related to your ysws or stuff like slack ID's etc.</p>
    <button className="btn btn-primary" onClick={() => nextPage()}>Next</button>
    </div>
    </div>
    </div>
}
