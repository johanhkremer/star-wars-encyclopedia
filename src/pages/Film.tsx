import { useEffect, useState } from 'react';
import { StarWarsFilm } from '../types/StarWarsAPI.types';
import { getFilm } from '../services/StarWarsAPI';
import { Figure } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Film = () => {
    const { id } = useParams<{ id: string }>();
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false);
    const [film, setFilm] = useState<StarWarsFilm | null>(null);

    useEffect(() => {
        const fetchFilm = async () => {
            if (id) {
                const filmIdNumber = parseInt(id);
                if (isNaN(filmIdNumber)) {
                    setError('Invalid film ID');
                    setLoading(false);
                    return;
                }
                try {
                    setLoading(true);
                    const data = await getFilm(filmIdNumber);
                    console.log('Fetched data:', data);
                    setFilm(data);
                } catch (error) {
                    console.error('Error fetching film:', error);
                    setError('An error occurred');
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchFilm();
    }, [id]);

    return (
        <>
            <div>Film</div>
            {loading && <p>Loading...</p>}
            {error && <p>Something went wrong: {error}</p>}

            {film && (
                <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={film.image_url}
                    />
                    <Figure.Caption>
                        {film.opening_crawl},
                        <strong>Characters:</strong>
                        <ul>
                            {film.characters.map(character => (
                                <li key={character.id}>{character.name}</li>
                            ))}
                        </ul>
                    </Figure.Caption>
                </Figure>
            )}
        </>
    );
};

export default Film;
