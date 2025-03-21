import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';

interface SearchProps<T> {
    searchFunction: (input: string) => Promise<void>;
    onSearchResults: (results: T[]) => void;
}

const Search = <T,>({ searchFunction }: SearchProps<T>): JSX.Element => {
    const [error, setError] = useState<string | null>(null);
    const [input, setInput] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleSearch = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        try {
            await searchFunction(input);
        } catch (error) {
            setError('An error occurred while searching.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Form className='inline mb-3 z-index-1' onSubmit={handleSearch}>
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
