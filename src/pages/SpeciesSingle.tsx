import { useEffect, useState } from 'react';
import { StarWarsSpeciesSingle } from '../types/StarWarsAPI.types';
import { getSpeciesSingle } from '../services/StarWarsAPI';
import { Figure } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const SpeciesSingle = () => {
    const { id } = useParams<{ id: string }>();
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false);
    const [speciesSingle, setSpeciesSingle] = useState<StarWarsSpeciesSingle | null>(null);

    useEffect(() => {
        const fetchSpeciesSingle = async () => {
            if (id) {
                const speciesSingleIdNumber = parseInt(id);
                if (isNaN(speciesSingleIdNumber)) {
                    setError('Invalid film ID');
                    setLoading(false);
                    return;
                }
                try {
                    setLoading(true);
                    const data = await getSpeciesSingle(speciesSingleIdNumber);
                    console.log('Fetched data:', data);
                    setSpeciesSingle(data);
                } catch (error) {
                    console.error('Error fetching film:', error);
                    setError('An error occurred');
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchSpeciesSingle();
    }, [id]);

    return (
        <>
            <div>SpeciesSingle</div>
            {loading && <p>Loading...</p>}
            {error && <p>Something went wrong: {error}</p>}

            {speciesSingle && (
                <Figure>
                    <Figure.Caption>
                        {speciesSingle.name},
                        <strong>Info:</strong>
                        <ul>
                            {speciesSingle.films.map(films => (
                                <li key={films.id}>{films.title}</li>
                            ))}
                        </ul>
                    </Figure.Caption>
                </Figure>
            )}
        </>
    );
};

export default SpeciesSingle;
