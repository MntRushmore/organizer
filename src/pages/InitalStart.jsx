export default function app({ nextPage, backPage,currentPage }) {
    return <p>
    a go to https://github.com/hackclub/infra/issues/new?
    template=access-airtable.md
    <button onClick={nextPage}> Next {currentPage} + 1</button>
    </p>
}
