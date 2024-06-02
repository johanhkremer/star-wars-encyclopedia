import { useEffect, useState } from 'react';
import { StarWarsPerson } from '../types/StarWarsAPI.types';
import { getPerson } from '../services/StarWarsAPI';
import { Figure } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Person = () => {
    const { id } = useParams<{ id: string }>();
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false);
    const [person, setPerson] = useState<StarWarsPerson | null>(null);

    useEffect(() => {
        const fetchPerson = async () => {
            if (id) {
                const personIdNumber = parseInt(id);
                if (isNaN(personIdNumber)) {
                    setError('Invalid film ID');
                    setLoading(false);
                    return;
                }
                try {
                    setLoading(true);
                    const data = await getPerson(personIdNumber);
                    console.log('Fetched data:', data);
                    setPerson(data);
                } catch (error) {
                    console.error('Error fetching film:', error);
                    setError('An error occurred');
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchPerson();
    }, [id]);

    return (
        <>
            <div>Person</div>
            {loading && <p>Loading...</p>}
            {error && <p>Something went wrong: {error}</p>}

            {person && (
                <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={person.image_url}
                    />
                    <Figure.Caption>
                        {person.name},
                        <strong>Movies:</strong>
                        <ul>
                            {person.films.map(films => (
                                <li key={films.id}>{films.title}</li>
                            ))}
                        </ul>
                    </Figure.Caption>
                </Figure>
            )}
        </>
    );
};

export default Person;
