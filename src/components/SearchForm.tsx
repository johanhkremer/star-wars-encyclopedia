import Form from 'react-bootstrap/Form';

function SearchForm() {
    return (
        <>
            <Form.Label htmlFor="searchForm" className='mb-3 mt-3'>Search</Form.Label>
            <Form.Control
                type="Search"
                id="searchForm"
                aria-describedby="Search"
            />
            <Form.Text id="searchFormDesc" muted>
                Let go of your feelings and use the search.
            </Form.Text>
        </>
    );
}

export default SearchForm;