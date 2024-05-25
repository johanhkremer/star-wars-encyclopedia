import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

interface SearchProps<T> {
    searchFunction: (input: string) => Promise<T[]>;
    onSearchResults: (results: T[]) => void;
}

const Search = <T,>({ searchFunction, onSearchResults }: SearchProps<T>): JSX.Element => {
    const [input, setInput] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleSearch = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        try {
            const data = await searchFunction(input);
            onSearchResults(data);
        } catch (error) {
            setError('An error occurred while searching.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Form className='inline mb-3' onSubmit={handleSearch}>
                <Row>
                    <Col xs="auto">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                    </Col>
                    <Col xs="auto">
                        <Button type="submit">Submit</Button>
                    </Col>
                </Row>
            </Form>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
        </>
    );
};

export default Search;
